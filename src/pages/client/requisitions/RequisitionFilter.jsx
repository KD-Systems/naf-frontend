import { useEffect, useState, useRef } from "react";
import Select from "react-select";

function RequisitionFilter({ enable, onClickOutside, onChange }) {
  const ref = useRef(null);
  let user = JSON.parse(localStorage.getItem("user"))?.user;

  const [data, setData] = useState({
    status: null,
    type: null,
  });
  const status = [
    { label: "All", value: null },
    { label: "Pending", value: "pending" },
    { label: "Approved", value: "approved" },
  ];
  const type = [
    { label: "All", value: null },
    { label: "Purchase Request", value: "purchase_request" },
    { label: "Claim Report", value: "claim_report" },
  ];
  const [defaultStatus, setDefaultStatus] = useState({
    label: "All",
    value: null,
  });
  const [defaultType, setDefaultType] = useState({ label: "All", value: null });

  let custom = {
    zIndex: 105,
    position: "fixed",
    inset: "0px 0px auto auto",
    margin: 0,
    transform: "translate(-100%, 50%)",
  };

  const apply = () => {
    typeof onChange === "function" && onChange(data);
  };

  const handleSelect = (option, action) => {
    const value = option.value;
    const name = action.name;

    setData({
      ...data,
      [name]: value,
    });

    if (name === "status")
      setDefaultStatus({
        label: option.label,
        value: value,
      });

    if (name === "type")
      setDefaultType({
        label: option.label,
        value: value,
      });
  };

  const reset = () => {
    setData({
      status: null,
      type: null,
    });

    setDefaultStatus({ label: "All", value: null });
    setDefaultType({ label: "All", value: null });

    typeof onChange === "function" &&
      onChange({
        status: null,
        type: null,
      });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target))
        onClickOutside && onClickOutside();
    };

    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [onClickOutside]);

  if (!enable) return null;

  return (
    <>
      <div
        ref={ref}
        className="menu menu-sub menu-sub-dropdown w-250px w-md-300px show"
        style={custom}
      >
        <div className="px-7 py-5">
          <div className="fs-5 text-dark fw-bolder">Filter Options</div>
        </div>
        <div className="separator border-gray-200"></div>
        <div className="px-7 py-5">
          <div className="mb-10">
            <label className="form-label fw-bold">Status:</label>
            <Select
              options={status}
              onChange={(option, action) => handleSelect(option, action)}
              name="status"
              value={defaultStatus}
            />
          </div>
          <div className="mb-10">
            <label className="form-label fw-bold">Requisition Type:</label>
            <Select
              options={type}
              onChange={(option, action) => handleSelect(option, action)}
              name="type"
              value={defaultType}
            />
          </div>

          <div className="d-flex justify-content-end">
            <button
              onClick={reset}
              type="button"
              className="btn btn-sm btn-light btn-active-light-primary me-2"
            >
              Reset
            </button>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => {
                apply();
              }}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RequisitionFilter;
