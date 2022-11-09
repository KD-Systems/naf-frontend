import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import CompanyService from "services/CompanyService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const UpdateTradeLimit = ({ open, companyId, onCloseModal, onUpdated }) => {

  const [data, setData] = useState({
    trade_limit: "",
    remarks: "",
  });

  const getCompany = async () => {
    const res = await CompanyService.get(companyId);
    setData({
      ...data,
      trade_limit: res.trade_limit,
      due_amount: res.due_amount,
    });
  };
  useEffect(() => {
    if (companyId) getCompany();
  }, [companyId, open]);

  const updateCompany = async () => {
    await CompanyService.updateDueLimit(companyId, data);
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
        title={<>Trade Limit</>}
        body={
          <>
            <form id="update-company">
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Trade limit</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Trade Limit"
                  name="trade_limit"
                  value={data.trade_limit ?? ""}
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
                  placeholder="Enter Description"
                  name="remarks"
                  id="description"
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
                onClick={updateCompany}
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

export default UpdateTradeLimit;
