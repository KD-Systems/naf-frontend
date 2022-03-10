import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import CompanyService from "services/CompanyService";
import moment from "moment";
import PartService from "services/PartService";
import MachinePartHeadingService from "services/MachinePartHeadingService";
const Requisitions = () => {
  const [companies, setCompanies] = useState([]);
  const [machineModels, setMachineModels] = useState([]);
  const [filter, setFilter] = useState({});
  const [partHeadings,setPartHeadings]=useState([])
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

  const getCompanies = async () => {
    let dt = await CompanyService.getAll({
      rows: "all",
    });

    dt = dt.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setCompanies(dt);
  };

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
      // eslint-disable-next-line no-undef
      ...data,
      [name]: value,
    });
  };

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
    let items = res.data?.map((dt) => {
      return { label: dt.name, value: dt.id };
    });

    setParts(items);
  };

 

  const getPartHeadings = async()=>{
    let res = await MachinePartHeadingService.getAll(data?.machine_id);
    console.log(res);
    let items = res?.map((dt) => {
      return { label: dt.name, value: dt.id };
    });
    setPartHeadings(items)
  }

  const filterData = (e) => {
    let dt = e.target.value;
    setFilter({
      q: dt,
    });
  };

  useEffect(() => {
    if (filter.length) getParts();
  }, [filter]);

  useEffect(() => {
    if (data?.company_id) getMachineModels(data?.company_id);
  }, [data?.company_id]);

  useEffect(()=>{
    if (data?.machine_id) getPartHeadings(data?.machine_id);
  },[data?.machine_id])

  useEffect(() => {
    getCompanies();
  }, []);
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
                          Invoice #
                        </span>
                        <input
                          type="text"
                          className="form-control form-control-flush fw-bolder text-muted fs-3 w-125px"
                          value="2021001"
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
                            options={machineModels}
                            onChange={handleSelect}
                            name="machine_id"
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="company_id"
                          ></div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label className="required form-label">Engineer</label>

                        <div className="mb-5">
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
                        <label className="required form-label">Priority</label>
                        <div className="mb-5">
                          <Select options={priorities} name="priority" />
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
                              htmlFor="start_date"
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4">
                        <label htmlFor="types" className="form-label">
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

                      {data?.type != "claim_report" && data?.type != "" && (
                        <>
                          <div className="col-lg-6">
                            <div className="mb-5">
                              <label className="required form-label">
                                Payment mode
                              </label>
                              <Select options={payments} name="payments" />
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
                            </div>
                          </div>
                          {data?.payment_term == "partial" && (
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
                                  />
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
                                    htmlFor="start_date"
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
                          name="part_headings"
                        />
                        <div
                          className="fv-plugins-message-container invalid-feedback"
                          htmlFor="part_headings"
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
                          value=""
                          onChange={() => filterData}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Requisitions;
