import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import ContractService from "../../services/ContractService";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MachineService from "services/MachineService";
import MachineModelService from "services/MachineModelService";

const EditContract = ({ open, onCloseModal, onUpdated, contractId }) => {
  const [machines, setMachines] = useState([])
  const [machineModels, setMachineModels] = useState([])
  const [defaultMachine, setDefaultMachine] = useState(null)
  const [defaultModel, setDefaultModel] = useState(null)
  const [data, setData] = useState({
    machine_id: '',
    machine_model_id: '',
    start_date: '',
    end_date: '',
    notes: ''
  })
  const [block, setBlock] = useState(false);

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

  const updateContract = async () => {
    await ContractService.update(contractId, data);
    onUpdated();
    onCloseModal();
  }

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

  const getContract = async () => {
    let dt = await ContractService.get(contractId);
    dt = {
      ...dt, ...{
        end_date: new Date(Date.parse(dt.end_date)),
        start_date: new Date(Date.parse(dt.start_date)),
        machine_model_id: dt.machine_model?.id,
        machine_id: dt.machine?.id
      }
    } //Parse the date as per the date select requires
    setData(dt)

    setDefaultModel({ label: dt.machine_model?.name, value: dt.machine_model?.id })
    setDefaultMachine({ label: dt.machine?.name, value: dt.machine?.id })
  };

  useEffect(() => {
    if (data.machine_id && open)
      getMachineModels(data.machine_id)
  }, [contractId, data.machine_id]);

  useEffect(() => {
    if (contractId && open) {
      getMachines();
      getContract();
    }
    setBlock(false)
  }, [open, contractId]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit Contract</>}
        body={
          <>
            <div className="form-group">
              <label className="required form-label">Machine</label>
              {defaultMachine && <Select options={machines} onChange={handleSelect} name="machine_id" defaultValue={defaultMachine} />}
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_id"></div>
            </div>

            <div className="form-group mt-5">
              <label className="required form-label">Machine Model</label>
              {defaultModel && <Select options={machineModels} onChange={handleSelect} name="machine_model_id" defaultValue={defaultModel} />}
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

            <div className="form-group mt-5 mb-2">
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
                  Status {data.status ? "Active" : "Inactive"}
                </label>
              </div>
            </div>

            <button
              disabled={block}
              className="btn btn-primary mr-2 mt-5"
              style={{ marginRight: "1rem" }}
              onClick={updateContract}
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
          </>
        }
      />
    </div>
  );
};

export default EditContract;
