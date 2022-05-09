import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
const DateFilter = ({ enable, onChange }) => {
    
    const [data, setData] = useState({
        stock: 'all',
        start_date: null,
        end_date: null,
        start_date_format: null,
        end_date_format: null,
    })

    console.log(data);

    const [block, setBlock] = useState(false);

    let custom = { zIndex: 105, position: 'fixed', inset: '0px 0px auto auto', margin: 0, transform: 'translate(-60%, 50%)' };

    const apply = () => {
        typeof onChange === 'function' && onChange(data)
    }

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setData({
            ...data,
            [name]: value,
        });
    };

    const handleDateSelect = (value, name) => {
        setData({
          ...data, ...{ [name]: new Date(value), [name + '_format']: moment(value).format("YYYY-MM-DD") }
        })
        setBlock(false)
      }

    const reset = () => {
        setData({
            stock: 'all',
            start_date: null,
            end_date: null,
            start_date_format: null,
            end_date_format: null,
        })


        typeof onChange === 'function' && onChange({
            stock: 'all',
            start_date: null,
            end_date: null,
            start_date_format: null,
            end_date_format: null,
        })
    }

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
            <label className="form-label fw-bold">Start Date:</label>
            <DatePicker className="form-control" selected={data.start_date} onChange={(date) => handleDateSelect(date, 'start_date')} />
                <input type='hidden' name="start_date" id="start_date" value={data.start_date_format} />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="start_date"></div>
          </div>
          <div className="mb-10">
            <label className="form-label fw-bold">End Date:</label>
            <DatePicker className="form-control" selected={data.end_date} onChange={(date) => handleDateSelect(date, 'end_date')} />
                <input type='hidden' name="end_date" id="end_date" value={data.end_date_format} />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="end_date"></div>
          </div>
          <div className="mb-10">
            <label className="form-label fw-bold">Stock:</label>
            <div className="d-flex">
              <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                <input
                  className="form-check-input"
                  type="radio"
                  value="all"
                  name="stock"
                  checked={data.stock === "all"}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="form-check-label">All</span>
              </label>
              <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                <input
                  className="form-check-input"
                  type="radio"
                  value="available"
                  name="stock"
                  checked={data.stock === "available"}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="form-check-label">Available</span>
              </label>
              <label className="form-check form-check-sm form-check-custom form-check-solid">
                <input
                  className="form-check-input"
                  type="radio"
                  value="unavailable"
                  name="stock"
                  checked={data.stock === "unavailable"}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
                <span className="form-check-label">Unavailable</span>
              </label>
            </div>
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
