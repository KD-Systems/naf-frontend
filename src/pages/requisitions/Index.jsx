import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import CompanyService from "services/CompanyService";
import moment from "moment";
import PartService from "services/PartService";
import MachinePartHeadingService from "services/PartHeadingService";
import RequisitionService from "services/RequisitionService";

const Requisitions = () => {
  const [companies, setCompanies] = useState([]);
  const [machineModels, setMachineModels] = useState([]);
  const [filter, setFilter] = useState({
    part_heading_id: null,
  });

  const [partHeadings, setPartHeadings] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [list, setList] = useState([]); /* for adding part in requisition */
  const [selectedPart, setSelectedPart] = useState(false) /* Check Part selected or not selected*/
  const [totalAmount, setTotal] = useState(0); //total amount
  const [engineers,setEngineers]=useState([])
  const [data, setData] = useState({
    company_id: "",
    engineer_id: "",
    priority: "",
    type: "",
    payment_mode: "",
    expected_delivery: "",
    payment_term: "",
    payment_partial_mode: "",
    partial_time: "",
    next_payment: "",
    ref_number: "",
    machine_problems: "",
    solutions: "",
    reason_of_trouble: "",
    remarks: "",
    partItems: list,
    total: totalAmount
  });




  const [block, setBlock] = useState(false);
  const [parts, setParts] = useState([]);

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];

  const types = [
    { value: "claim_report", label: "Claim Report" },
    { value: "purchase_request", label: "Purchase Request" },
  ];

  const payments = [
    { value: "cash", label: "Cash" },
    { value: "bank", label: "Bank" },
    { value: "check", label: "Check" },
    { value: "card", label: "Card" },
  ];

  const payment_terms = [
    { value: "full", label: "Full" },
    { value: "half", label: "Half" },
    { value: "partial", label: "Partial" },
  ];

  const payment_partial_mode = [
    { value: "days", label: "Days" },
    { value: "weeks", label: "Weeks" },
    { value: "months", label: "Months" },
    { value: "years", label: "Years" },
  ];




 
 
  const storeRequisition = async () => {

    let res = await RequisitionService.create(data);
  };


  const addPart = (item) => {
    item['quantity'] = 0;
    const newList = list.concat(item)
    setList(Array.from(new Set(newList))) /* add part in the List and remove duplicates from array */
    setSelectedPart(true)
    setFilter({ ...filter, q: "" })
    setSearchData("")
  };


  const removeItem = (id) => {
    const newList = list.filter((item => item.id !== id))
    setList(newList)
  }

  const getCompanies = async () => {
    let dt = await CompanyService.getAll({
      rows: "all",
    });

    dt = dt.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setCompanies(dt);
  };

  const getEngineers = async () =>{
    let dt = await RequisitionService.getEngineers();
    dt = dt.map((itm)=>({label:itm?.name,value:itm?.id}));
    setEngineers(dt);

  }

  const getMachineModels = async (companyId) => {
    setBlock(false);
    let dt = await CompanyService.getMachines(companyId);
    dt = dt.map((itm) => ({
      label: itm.machine_model?.name,
      value: itm.machine_model?.id,
    })); //Parse the data as per the select requires
    setMachineModels(dt);
    setData({
      ...data,
      ...{ machine_model_id: null },
    });
    setBlock(false);
  };



  const handleSelect = (option, conf) => {
    let value = option.value;
    if (Array.isArray(option))
      value = option.map((dt) => {
        return dt.value;
      });

    const name = conf.name;
    setBlock(false);

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleChange = (e)=>{
    const {name} = e.target
    setData({...data,[name]:e.target.value})
  }

  const handleDateSelect = (value, name) => {
    setData({
      ...data,
      ...{
        [name]: new Date(value),
        [name + "_format"]: moment(value).format("YYYY/MM/DD"),
      },
    });
    setBlock(false);
  };

  const getParts = async () => {
    let res = await PartService.getAll(filter);
    setSearchData(res.data);
    let items = res.data?.map((dt) => {
      return { label: dt.name, value: dt.id };
    });

    setParts(items);
  };

  const getPartHeadings = async () => {
    if (data?.machine_id.length === 0) setPartHeadings([]);

    if (data?.machine_id.length > 0) {
      let res = await MachinePartHeadingService.getAll(null, {machine_ids: data?.machine_id});

      let items = res?.map((dt) => {
        return { label: dt.name, value: dt.id };
      });
      setPartHeadings(items);
    }
  };

  const filterData = (e) => {
    let query = e.target.value;
    setFilter({
      ...filter,
      q: query,
      part_heading_id: data?.part_heading_id,
    });
  };

  const search = async (e) => {
    e.keyCode === 13 && (await getParts());
    if (filter?.q === "") {
      setSearchData([]);
    }
  };

  useEffect(() => {
    setData({...data, partItems: list,total:totalAmount})  //add partItems and total amount in data
  }, [list,totalAmount])

  useEffect(() => {
    if (data.company_id) getMachineModels(data?.company_id);
  }, [data.company_id]);

  useEffect(() => {
    if (data.machine_id) getPartHeadings(data?.machine_id);
  }, [data.machine_id]);


  useEffect(() => {
    getCompanies();
  }, []);


  useEffect(() => {
    getEngineers();
  }, []);

  useEffect(() => {
    const sum = list.reduce(
      (partialSum, a) => partialSum + a.selling_price * a.quantity,
      0
    );
    setTotal(sum);
  }, [list]);


  const increment = (item) => {
    const tempList = [...list]
    const tempItem = tempList.filter((val) => val.id === item.id)
    tempItem[0].quantity++;

    setList(tempList);
  }

  const decrement = (item) => {
    const tempList = [...list]
    const tempItem = tempList.filter((val) => val.id === item.id)
    tempItem[0].quantity--;

    setList(tempList);
  }




  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
              <div className="card mb-5">
                <div className="card-body p-12">
                  <form action="" id="kt_invoice_form">
                    <div className="d-flex flex-column align-items-start flex-xxl-row">
                      <div
                        className="d-flex align-items-center flex-equal fw-row me-4 order-2"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Specify invoice date"
                      >
                        <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                          Date:
                        </div>

                        <div className="position-relative d-flex align-items-center w-150px">
                          <input
                            className="form-control form-control-transparent fw-bolder pe-5"
                            placeholder="Select date"
                            name="invoice_date"
                          />

                          <span className="svg-icon svg-icon-2 position-absolute ms-4 end-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>

                      <div
                        className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Enter invoice number"
                      >
                        <span className="fs-2x fw-bolder text-gray-800">
                          Requisition
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-flush fw-bolder text-muted fs-3 w-125px"
                          placehoder="..."
                        />
                      </div>

                      <div
                        className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        title="Specify invoice due date"
                      >
                        <div className="fs-6 fw-bolder text-gray-700 text-nowrap">
                          Due Date:
                        </div>

                        <div className="position-relative d-flex align-items-center w-150px">
                          <input
                            className="form-control form-control-transparent fw-bolder pe-5"
                            placeholder="Select date"
                            name="invoice_due_date"
                          />

                          <span className="svg-icon svg-icon-2 position-absolute end-0 ms-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="separator separator-dashed my-10"></div>

                    <div className="row gx-10 mb-5">
                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="required form-label">Company</label>
                          <Select
                            options={companies}
                            onChange={handleSelect}
                            name="company_id"
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="company_id"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <div className="form-group">
                          <label className="required form-label">Machine</label>
                          <Select
                            isMulti
                            options={machineModels}
                            onChange={handleSelect}
                            name="machine_id"
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="machine_id"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label className="required form-label">Engineer</label>

                        <div className="mb-5">
                          <Select
                            options={engineers}
                            onChange={handleSelect}
                            name="engineer_id"
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="engineer_id"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label className="required form-label">Priority</label>
                        <div className="mb-5">
                          <Select
                            options={priorities}
                            name="priority"
                            onChange={handleSelect}
                          />
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label className="required form-label">
                          Expected Delivery
                        </label>
                        <div className="mb-5">
                          <div className="form-group ">
                            <DatePicker
                              className="form-control"
                              name="expected_delivery"
                              selected={data.expected_delivery}
                              onChange={(date) =>
                                handleDateSelect(date, "expected_delivery")
                              }
                            />
                            <input
                              type="hidden"
                              name="expected_delivery"
                              id="expected_delivery"
                              value={data.expected_delivery}
                            />
                            <div
                              className="fv-plugins-message-container invalid-feedback"
                              htmlFor="expected_delivery"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label htmlFor="type" className="form-label">
                          Types
                        </label>
                        <div className="mb-5">
                          <div className="form-group">
                            {" "}
                            <Select
                              options={types}
                              name="type"
                              onChange={handleSelect}
                            />
                          </div>
                        </div>
                      </div>

                      {data?.type !== "claim_report" && data?.type !== "" && (
                        <>
                          <div className="col-lg-6">
                            <div className="mb-5">
                              <label className="required form-label">
                                Payment mode
                              </label>
                              <Select
                                options={payments}
                                name="payment_mode"
                                onChange={handleSelect}
                              />
                              <div
                                className="fv-plugins-message-container invalid-feedback"
                                htmlFor="payment_mode"
                              ></div>
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-5">
                              <label className="required form-label">
                                Payment Term
                              </label>
                              <Select
                                options={payment_terms}
                                name="payment_term"
                                onChange={handleSelect}
                              />
                              <div
                                className="fv-plugins-message-container invalid-feedback"
                                htmlFor="payment_term"
                              ></div>
                            </div>
                          </div>
                          {data?.payment_term === "partial" && (
                            <>
                              <div className="col-lg-4">
                                <label htmlFor="payment_partial_mode">
                                  Payment Partial Mode
                                </label>
                                <div className="mb-5 mt-2">
                                  <Select
                                    options={payment_partial_mode}
                                    name="payment_partial_mode"
                                  />
                                   
                                </div>
                                <div
                                className="fv-plugins-message-container invalid-feedback"
                                htmlFor="payment_partial_mode"
                              ></div>
                              </div>

                              <div className="col-lg-4">
                                <label className="required form-label">
                                  Partial Time
                                </label>
                                <div className="mb-5">
                                  <input
                                    type="text"
                                    className="form-control form-control-solid "
                                    name="partial_time"
                                    placeholder="Partial Time"
                                    onChange={handleChange}
                                  />
                                  <div
                                className="fv-plugins-message-container invalid-feedback"
                                htmlFor="partial_time"
                              ></div>
                                </div>
                              </div>

                              <div className="col-lg-4">
                                <label htmlFor="types">Next Payment</label>
                                <div className="mb-5">
                                  <DatePicker
                                    className="form-control"
                                    name="next_payment"
                                    selected={data.next_payment}
                                    onChange={(date) =>
                                      handleDateSelect(date, "next_payment")
                                    }
                                  />
                                  <input
                                    type="hidden"
                                    name="next_payment"
                                    id="next_payment"
                                    value={data.next_payment}
                                  />
                                  <div
                                    className="fv-plugins-message-container invalid-feedback"
                                    htmlFor="next_payment"
                                  ></div>
                                </div>
                              </div>
                            </>
                          )}
                        </>
                      )}

                      <div className="col-lg-6">
                        <div className="mb-5">
                          <label className="required form-label">
                            Ref Number
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-solid mb-2"
                            name="ref_number"
                            placeholder="ref_number"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="mb-5">
                          <label htmlFor="types">Machine Problems</label>
                          <textarea
                            className="form-control form-control-solid mb-3"
                            rows="1"
                            name="machine_problems"
                            data-kt-element="input"
                            placeholder="Type a message"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-5">
                          <label htmlFor="types">Solutions</label>
                          <textarea
                            className="form-control form-control-solid mb-3"
                            rows="1"
                            name="solutions"
                            data-kt-element="input"
                            placeholder="Type a message"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="mb-5">
                          <label htmlFor="types">Reason of Trouble</label>
                          <textarea
                            className="form-control form-control-solid mb-3"
                            rows="1"
                            name="reason_of_trouble"
                            data-kt-element="input"
                            placeholder="Type a message"
                            onChange={handleChange}
                          ></textarea>
                        </div>
                      </div>

                      <div className="mb-0">
                        <label className="form-label fs-6 fw-bolder text-gray-700">
                          Remarks
                        </label>
                        <textarea
                          name="remarks"
                          className="form-control form-control-solid"
                          rows="3"
                          placeholder="Thanks for your business"
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
              <div className="card mb-5">
                <div className="card-body p-12">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group">
                        <label className="required form-label">
                          Part Heading
                        </label>
                        <Select
                          options={partHeadings}
                          onChange={handleSelect}
                          name="part_heading_id"
                        />
                        <div
                          className="fv-plugins-message-container invalid-feedback"
                          htmlFor="part_heading_id"
                        ></div>
                      </div>
                    </div>

                    <div className="col-lg-6 ">
                      <div className="form-group mt-2">
                        <label htmlFor=""></label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          name="search"
                          value={filter.q || ""}
                          onChange={filterData}
                          onKeyUp={search}
                        />
                        <div>
                          {searchData.length > 0 ? (
                            <div className="card border border-secondary ">
                              <div className="card-body ">
                                {searchData?.map((item, index) => (
                                  <div key={index}>
                                    <Link
                                      to={item?.id}
                                      style={{ color: "black" }}
                                      onClick={() => addPart(item)}
                                    >
                                      <p>
                                        {item?.name}
                                        <span>({item.part_number})</span>
                                      </p>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedPart && list.length > 0 ? (
            <div className="d-flex flex-column flex-lg-row">
              <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
                <div className="card mb-5">
                  <div className="card-body p-12">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="table-responsive mb-10">
                          <table
                            className="table g-5 gs-0 mb-0 fw-bolder text-gray-700"
                            data-kt-element="items"
                          >
                            <thead>
                              <tr className="border-bottom fs-7 fw-bolder text-gray-700 text-uppercase">
                                <th className="min-w-300px w-475px">Item</th>
                                <th className="min-w-300px w-475px">
                                  Part Number
                                </th>
                                <th className="min-w-100px w-250px">QTY</th>
                                <th className="min-w-150px w-150px">Price</th>
                                <th className="min-w-100px w-150px text-end">
                                  Total
                                </th>
                                <th className="min-w-75px w-75px text-end">
                                  Action
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {list?.map((item, index) => (
                                <tr key={index}>
                                  <td className="pe-7" name="part_name">
                                    {item?.name}
                                  </td>
                                  <td name="part_number">
                                    {item?.part_number}
                                  </td>

                                  <td className="product-quantity">
                                    <div className="input-group input-group-sm mb-3 ">
                                      <div className="input-group-prepend">
                                        <span
                                          className="input-group-text"
                                          id="inputGroup-sizing-sm"
                                          onClick={() => {
                                            if (item?.quantity > 0) {
                                              decrement(item);
                                            }
                                          }}
                                        >
                                          <i className="fas fa-minus"></i>
                                        </span>
                                      </div>
                                      <input
                                        type="text"
                                        className="form-control"
                                        aria-label="Small"
                                        aria-describedby="inputGroup-sizing-sm"
                                        min="1"
                                        value={item.quantity ?? ""}
                                        defaultValue={item.quantity}
                                        name="quantity"
                                        data-kt-element="quantity"
                                      />

                                      <div className="input-group-prepend">
                                        <span
                                          className="input-group-text"
                                          id="inputGroup-sizing-sm"
                                          onClick={() => increment(item)}
                                          style={{ cursor: "pointer" }}
                                        >
                                          <i className="fas fa-plus"></i>
                                        </span>
                                      </div>
                                    </div>
                                  </td>
                                  <td>{item?.selling_price} Tk.</td>
                                  <td className="pt-8 text-end text-nowrap">
                                    <span data-kt-element="total">
                                      {item.selling_price * item.quantity}
                                    </span>
                                    Tk.
                                  </td>
                                  <td className="pt-5 text-end">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-icon btn-active-color-primary"
                                      data-kt-element="remove-item"
                                      onClick={() => removeItem(item?.id)}
                                    >
                                      <span className="svg-icon svg-icon-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.5"
                                            d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                            fill="black"
                                          />
                                          <path
                                            opacity="0.5"
                                            d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>

                            <tfoot>
                              <tr className="border-top border-top-dashed align-top fs-6 fw-bolder text-gray-700"></tr>
                              <tr className="align-top fw-bolder text-gray-700">
                                <th></th>
                                <th colSpan="2" className="fs-4 ps-0">
                                  Total
                                </th>
                                <th
                                  colSpan="2"
                                  className="text-end fs-4 text-nowrap"
                                >
                                  <span data-kt-element="grand-total">
                                    {totalAmount} Tk
                                  </span>
                                </th>
                              </tr>
                              <div className="text-right">
                                <button
                                  onClick={() => {
                                    storeRequisition();
                                  }}
                                  className="btn btn-success btn-lg pull-right"
                                >
                                  Submit
                                </button>
                              </div>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Requisitions;
