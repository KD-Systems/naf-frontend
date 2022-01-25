import React, { useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import "react-datepicker/dist/react-datepicker.css";
import PartService from "services/PartService";

const EditPart = ({ open, onCloseModal, partId, onUpdated }) => {
  const [data, setData] = useState({
    remarks: '',
    description: ''
  })
  const [block, setBlock] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const updatePart = async () => {
    setBlock(true)
    await PartService.update(partId, data);
    onUpdated();
    onCloseModal();
  }

  const getPart = async () => {
    setBlock(true)
    let data = await PartService.get(partId)
    setData(data);
    setBlock(false)
  };

  useEffect(() => {
    if (open)
      getPart()
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Part</>}
        body={
          <>
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
                value={data.description ?? ''}
              />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="description"></div>
            </div>

            <div className="form-group mt-5">
              <label className="form-label">Remarks</label>
              <textarea
                rows="3"
                type="text"
                className="form-control"
                placeholder="Enter Remarks"
                name="remarks"
                id="remarks"
                onChange={handleChange}
                value={data.remarks ?? ''}
              />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="remarks"></div>
            </div>

            <button
              disabled={block}
              className="btn btn-primary mr-2 mt-5"
              style={{ marginRight: "1rem" }}
              onClick={() => { updatePart() }}
            >
              Update
            </button>
            <button
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

export default EditPart;
