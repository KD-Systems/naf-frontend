import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import CompanyService from "services/CompanyService";
const DateFilter = ({ enable, onChange }) => {
  const [companies, setCompanies] = useState([]);
  // const status = [
  //   { value: 'paid', label: "Paid" },
  //   { value: 'due', label: "Due" },
  // ];
  const type = [
    { value: 'cash', label: "Cash" },
    { value: 'bank', label: "Bank" },
    { value: 'check', label: "Check" },
    { value: 'card', label: "Card" },
    { value: 'advance', label: "Advance" },
    
  ];
  const [data, setData] = useState({
    type: "",
  });
  // const getCompanies = async () => {
  //   let dt = await CompanyService.getAll({
  //     rows: "all",
  //   });

  //   dt = dt.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
  //   setCompanies(dt);
  // };
  // useEffect(() => {
  //   getCompanies();
  // }, []);

  const [block, setBlock] = useState(false);

  let custom = {
    zIndex: 20,
    position: "fixed",
    inset: "0px 0px auto auto",
    margin: 0,
    transform: "translate(-90%, 70%)",
  };

  const apply = () => {
    typeof onChange === "function" && onChange(data);
  };
  //for company
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

  const handleDateSelect = (value, name) => {
    setData({
      ...data,
      ...{
        [name]: new Date(value),
        [name + "_format"]: moment(value).format("YYYY-MM-DD"),
      },
    });
    setBlock(false);
  };

  const reset = () => {
    window.location.reload(false);
    setData({
      type: "",
    });

    typeof onChange === "function" &&
      onChange({
        type: "",
      });
  };

  return (
    <>
      {" "}
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
            <label className="form-label fw-bold">Type:</label>
            <Select options={type} onChange={handleSelect} name="type" />
            <div
              className="fv-plugins-message-container invalid-feedback"
              htmlFor="month"
            ></div>
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
};

export default DateFilter;
