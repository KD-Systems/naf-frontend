import Modal from "components/utils/Modal";
import { useEffect, useState } from "react";
import CompanyService from "services/CompanyService";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequisitionService from "services/RequisitionService";
import Select from "react-select";

toast.configure();

const UpdatePartInfo = ({ open, part, onCloseModal, onUpdated }) => {
  console.log("🚀 ~ file: UpdatePartInfo.jsx:13 ~ UpdatePartInfo ~ part", part)
  const [data, setData] = useState({
    status: part.status,
    remarks: part.remarks,
  });
  
  const [info, setInfo] = useState(part);

  const status = [
    { value: "pending", label: "Pending" },
    { value: "waiting_for_tajima", label: "Waiting for mother company" },
    { value: "complete", label: "Complete" },
  ];

  const [defaultStatus, setDefaultStatus] = useState({ value: "a", label:"a"})

  useEffect(() => {
    setDefaultStatus({ value: part?.status, label:part?.status?.replaceAll("_", " ")?.capitalize()})
    // setDefaultStatus({ value: "ab", label:"ab"})
  }, [part])
  
  // const defaultStatus = 
    // { value: data?.status, label:data?.status?.replaceAll("_", " ")?.capitalize()}
    

    // const getPart = async () => {
    //     let res = await RequisitionService.getRequestedPart(part);
    //     setInfo(res);
    //     setData({
    //       ...data,
    //       status: res.status,
    //       remarks: res.remarks,
    //     });
    // };

    // useEffect(() => {
    //   if (part) getPart();
    // }, [part, open]);


  const updateInfo = async () => {
    await RequisitionService.updateRequestedPart(part?.id, data);
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
                    <span>Status:<h3>{info?.status}</h3></span><br/>
                    <span>Remarks: {info?.remarks}</span>
                </div>
                <br/>
                <br/>
              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Status</label>

                <Select
                  options={status}
                  defaultValue={defaultStatus}
                  onChange={handleSelect}
                  name="status"
                  id="status"
                  // value={data?.status}
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
                  // value={info?.remarks}
                  id="remarks"
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

export default UpdatePartInfo;
