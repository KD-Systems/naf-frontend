import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import CompanyService from "services/CompanyService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequisitionService from "services/RequisitionService";
import Select from "react-select";

toast.configure();

const UpdateDeliveredPartInfo = ({ open, part, onCloseModal, onUpdated }) => {
  const [data, setData] = useState();

  const status = [
    { value: "from_foc", label: "From Foc" },
    { value: "waiting_for_tajima", label: "Waiting for mother company" },
    { value: "complete", label: "Complete" },
  ];

  useEffect(() => {
    setData({
      status: part.status,
      remarks: part.remarks,
    });
  }, [part]);

  const updateInfo = async () => {
    try {
      // console.log(data)
      await RequisitionService.updateFocRequisitionPart(part?.id, data);
      onUpdated();
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    console.log()
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSelect = (option, conf) => {
    let value = option.value;
    if (Array.isArray(option))
      value = option.map((dt) => {
        return dt.value;
      });

    const name = conf.name;
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
              <div>
                <span>
                  Status:
                  <h3>{part?.status?.replaceAll("_", " ")?.capitalize()}</h3>
                </span>
                <br />
                <span>Remarks: {part?.remarks}</span>
              </div>
              <br />
              <br />
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label required">Status</label>

                <Select
                  options={status}
                  defaultValue={status.filter((i) => i.value === part?.status)}
                  onChange={handleSelect}
                  name="status"
                  id="status"
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="status"
                ></div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label required">Remarks</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter remarks"
                  name="remarks"
                  value={data?.remarks}
                  id="remarks"
                  onChange={handleChange}
                />
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

export default UpdateDeliveredPartInfo;
