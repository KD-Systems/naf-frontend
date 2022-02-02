import React, { useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import ContractService from "services/ContractService";
import CompanyService from "services/CompanyService";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MachineService from "services/MachineService";
import MachineModelService from "services/MachineModelService";
import Moment from "react-moment";
import moment from "moment";

const CreateContract = ({ open, onCloseModal, onCreated }) => {

  const [companies, setCompanies] = useState([])
  const [machines, setMachines] = useState([])
  const [machineModels, setMachineModels] = useState([])
  const [data, setData] = useState({
    company_id: '',
    machine_id: '',
    machine_model_id: '',
    start_date: '',
    end_date: '',
    start_date_format: '',
    end_date_format: '',
    notes: ''
  })
  const [block, setBlock] = useState(false);

  const handleDateSelect = (value, name) => {
    setData({
      ...data, ...{[name]: new Date(value), [name+'_format']: moment(value).format("YYYY/MM/DD")}
    })
    setBlock(false)
  }

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const handleSelect = (option, conf) => {
    let value = option.value;
    if (Array.isArray(option))
      value = option.map((dt) => {
        return dt.value;
      });

    const name = conf.name;
    setBlock(false)

    setData({
      // eslint-disable-next-line no-undef
      ...data, [name]: value
    })
  }

  const addContract = async () => {
    setBlock(true)
    let formData = new FormData(document.getElementById("create-contract"));
    await ContractService.create(formData);
    onCreated();
    onCloseModal();
  }

  const getCompanies = async () => {
    let data = await CompanyService.getAll()
    data = data.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setCompanies(data);
  };

  const getMachines = async () => {
    setBlock(false)
    let dt = await MachineService.getAll()
    dt = dt.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setMachines(dt);
    setBlock(false)
  };

  const getMachineModels = async (machineId) => {
    setBlock(false)
    let dt = await MachineModelService.getAll(machineId)
    dt = dt.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setMachineModels(dt);
    setData({
      ...data, ...{ machine_model_id: null }
    })
    setBlock(false)
  };

  useEffect(() => {
    if (data.machine_id && open)
      getMachineModels(data.machine_id)
  }, [data.machine_id]);

  useEffect(() => {
    if (open) {
      getCompanies();
      getMachines();
    }
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
            <form id="create-contract">
              <div className="form-group">
                <label className="required form-label">Company</label>
                <Select options={companies} onChange={handleSelect} name="company_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="company_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Machine</label>
                <Select options={machines} onChange={handleSelect} name="machine_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">Machine Model</label>
                <Select isMulti options={machineModels} onChange={handleSelect} name="machine_model_id[]" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_model_id"></div>
              </div>

              {data['machine_model_id[]'] && data['machine_model_id[]']?.map((itm, key) => (
                <div key={key} className="form-group mt-5">
                  <label className="form-label">MFG Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter MFG Number"
                    name={`mfg_number[${itm}]`}
                    id="mfg_number"
                    onChange={handleChange}
                    value={data.mfg_number?.itm}
                  />
                  <div className="fv-plugins-message-container invalid-feedback" htmlFor={`mfg_number[${itm}]`}></div>
                </div>
              ))}

              <div className="form-group mt-5">
                <label className="required form-label">Start Date</label>
                <DatePicker className="form-control" selected={data.start_date} onChange={(date) => handleDateSelect(date, 'start_date')} />
                <input type='hidden' name="start_date" id="start_date" value={data.start_date_format}/>
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="start_date"></div>
              </div>

              <div className="form-group mt-5">
                <label className="required form-label">End Date</label>
                <DatePicker className="form-control" selected={data.end_date} onChange={(date) => handleDateSelect(date, 'end_date')} />
                <input type='hidden' name="end_date" id="end_date" value={data.end_date_format} />
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
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="description"></div>
              </div>

              <div className="form-group mt-5 mb-2">
                <div className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked={data.is_foc}
                    defaultValue={data.is_foc}
                    name="is_foc"
                    id="is_foc"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="is_foc">
                    Under FOC
                  </label>
                </div>
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
