import { useEffect, useState } from "react";
import Select from "react-select";
import CompanyService from "services/CompanyService";

function InvoiceFilter({ enable, onChange }) {
  let user = JSON.parse(localStorage.getItem("user"))?.user;

  const [data, setData] = useState({
    status: null,
    type: null,
  });
  const status = [
    { label: "Paid", value: "paid" },
    { label: "Due", value: "due" },
  ];
  const [type, setType] = useState(null);

  useEffect(async () => {
    const res = await CompanyService.getAll({rows:'all'});
    const companyName = res?.map((itm) => {
      return { label: itm?.name, value: itm?.id };
    });
    setType(companyName)
  }, []);

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
    console.log("🚀 ~ file: InvoiceFilter.jsx ~ line 42 ~ apply ~ data", data)
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

    if (name === "company_id")
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

  return (
    <>
      <div
        className={
          enable
            ? "menu menu-sub menu-sub-dropdown w-250px w-md-300px show"
            : "menu menu-sub menu-sub-dropdown w-250px w-md-300px"
        }
        style={custom}
      >
        <div className="px-7 py-5">
          <div className="fs-5 text-dark fw-bolder">Filter Options</div>
        </div>
        <div className="separator border-gray-200"></div>
        <div className="px-7 py-5">
          <div className="mb-10">
            <label className="form-label fw-bold">Payment Status:</label>
            <Select
              options={status}
              onChange={(option, action) => handleSelect(option, action)}
              name="status"
              value={defaultStatus}
            />
          </div>
          <div className="mb-10">
            <label className="form-label fw-bold">Company:</label>
            <Select
              options={type}
              onChange={(option, action) => handleSelect(option, action)}
              name="company_id"
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

export default InvoiceFilter;
