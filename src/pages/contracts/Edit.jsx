import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import ContractService from "../../services/ContractService";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditContract = ({ open, onCloseModal, getContracts, contractId }) => {
  const [data, setData] = useState({
    machine_id: '',
    machine_model_id: '',
    start_date: '',
    end_date: '',
    notes: ''
  })
  const [companies, setCompanies] = useState([
    {
      label: 'test',
      value: 'test',
    }
  ])

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setData({
      ...data, [name]: value
    })
  }

  const handleDateSelect = (value, name) => {
    setData({
      ...data, [name]: new Date(value)
    })
  }

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;

    setData({
      ...data, [name]: value
    })
  }

  const updateContract = async (data) => {
    await ContractService.update(contractId, data);
    getContracts();
  }

  const onSumbit = (e) => {
    e.preventDefault();
    updateContract(data);
    onCloseModal();
  }

  const getContract = async () => {
    let dt = await ContractService.get(contractId);
    dt = { ...dt, ['start_date']: new Date(Date.parse(dt.start_date)) } //Parse the date as per the date select requires
    dt = { ...dt, ['end_date']: new Date(Date.parse(dt.end_date)) } //Parse the date as per the date select requires
    setData(dt)
  };

  useEffect(() => {
    if (open && contractId)
      getContract();
  }, [contractId]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit Contract</>}
        body={
          <>
            <form>
              <div className="form-group mt-5">
                <label className="form-label">Machine</label>
                <Select options={companies} onChange={handleSelect} name="machine_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Machine Model</label>
                <Select options={companies} onChange={handleSelect} name="machine_model_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_model_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Start Date</label>
                <DatePicker className="form-control" selected={data.start_date} onChange={(date) => handleDateSelect(date, 'start_date')} />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="start_date"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">End Date</label>
                <DatePicker className="form-control" selected={data.end_date} onChange={(date) => handleDateSelect(date, 'end_date')} />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="end_date"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Notes</label>
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Notes"
                  name="notes"
                  id="notes"
                  onChange={handleChange}
                  defaultValue={data.notes}
                />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="notes"></div>
              </div>

              <div className="form-group mt-5">
                <div className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={data.status}
                    defaultValue={data.status}
                    name="status"
                    id="status"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="status">
                    Status {data.status ? "active" : "inactive"}
                  </label>
                  <div className="fv-plugins-message-container invalid-feedback" htmlFor="status"></div>
                </div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSumbit}
              >
                Update
              </button>
              <button
                type="reset"
                className="btn btn-secondary  mt-5 "
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </form>
          </>
        }
      />
    </div>
  );
};

export default EditContract;
