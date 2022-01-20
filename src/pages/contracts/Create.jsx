import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import ContractService from "../../services/ContractService";
import CompanyService from "../../services/CompanyService";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateContract = ({ open, onCloseModal, getContracts }) => {

  const [companies, setCompanies] = useState([])
  const [data, setData] = useState({
    achine_id: '',
    machine_model_id: '',
    start_date: '',
    end_date: '',
    notes: ''
  })
  const [block, setBlock] = useState(false);

  const handleDateSelect = (value, name) => {
    setData({
      ...data, [name]: new Date(value)
    })
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const addContract = async () => {
    setBlock(true)
    await ContractService.create(data);
    getContracts();
    onCloseModal();
  }

  const getCompanies = async () => {
    let data = await CompanyService.getAll()
    data = data.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setCompanies(data);
  };

  useEffect(() => {
    if (open) //Prevent preload data while modal is hidden
      getCompanies();
    setBlock(false)
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Contract</>}
        body={
          <>
            <form>
              <div className="form-group mt-5">
                <label className="form-label">Company</label>
                <Select options={companies} onChange={handleSelect} name="company_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="company_id"></div>
              </div>

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
                  name="description"
                  id="description"
                  onChange={handleChange}
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <button
                disabled={block}
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={() => { addContract() }}
              >
                Submit
              </button>
              <button
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

export default CreateContract;
