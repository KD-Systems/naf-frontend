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

  const getHeadings = async () => {
    let res = await MachinePartHeadingService.getAll()
    setHeadings(res.map((dt) => ({ label: dt.name, value: dt.id })));
  };

  const handleSelect = (option, conf) => {
    const value = option.label;
    const name = conf.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const createBox = async (data) => {
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

  const onSumbit = async () => {
    await createBox(data);
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
        title={<>Add Box Heading</>}
        body={
          <>
            <div className="form-group">
              <label className="required form-label">Name</label>
              <Select
                options={headings}
                onChange={handleSelect}
                name="name"
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
