import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import BoxHeadingService from "services/BoxHeadingService";
import Select from "react-select";
import MachinePartHeadingService from "services/MachinePartHeadingService";

const CreateBoxHeading = ({ open, onCloseModal, onChange }) => {
  const [data, setData] = useState({
    name: "",
    designation: "",
  });
  const [headings, setHeadings] = useState([])
  const [defaultHeading, setDefaultHeading] = useState(null)

  const getHeadings = async () => {
    setHeadings(await MachinePartHeadingService.getAll());
  };

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const createWareHouse = async (data) => {
    await BoxHeadingService.create(data);
    onChange();
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
    createWareHouse(data);
    onCloseModal();
  };

  useEffect(() => {
    if (open)
      getHeadings()
  }, [open])


  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Create Warehouse</>}
        body={
          <>

            <div className="form-group">
              <label className="required form-label">Name</label>
              <Select
                options={headings}
                onChange={handleSelect}
                name="role"
                defaultValue={defaultHeading ?? ""}
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

          </>
        }
      />
    </div>
  );
};

export default CreateBoxHeading;
