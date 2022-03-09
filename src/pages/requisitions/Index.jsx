import React, { useState, useEffect } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import CompanyService from "services/CompanyService";
import moment from "moment";
const Requisitions = () => {
  const [companies, setCompanies] = useState([]);
  const [data, setData] = useState({
    company_id: "",
    engineer_id:"",
    priority:"",
    type:"",
    payment_mode:"",
    expected_delivery: '',
    payment_term:"",
    payment_partial_mode:"",
    partial_time:"",
    next_payment:""
  });
  const [block, setBlock] = useState(false);


  const priorities = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ]

  const types = [
    {value:'claim_report',label:'Claim Report'},
    {value:'purchase_request',label:'Purchase Request'},
  ]

  const payments = [
    { value: 'cash', label: 'Cash' },
    { value: 'bank', label: 'Bank' },
    { value: 'check', label: 'Check' },
    { value: 'card', label: 'Card' }
  ]

  const payment_terms = [
    { value: 'full', label: 'Full' },
    { value: 'half', label: 'Half' },
    { value: 'partial', label: 'Partial' },
  ]

  const payment_partial_mode = [
    { value: 'days', label: 'Days' },
    { value: 'weeks', label: 'Weeks' },
    { value: 'months', label: 'Months' },
    { value: 'years', label: 'Years' },
  ]

  const getCompanies = async () => {
    let dt = await CompanyService.getAll({
      rows: "all",
    });

    dt = dt.map((itm) => ({ label: itm.name, value: itm.id })); //Parse the data as per the select requires
    setCompanies(dt);
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
      ...data, ...{ [name]: new Date(value), [name + '_format']: moment(value).format("YYYY/MM/DD") }
    })
    setBlock(false)
  }

  useEffect(() => {
    getCompanies();
  }, []);
  return (
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

                  <div className="mb-0">
                    <div className="row gx-10 mb-5">
                      <div className="col-lg-6">
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

                        <div className="mb-5">
                          <label className="required form-label">
                            Priority
                          </label>
                          <Select options={priorities} name="priority" />
                        </div>

                        <div className="mb-5">
                          <label className="required form-label">
                            Payment Method
                          </label>
                          <Select options={payments} name="payments" />
                        </div>

                        <div className="mb-5">
                          <label className="required form-label">
                            Payment Term
                          </label>
                          <Select options={payment_terms} name="payments" />
                        </div>

                        <div className="mb-5">
                          <label className="required form-label">
                            Partial Time
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-solid mb-2"
                            name="partial_time"
                            placeholder="Partial Time"
                          />
                        </div>

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

                        <div className="mb-5">
                          <label htmlFor="types">Solutions</label>
                          <textarea
                            class="form-control  mb-3"
                            rows="1"
                            data-kt-element="input"
                            placeholder="Type a message"
                          ></textarea>
                        </div>

                        <div className="mb-5">
                          <label htmlFor="types">Remarks</label>
                          <textarea
                            class="form-control  mb-3"
                            rows="1"
                            data-kt-element="input"
                            placeholder="Type a message"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-lg-6">
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

                        <div className="mb-5">
                          <label htmlFor="types">Types</label>
                          <Select options={types} name="types" />
                        </div>

                        <div className="mb-5">
                          <div className="form-group mt-5">
                            <label className="required form-label">
                              Expected Delivery
                            </label>
                            <DatePicker
                              className="form-control"
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

                        <div className="mb-5">
                          <label htmlFor="types">Payment Partial Mode</label>
                          <Select options={payment_partial_mode} name="types" />
                        </div>

                        <div className="mb-5">
                          <label htmlFor="types">Next Payment</label>
                          <DatePicker
                            className="form-control"
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

                        <div className="mb-5">
                          <label htmlFor="types">Machine Problems</label>
                          <textarea
                            class="form-control  mb-3"
                            rows="1"
                            name="machine_problems"
                            data-kt-element="input"
                            placeholder="Type a message"
                          ></textarea>
                        </div>

                        <div className="mb-5">
                          <label htmlFor="types">Reason of Trouble</label>
                          <textarea
                            class="form-control  mb-3"
                            rows="1"
                            name="reason_of_trouble"
                            data-kt-element="input"
                            placeholder="Type a message"
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="table-responsive mb-10">
                      <table
                        className="table g-5 gs-0 mb-0 fw-bolder text-gray-700"
                        data-kt-element="items"
                      >
                        <thead>
                          <tr className="border-bottom fs-7 fw-bolder text-gray-700 text-uppercase">
                            <th className="min-w-300px w-475px">Item</th>
                            <th className="min-w-100px w-100px">QTY</th>
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
                          <tr
                            className="border-bottom border-bottom-dashed"
                            data-kt-element="item"
                          >
                            <td className="pe-7">
                              <input
                                type="text"
                                className="form-control form-control-solid mb-2"
                                name="name[]"
                                placeholder="Item name"
                              />
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                name="description[]"
                                placeholder="Description"
                              />
                            </td>
                            <td className="ps-0">
                              <input
                                className="form-control form-control-solid"
                                type="number"
                                min="1"
                                name="quantity[]"
                                placeholder="1"
                                value="1"
                                data-kt-element="quantity"
                              />
                            </td>
                            <td>
                              <input
                                type="text"
                                className="form-control form-control-solid text-end"
                                name="price[]"
                                placeholder="0.00"
                                value="0.00"
                                data-kt-element="price"
                              />
                            </td>
                            <td className="pt-8 text-end text-nowrap">
                              $<span data-kt-element="total">0.00</span>
                            </td>
                            <td className="pt-5 text-end">
                              <button
                                type="button"
                                className="btn btn-sm btn-icon btn-active-color-primary"
                                data-kt-element="remove-item"
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
                        </tbody>

                        <tfoot>
                          <tr className="border-top border-top-dashed align-top fs-6 fw-bolder text-gray-700">
                            <th className="text-primary">
                              <button
                                className="btn btn-link py-1"
                                data-kt-element="add-item"
                              >
                                Add item
                              </button>
                            </th>
                            <th
                              colspan="2"
                              className="border-bottom border-bottom-dashed ps-0"
                            >
                              <div className="d-flex flex-column align-items-start">
                                <div className="fs-5">Subtotal</div>
                                <button
                                  className="btn btn-link py-1"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  title="Coming soon"
                                >
                                  Add tax
                                </button>
                                <button
                                  className="btn btn-link py-1"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  title="Coming soon"
                                >
                                  Add discount
                                </button>
                              </div>
                            </th>
                            <th
                              colspan="2"
                              className="border-bottom border-bottom-dashed text-end"
                            >
                              $<span data-kt-element="sub-total">0.00</span>
                            </th>
                          </tr>
                          <tr className="align-top fw-bolder text-gray-700">
                            <th></th>
                            <th colspan="2" className="fs-4 ps-0">
                              Total
                            </th>
                            <th
                              colspan="2"
                              className="text-end fs-4 text-nowrap"
                            >
                              $<span data-kt-element="grand-total">0.00</span>
                            </th>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <table
                      className="table d-none"
                      data-kt-element="item-template"
                    >
                      <tr
                        className="border-bottom border-bottom-dashed"
                        data-kt-element="item"
                      >
                        <td className="pe-7">
                          <input
                            type="text"
                            className="form-control form-control-solid mb-2"
                            name="name[]"
                            placeholder="Item name"
                          />
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            name="description[]"
                            placeholder="Description"
                          />
                        </td>
                        <td className="ps-0">
                          <input
                            className="form-control form-control-solid"
                            type="number"
                            min="1"
                            name="quantity[]"
                            placeholder="1"
                            data-kt-element="quantity"
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control form-control-solid text-end"
                            name="price[]"
                            placeholder="0.00"
                            data-kt-element="price"
                          />
                        </td>
                        <td className="pt-8 text-end">
                          $<span data-kt-element="total">0.00</span>
                        </td>
                        <td className="pt-5 text-end">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-active-color-primary"
                            data-kt-element="remove-item"
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
                    </table>
                    <table
                      className="table d-none"
                      data-kt-element="empty-template"
                    >
                      <tr data-kt-element="empty">
                        <th
                          colspan="5"
                          className="text-muted text-center py-10"
                        >
                          No items
                        </th>
                      </tr>
                    </table>

                    <div className="mb-0">
                      <label className="form-label fs-6 fw-bolder text-gray-700">
                        Notes
                      </label>
                      <textarea
                        name="notes"
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
      </div>
    </div>
  );
};

export default Requisitions;
