import React, { useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import MachineService from "services/MachineService";
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PartService from "services/PartService";
import MachineModelService from "services/MachineModelService";

const CreatePart = ({ open, onCloseModal, onCreated }) => {

  const [machines, setMachines] = useState([])
  const [machineModels, setMachineModels] = useState([])
  const [data, setData] = useState({
    machine_id: '',
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
    await PartService.create(data);
    onCreated();
    onCloseModal();
  }

  const getMachines = async () => {
    let data = await MachineService.getAll()
    data = data.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setMachines(data);
  };

  const getMachineModels = async (machineId) => {
    let data = await MachineModelService.getAll(machineId)
    data = data.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setMachineModels(data);
  };

  useEffect(() => {
    if (open) //Prevent preload data while modal is hidden
      getMachineModels(data.machine_id);
  }, [data.machine_id]);

  useEffect(() => {
    if (open) //Prevent preload data while modal is hidden
      getMachines();
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
                <label className="form-label">Machine</label>
                <Select options={machines} onChange={handleSelect} name="machine_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Machine Model</label>
                <Select options={machineModels} onChange={handleSelect} name="machine_model_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="machine_model_id"></div>
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Part Heading</label>
                <Select options={machines} onChange={handleSelect} name="part_heading_id" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="part_heading_id"></div>
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
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="description"></div>
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

export default CreatePart;
