import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import CompanyService from "services/CompanyService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequisitionService from "services/RequisitionService";
toast.configure();

const UpdateReqInfo = ({ open, reqId, onCloseModal, onUpdated }) => {

  const [data, setData] = useState({
    expected_delivery: "",
    remarks: "",
  });

  const getRequisition = async () => {
    let res = await RequisitionService.get(reqId);
    setData({
      ...data,
      expected_delivery: res.expected_delivery,
      remarks: res.remarks,
    });
  };
  useEffect(() => {
    if (reqId) getRequisition();
  }, [reqId, open]);

  const updateInfo = async () => {
    await RequisitionService.updateReqInfo(reqId, data);
    onUpdated();
    onCloseModal();
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };


  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Update Info</>}
        body={
          <>
            <form id="update-company">
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Expected Delivery</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Expected Delivery date"
                  name="expected_delivery"
                  value={data.expected_delivery ?? ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="description"
                ></div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter remarks"
                  name="remarks"
                  id="remarks"
                  value={data.remarks ?? ""}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="description"
                ></div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={updateInfo}
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

export default UpdateReqInfo;
