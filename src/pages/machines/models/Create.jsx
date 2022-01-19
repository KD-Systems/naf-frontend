import React, { useState } from "react";
import MachineService from "../../services/MachineService";
import Modal from "~/components/utils/Modal";

const CreateMachineModelModel = ({ open, onCloseModal, getMachineModels }) => {
  const [data, setData] = useState({
    name: "",
    designation: "",
  });

  const createMachineModel = async (data) => {
    await MachineService.create(data);
    getMachineModels();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const onSumbit = (e) => {
    e.preventDefault();
    createMachineModel(data);

    onCloseModal();
  };
  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Machine Model</>}
        body={
          <>
            <form>
              <div className="form-group">
                <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter  Name"
                  name="name"
                  id="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group mt-5">
                <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter  Description"
                  name="description"
                  id="description"
                  onChange={handleChange}
                />
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={onSumbit}
              >
                Create
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

export default CreateMachineModelModel;
