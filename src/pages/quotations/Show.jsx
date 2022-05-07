import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import QuotationService from "services/QuotationService";
import InvoiceService from "services/InvoiceService";
const ShowQuotation = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [quotation, setQuotation] = useState({});
  const [block, setBlock] = useState(false);
  const [locked, setLocked] = useState(false);
  const [list, setList] = useState([]);

  const [data, setData] = useState({
    quotation_id: parseInt(id),
    part_items: list,
  });

  const getQuotation = async () => {
    let res = await QuotationService.get(id);
    setQuotation(res);
  };

  //* Generating Invoice
  const storeInvoice = async () => {
    setBlock(true);
    let res = await InvoiceService.create(quotation);
    setBlock(false);
    navigate(`/panel/invoices/${res.data?.id}`);
  }; 

  const lockedPartItems = async () => {
    setBlock(true);
    await QuotationService.locked(data);
    setBlock(false);
    setLocked(true);
  };

  useEffect(() => {
    if (id) getQuotation();
  }, [id,locked]);

  useEffect(() => {
    setData({ ...data, part_items: list }); //add part_items and total amount in data
  }, [list]);

  const handleChange = (e, item) => {
    const { name } = e.target;
    const templist = [...list];
    const tempItem = templist?.filter((val) => val?.id === item?.id);
    tempItem[0][name] = parseInt(e.target.value);
    if (quotation?.requisition?.type != "claim_report") {
      tempItem[0].total_value = tempItem[0][name] * tempItem[0].quantity;
    }
    else{
      tempItem[0].total_value = 0;
    }
    setList(templist);
  };
  // * Update Quotation Part Items

  const handleUpdate =async()=>{
    setBlock(true);
    await QuotationService.update(id,data);
    setBlock(false);
    navigate("/panel/quotations");
  }


  const increment = (item) => {
    const tempList = [...list];
    const tempItem = tempList?.filter((val) => val?.id === item?.id);
    ++tempItem[0].quantity;
    if (quotation?.requisition?.type != "claim_report") {
      tempItem[0].total_value =
        tempItem[0].quantity * parseInt(tempItem[0].unit_value);
    }
    else{
      tempItem[0].total_value = 0;
    }
    setList(tempList);
  };

  const decrement = (item) => {
    const tempList = [...list];
    const tempItem = tempList.filter((val) => val.id === item.id);
    --tempItem[0].quantity;
    if (quotation?.requisition?.type != "claim_report") {
      tempItem[0].total_value =
        tempItem[0].quantity * parseInt(tempItem[0].unit_value);
    }
    else{
      tempItem[0].total_value = 0;
    }
    setList(tempList);
  };


  useEffect(() => {
    setList(quotation?.part_items); //add part items into List
    if (quotation?.locked_at != null) {
      setLocked(true); //check locked at is null or not
    }
  }, [quotation]);

  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <h3 className="card-label">
                    <button
                      className="btn btn-sm btn-dark "
                      style={{ marginRight: "0.75rem" }}
                      onClick={() => navigate(-1)}
                    >
                      <i className="fa fa-arrow-left"></i>Back
                    </button>
                    Details
                  </h3>
                </div>
              </div>

              <div className="card-body py-4">
                <div className="fw-bolder mt-5">PQ Number</div>
                <div className="text-gray-600">{quotation?.pq_number}</div>

                <div className="fw-bolder mt-5">Company</div>
                <div className="text-gray-600">{quotation?.company?.name}</div>

                <div className="fw-bolder mt-5">Machines</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.machines?.map((item, index) => (
                    <span key={index} className="badge badge-light-info ">
                      {item?.model?.name}
                      {"\n"}
                    </span>
                  ))}
                </div>

                <div className="fw-bolder mt-5">Expected Delivery</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {quotation?.requisition?.expected_delivery}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Priority</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.priority?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Type</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.type
                    ?.replaceAll("_", " ")
                    ?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Updated At</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {quotation?.requisition?.updated_at ?? "--"}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Ref Number</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.ref_number ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Reason Of Trouble</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.reason_of_trouble ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Solutions</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.solutions ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Remarks</div>
                <div className="text-gray-600">
                  {quotation?.requisition?.remarks ?? "--"}
                </div>
              </div>
              <div className="card-header">
                <div className="card-title">
                  <h3 className="card-label">
                    <button
                      className="btn btn-sm btn-dark "
                      style={{ marginRight: "0.1rem" }}
                      onClick={() => {
                        storeInvoice();
                      }}
                    >
                      Generate Invoice
                    </button>
                  </h3>
                  {!locked ?  <h3>
                    <button
                      className="btn btn-sm btn-dark float-end fs-6 "
                      onClick={lockedPartItems}
                    >
                      Lock
                    </button>
                  </h3>: <h3>
                    <button
                      className="btn btn-sm btn-danger float-end fs-6 "
                      onClick={lockedPartItems}
                    >
                      Locked
                    </button>
                  </h3>}
                 
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="card card-custom gutter-b">
              <div className="card-header card-header-tabs-line">
                <div className="card-toolbar">
                  <div className="card-title">
                    <h3 className="card-label">Part Items</h3>
                  </div>
                </div>
              </div>

              <div className="card-body px-0">
                <div className="card mb-5 mb-xl-8">
                  <div className="card-body py-3">
                    <div className="table-responsive">
                      <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            <th className="min-w-50px">Part Name</th>
                            <th className="min-w-120px">Part Number</th>
                            <th className="min-w-120px">Quantity</th>
                            <th className="min-w-120px">Unit </th>
                            <th className="min-w-120px">Total </th>
                          </tr>
                        </thead>

                        <tbody>
                          {quotation?.part_items?.map((item, index) => (
                            <tr key={index}>
                              <td className="">
                                <Link
                                  to={"/panel/parts/" + item?.part?.id}
                                  className="text-dark fw-bolder text-hover-primary"
                                >
                                  {item?.part?.aliases[0].name}
                                </Link>
                              </td>
                              <td className=" fw-bolder mb-1 fs-6">
                                <span>
                                  {item?.part?.aliases[0].part_number}
                                </span>
                              </td>
                              {/* <td className=" fw-bolder mb-1 fs-6">
                                <span>{item?.quantity}</span>
                              </td> */}

                              <td>
                                <div className="input-group input-group-sm">
                                  <div className="input-group-prepend">
                                    <button
                                    disabled={locked ? true : false}
                                      className="input-group-text"
                                      id="inputGroup-sizing-sm"
                                      onClick={() => {
                                        if (item?.quantity > 0) {
                                          decrement(item);
                                        }
                                      }}
                                    >
                                      <i className="fas fa-minus"></i>
                                    </button>
                                  </div>
                                  <input
                                    disabled={locked ? true : false}
                                    type="text"
                                    className="form-control"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    min="1"
                                    value={item?.quantity ?? ""}
                                    name="quantity"
                                  />

                                  <div className="input-group-prepend">
                                    <button
                                      className="input-group-text"
                                      onClick={() => increment(item)}
                                      style={{ cursor: "pointer" }}
                                      disabled={locked ? true : false}
                                    >
                                      <i className="fas fa-plus"></i>
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td className=" fw-bolder mb-1 fs-6">
                                <input
                                  disabled={locked ? true : false}
                                  type="number"
                                  className="form-control"
                                  aria-label="Small"
                                  aria-describedby="inputGroup-sizing-sm"
                                  name="unit_value"
                                  placeholder="0TK"
                                  value={item?.unit_value ?? ""}
                                  onChange={(e) => handleChange(e, item)}
                                />
                              </td>

                              <td className=" fw-bolder mb-1 fs-6">
                                <span>
                                  {quotation?.requisition?.type !=
                                  "claim_report"
                                    ? item?.quantity * item?.unit_value
                                    : 0}{" "}
                                  Tk.
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {!locked ?  <button
                        className="btn btn-sm btn-dark float-end fs-6 mt-5"
                        onClick={handleUpdate}
                      >
                        Update
                      </button>:""}
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowQuotation;
