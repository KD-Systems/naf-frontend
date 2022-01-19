import React, { useState, useEffect } from "react";
import Modal from "../../components/utils/Modal";
import MachineService from "../../services/MachineService";

const EditMachine = ({ open, onCloseModal, getMachines, machineId }) => {
  const [machine, setMachine] = useState("");
  const [data, setData] = useState({ name: "", description: "" });

  const getMachine = async () => {
    setMachine(await MachineService.get(machineId));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    let tempdata = { ...data };
    tempdata[name] = value;

    setData(tempdata);
  };

  const updateMachine = async () => {
    await MachineService.update(machineId, data);
    getMachines();
    onCloseModal();
  };


  useEffect(() => {
    if (open) {
      getMachine();
    }
  }, [open, machineId]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit machine</>}
        id={machineId}
        body={
          <>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Name"
                  name="name"
                  id="name"
                  value={data.name || ""}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Designation Description"
                  name="description"
                  id="description"
                  value={data.description || ""}
                  onChange={handleChange}
                />
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  updateMachine()
                }}
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

export default EditMachine;
