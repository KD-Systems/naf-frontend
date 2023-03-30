import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InvoiceService from "services/InvoiceService";
toast.configure();

const UpdateInfo = ({ open, InvoiceId, onCloseModal, onUpdated }) => {
  console.log("🚀 ~ file: UpdateInfo.jsx:9 ~ UpdateInfo ~ InvoiceId:", InvoiceId)
  const [data, setData] = useState({
    remarks: "",
  });

  const getInvoice = async () => {
    let res = await InvoiceService.get(InvoiceId);
    console.log("🚀 ~ file: UpdateInfo.jsx:15 ~ getInvoice ~ res:", res)
    setData({
      ...data,
      remarks: res.remarks,
    });
  };
  useEffect(() => {
    if (InvoiceId) getInvoice();
  }, [InvoiceId, open]);

  const updateInfo = async () => {
    await InvoiceService.updateInfo(InvoiceId,data);
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
            <form id="update-info">
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Remarks</label>
                <textarea
                  className="form-control"
                  name="remarks"
                  id="remarks"
                  value={data.remarks ?? ""}
                  onChange={handleChange}
                ></textarea>
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="remarks"
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

export default UpdateInfo;
