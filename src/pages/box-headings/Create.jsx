import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import BoxHeadingService from "services/BoxHeadingService";
import Select from "react-select";
import MachinePartHeadingService from "services/PartHeadingService";

const CreateBoxHeading = ({ open, onCloseModal, onChange }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    extended: "",
  });
  const [headings, setHeadings] = useState([])

  const getHeadings = async () => {
    let res = await MachinePartHeadingService.getAll()
    setHeadings(res.map((dt) => ({ label: dt.name, value: dt.id })));
  };

  const handleCheck = (e) => {
    setData({ ...data, extended: e.target.checked })
  }

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
    setData({
      name: "",
      description: "",
      extended: "",
    })
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
              <div className="form-check form-switch form-check-custom form-check-solid me-10">
                <input
                  checked={data.extended}
                  className="form-check-input h-30px w-50px"
                  name="extended"
                  type="checkbox"
                  id="extended"
                  onChange={handleCheck}
                />
                <label
                  className="form-check-label"
                  htmlFor="extended"
                >
                  Extended Box
                </label>
              </div>
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
