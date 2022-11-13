import Modal from "components/utils/Modal";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdvanceService from "services/AdvanceService";
toast.configure();

const AdvanceAmount = ({ open, companyId, onCloseModal, onUpdated }) => {

   const [data, setData] = useState({
    company_id: companyId,
    amount:'',
    remarks: "",
    transaction_type: true
  });

  const updateCompany = async () => {
    await AdvanceService.create(data);
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
        title={<>Add Due Amount</>}
        body={
          <>
            <form id="update-company">
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Due Amount</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  name="amount"
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

export default AdvanceAmount;
