import React, { useState, useEffect } from "react";
import Modal from "components/utils/Modal";
import MachinePartHeadingService from "services/MachinePartHeadingService";
const EditHeadings = ({
  open,
  onCloseModal,
  onUpdated,
  machineId,
  headingId,
}) => {
  const [data, setData] = useState({
    name: "",
    common_heading: false,
    remarks: "",
    description: "",
  });


  const getPartHeading = async () => {
    setData(await MachinePartHeadingService.get(machineId, headingId));
  };
  const [block, setBlock] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlock(false);

    setData({
      ...data,
      [name]: value,
    });
  };

  const updateHeadings = async (e) => {
    setBlock(true);
    await MachinePartHeadingService.update(machineId, headingId, data);
    onUpdated();
    onCloseModal();
  };


  useEffect(() => {
    if (open)
    getPartHeading();
    setBlock(false)

  }, [open, headingId]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Edit Headings</>}
        id={headingId}
        body={
          <>
            <div className="form-group mt-5">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                id="name"
                onChange={handleChange}
                value={data.name ?? ""}
              />
              <div
                className="fv-plugins-message-container invalid-feedback"
                htmlFor="name"
              ></div>
            </div>

            <div className="form-group mt-5">
            <input
                type="checkbox"
                className="form-check-input"
                placeholder="Enter Common Heading"
                name="common_heading"
                id="common_heading"
                onChange={handleChange}
                defaultChecked={data.common_heading}
                defaultValue={data.common_heading == true ? "true" : "false"}
              />
              {" "}
               <label className="form-check-label" htmlFor="flexSwitchDefault">
                  Common Heading 
                  </label>
              <div
                className="fv-plugins-message-container invalid-feedback"
                htmlFor="common_heading"
              ></div>
            </div>

           

            <div className="form-group mt-5">
              <label className="form-label">Description</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                placeholder="Enter Description"
                name="description"
                id="description"
                onChange={handleChange}
                value={data.description ?? ""}
              />
              <div
                className="fv-plugins-message-container invalid-feedback"
                htmlFor="description"
              ></div>
            </div>

            <div className="form-group mt-5">
            <label className="form-label">Remarks</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                placeholder="Enter  Remarks"
                name="remarks"
                id="remarks"
                onChange={handleChange}
                value={data.remarks}
              />
              <div
                className="fv-plugins-message-container invalid-feedback"
                htmlFor="remarks"
              ></div>
            </div>

            <button
              disabled={block}
              className="btn btn-primary mr-2 mt-5"
              style={{ marginRight: "1rem" }}
              onClick={(e) => {
                updateHeadings(e);
              }}
            >
              Update
            </button>
            <button className="btn btn-secondary  mt-5 " onClick={onCloseModal}>
              Cancel
            </button>
          </>
        }
      />
    </div>
  );
};

export default EditHeadings;