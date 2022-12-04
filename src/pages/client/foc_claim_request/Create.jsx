import moment from "moment";
import { Fragment, useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-toastify/dist/ReactToastify.css";
import CompanyService from "services/CompanyService";
import RequisitionService from "services/RequisitionService";
import ClaimRequisitionService from "services/ClaimRequisitionService";
import ClientClaimRequisitionService from "services/clientServices/ClientClaimRequisitionService";

const CreateClientClaimRequisition = () => {
  const navigate = useNavigate();
  const [inputField, setInputField] = useState([{}]);
  const handleReqSelect = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputField];

    list[index][name] = value;
    setInputField(list);
  };
  const handlePartAdd = () => {
    setInputField([...inputField, {}]);
  };
  const handlePartRemove = (index) => {
    const list = [...inputField];
    list.splice(index, 1);
    setInputField(list);
  };

  const [machineModels, setMachineModels] = useState([]);
  const [filter, setFilter] = useState({
    part_heading_id: null,
  });
  const [list, setList] = useState([]); // for adding part in requisition

  const [engineers, setEngineers] = useState([]);

  const [data, setData] = useState({
    company_id: "",
    engineer_id: "",
    machine_id: "", //company_machine_id
    priority: "",
    type: "claim_report",
    payment_mode: "",
    account_details: "",
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
    part_items: list,
    total: '',
    files: [],
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const testData = queryParams.get("data");
    setData(JSON.parse(testData));
  }, []);
  const [block, setBlock] = useState(false);

  const priorities = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
  ];



  const storeClientClaimRequest = async () => {
    setBlock(true);
    await ClientClaimRequisitionService.createClientClaimRequest({
      ...data,
      part_items: inputField,
    });

    setBlock(false);

    navigate("/panel/client-claim-requests");
  };

  // const addPart = (item) => {
  //   item["quantity"] = 0;
  //   let hasItem = list.find((itm) => itm.id == item.id);
  //   if (hasItem) return false;

  //   const newList = list.concat(item);
  //   setList(
  //     Array.from(new Set(newList))
  //   ); /* add part in the List and remove duplicates from array */
  //   setSelectedPart(true);
  //   setFilter({ ...filter, q: "" });
  //   setSearchData("");
  // };

  // const removeItem = (id) => {
  //   const newList = list.filter((item) => item.id !== id);
  //   setList(newList);
  // };

  const getEngineers = async () => {
    let dt = await RequisitionService.engineers();
    dt = dt.map((itm) => ({ label: itm?.name, value: itm?.id }));
    setEngineers(dt);
  };

  const getMachineModels = async (companyId) => {
    setBlock(false);
    let dt = await CompanyService.getMachinesforRequisitions(companyId);
    // if (data?.type == "purchase_request") {
      // dt = dt[0].machine_model.map((itm) => ({
      //   label: itm.name,
      //   value: itm.company_machine_id,
      //   machineId: itm.machine_id,
      // })); //Parse the data as per the select requires

      // setMachineModels(dt);

      // setData({
      //   ...data,
      //   ...{ machine_model_id: null },
      // });
    // } else {
      let carry = [];

      dt[0].contracts.forEach((element) => {
        element?.is_foc &&
          !element?.is_expired &&
          element?.is_status &&
          element?.machine_model?.forEach((itm) =>
            carry.push({
              label: itm.name,
              value: itm.Company_machine_id,
              machineId: itm.machine_id,
            })
          );
      });
      setMachineModels(carry);
      setData({
        ...data,
        ...{ machine_model_id: null },
      });
    // }

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

  const handleChange = (e) => {
    const { name } = e.target;
    setData({ ...data, [name]: e.target.value });
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

  useEffect(() => {
    setData({ ...data, part_items: list }); 
  }, [list]);

  useEffect(() => {
    if (data.company_id ) getMachineModels(data?.company_id);
  }, [data.company_id]);

  const getCompanies = async () => {
    let dt = await CompanyService.getClientCompany();
    setData({ ...data, company_id: dt?.data?.id });
  };

  useEffect(() => {
    getEngineers();
    getCompanies();
  }, []);

  return (
    <>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <div className="tab-content">
          <div className="post d-flex flex-column-fluid">
            <div className="container-xxl">
              <div className="d-flex flex-column flex-lg-row">
                <div className="flex-lg-row-fluid mb-10 mb-lg-0 me-lg-7 me-xl-10">
                  <div className="card mb-5">
                    <div className="card-body p-12">
                      <form action="" id="kt_invoice_form">
                        <div className="d-flex flex-column align-items-start flex-xxl-row">
                          <div className="d-flex align-items-center flex-equal fw-row me-4 order-2">
                            <input
                              type="text"
                              className="form-control w-50"
                              name="ref_number"
                              placeholder="Ref Number"
                              onChange={handleChange}
                            />
                            <div
                              className="fv-plugins-message-container invalid-feedback"
                              htmlFor="ref_number"
                            ></div>
                          </div>

                          <div className="d-flex flex-center flex-equal fw-row text-nowrap order-1 order-xxl-2 me-4">
                            <span className="fs-2x fw-bolder text-gray-800">
                              Claim Request
                            </span>
                          </div>

                          <div className="d-flex align-items-center justify-content-end flex-equal order-3 fw-row">
                            <span className="fs-5">
                              Date: {moment().format("DD-MM-YYYY")}
                            </span>
                          </div>
                        </div>

                        <div className="separator separator-dashed my-10"></div>

                        <div className="row gx-10 mb-5">
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="required form-label">
                                Machine
                              </label>
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
                            <label className="form-label">Engineer</label>

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
                            <label className="required form-label">
                              Priority
                            </label>
                            <div className="mb-5">
                              <Select
                                options={priorities}
                                name="priority"
                                onChange={handleSelect}
                              />
                              <div
                                className="fv-plugins-message-container invalid-feedback"
                                htmlFor="priority"
                              ></div>
                            </div>
                          </div>

                          {/* <div className="col-lg-4">
                            <label className="form-label">
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
                          </div> */}
                          <div className="col-lg-4"></div>
                          <div className="col-lg-4"></div>                          

                          <div className="col-lg-6">
                            <label
                              className="form-label fs-6 fw-bolder text-gray-700"
                              htmlFor="types"
                            >
                              Machine Problems
                            </label>
                            <textarea
                              className="form-control form-control-solid mb-3"
                              rows="5"
                              name="machine_problems"
                              data-kt-element="input"
                              placeholder="Type a message"
                              onChange={handleChange}
                            ></textarea>
                          </div>

                          <div className="col-lg-6">
                            <label
                              className="form-label fs-6 fw-bolder text-gray-700"
                              htmlFor="types"
                            >
                              Solutions
                            </label>
                            <textarea
                              className="form-control form-control-solid mb-3"
                              rows="5"
                              name="solutions"
                              data-kt-element="input"
                              placeholder="Type a message"
                              onChange={handleChange}
                            ></textarea>
                          </div>

                          <div className="col-lg-6">
                            <label
                              className="form-label fs-6 fw-bolder text-gray-700"
                              htmlFor="types"
                            >
                              Reason of Trouble
                            </label>
                            <textarea
                              className="form-control form-control-solid mb-3"
                              rows="5"
                              name="reason_of_trouble"
                              data-kt-element="input"
                              placeholder="Type a message"
                              onChange={handleChange}
                            ></textarea>
                          </div>

                          <div className="col-lg-6">
                            <label className="form-label fs-6 fw-bolder text-gray-700">
                              Remarks
                            </label>
                            <textarea
                              name="remarks"
                              className="form-control form-control-solid"
                              rows="5"
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

              <span>
                {inputField?.map((item, index) => (
                  <Fragment key={index}>
                    <div className="form-group mt-5">
                      <div className="row">
                        <div className="col-sm-3 col-md-3">
                          <label className="required form-label">
                            Part Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Part Name"
                            name="part_name"
                            id="part_name"
                            onChange={(e) => handleReqSelect(e, index)}
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="part_number[]"
                          ></div>
                        </div>
                        <div className="col-sm-2 col-md-2">
                          <label className="form-label">Part Number</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Part Number"
                            name="part_number"
                            id="part_number"
                            onChange={(e) => handleReqSelect(e, index)}
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="part_number[]"
                          ></div>
                        </div>
                        <div className="col-sm-1 col-md-1">
                          <label className="required form-label">
                            Quantity
                          </label>
                          <input
                            className="form-control"
                            name="qty"
                            id="qty"
                            onChange={(e) => handleReqSelect(e, index)}
                            type="number"
                          />
                          <div
                            className="fv-plugins-message-container invalid-feedback"
                            htmlFor="part_number[]"
                          ></div>
                        </div>
                        <div className="col-sm-1 mt-8">
                          <button
                            type="button"
                            className="btn btn-danger float-right"
                            onClick={() => handlePartRemove(index)}
                          >
                            <i className="fa fa-minus"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    {inputField.length - 1 === index && (
                      <button
                        type="button"
                        className="btn btn-primary mt-5"
                        onClick={handlePartAdd}
                      >
                        <i className="fa fa-plus"></i> Add More
                      </button>
                    )}
                  </Fragment>
                ))}
                <div className="mt-5">
                  <button
                    onClick={() => {
                      storeClientClaimRequest();
                    }}
                    className="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateClientClaimRequisition;
