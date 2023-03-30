import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import Confirmation from "components/utils/Confirmation";
import QuotationService from "services/QuotationService";
import InvoiceService from "services/InvoiceService";
import { Activities } from "components/utils/Activities";
import PermissionAbility from "helpers/PermissionAbility";
import Scrollbars from "react-custom-scrollbars";
import NewDropzone from "./Dropzone/MyDropzone";

const ShowQuotation = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [quotation, setQuotation] = useState({});
  const [comment, setComment] = useState({});
  const [block, setBlock] = useState(false);
  const [locked, setLocked] = useState(false);
  const [list, setList] = useState([]);
  const [tab, setTab] = useState("quotations");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);

  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [file, setFile] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [data, setData] = useState({
    quotation_id: parseInt(id),
    type: "",
    vat: "",
    discount: "",
    sub_total: total,
    grand_total: grandTotal,
    part_items: list,
  });
  useEffect(() => {
    if (quotation) {
      setData({
        ...data,
        type: quotation?.requisition?.type,
        sub_total: quotation?.sub_total,
        vat: quotation?.vat,
        discount: quotation?.discount,
        grand_total: quotation?.grand_total,
      });
    }
  }, [quotation]);
  const sendComment = async () => {
    if (message) {
      await QuotationService.sendComment({ quotation_id: id, text: message });
      getQuotationComment();
      setMessage("");
    } else {
    }
  };

  const getQuotation = async () => {
    let res = await QuotationService.get(id);
    setQuotation(res);
  };

  const getQuotationComment = async () => {
    let res = await QuotationService.getComment(id);
    setComment(res);
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

  const approveQuotation = async () => {
    setBlock(true);
    await QuotationService.approve(id);
    getQuotation();
    setBlock(false);
  };

  const rejectQuotation = async () => {
    setBlock(true);
    await QuotationService.reject(id);
    getQuotation();
    setBlock(false);
  };

  const uploadFile = async (formData) => {
    await QuotationService.fileUpload(id, formData);
    getFile();
  };

  const deleteItem = async () => {
    await QuotationService.deleteFile(uuid, model_id);
    getFile();
  };

  const getFile = async () => {
    const res = await QuotationService.getFile(id);
    setFile(res);
  };

  useEffect(() => {
    if (id) {
      getQuotation();
      getQuotationComment();
      getFile();
    }
  }, [id, locked]);

  useEffect(() => {
    setData({
      ...data,
      part_items: list,
      grand_total: grandTotal,
      sub_total: total,
    }); //add part_items and total amount in data
  }, [list, grandTotal, total]);

  const handleChange = (e, item) => {
    const { name } = e.target;
    const templist = [...list];
    const tempItem = templist?.filter((val) => val?.id === item?.id);
    tempItem[0][name] = parseInt(e.target.value);
    if (quotation?.requisition?.type != "claim_report") {
      tempItem[0].total_value = tempItem[0][name] * tempItem[0].quantity;
    } else {
      tempItem[0].total_value = 0;
    }
    setList(templist);
  };
  // * Update Quotation Part Items
  const handleDataChange = (e) => {
    let value;
    if (e.target.name == "vat" || e.target.name == "discount") {
      value = Math.min(100, Number(e.target.value));
    } else {
      value = e.target.value;
    }
    setData({ ...data, [e.target.name]: value });
  };
  const handleUpdate = async () => {
    setBlock(true);
    await QuotationService.update(id, data);
    getQuotation();
    setBlock(false);
    navigate(`/panel/quotations/${id}`);
  };

  const increment = (item) => {
    const tempList = [...list];
    const tempItem = tempList?.filter((val) => val?.id === item?.id);
    ++tempItem[0].quantity;
    if (quotation?.requisition?.type != "claim_report") {
      tempItem[0].total_value =
        tempItem[0].quantity * parseInt(tempItem[0].unit_value);
    } else {
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
    } else {
      tempItem[0].total_value = 0;
    }
    setList(tempList);
  };

  useEffect(() => {
    let totalAmount = 0;
    data?.part_items?.forEach((item) => {
      totalAmount =
        parseInt(totalAmount) +
        parseInt(item?.quantity) * parseInt(item?.unit_value);
    });
    setTotal(totalAmount);
    let GrandTotal = parseInt(
      totalAmount * (1 + (data?.vat - data?.discount) / 100)
    );
    setGrandTotal(GrandTotal);
  }, [data?.part_items, data?.vat, data?.discount]);

  useEffect(() => {
    setList(quotation?.part_items); //add part items into List
    if (quotation?.locked_at != null) {
      setLocked(true); //check locked at is null or not
    }
  }, [quotation]);

  const permissions = JSON.parse(localStorage.getItem("user")).user.permissions;

  return (
    <>
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
                  <div className="text-gray-600">
                    {quotation?.company?.name}
                  </div>

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

                  <div className="fw-bolder mt-5">Payment Mode</div>
                  <div className="text-gray-600">
                    {quotation?.requisition?.payment_mode?.replaceAll("_", " ")?.capitalize() ?? "--"}
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

                  <div className="fw-bolder mt-5">Sub Total </div>
                  <div className="text-gray-600">
                    {quotation?.sub_total ?? "0"}tk
                  </div>

                  <div className="fw-bolder mt-5">Vat </div>
                  <div className="text-gray-600">{quotation?.vat ?? "0"}%</div>

                  <div className="fw-bolder mt-5">Discount </div>
                  <div className="text-gray-600">{quotation?.discount ?? "0"}%</div>

                  <div className="fw-bolder mt-5">Grand Total</div>
                  <div className="text-gray-600">
                    {quotation?.grand_total ?? "0"}tk
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

                  <div className="fw-bolder mt-5">Created At </div>
                  <div className="text-gray-600">
                    <Moment format="D MMMM YYYY">
                      {quotation?.created_at}
                    </Moment>
                  </div>

                  <div className="fw-bolder mt-5">Created By </div>
                  <div className="text-gray-600">{quotation?.created_by?.replaceAll("_", " ")?.capitalize()}</div>

                  {!permissions.includes("quotations_approve") &&
                    quotation?.status == "pending" && (
                      <div className="fw-bolder mt-5 badge-lg badge badge-warning">
                        Waitting for Approval
                      </div>
                    )}
                </div>
                <div className="card-header">
                  <div className="card-title">
                    <h3 className="card-label">
                      <Link
                        className="btn btn-sm btn-dark "
                        to={"/panel/quotations/" + quotation.id + "/print"}
                        style={{ marginRight: "0.75rem" }}
                        target="_blank"
                      >
                        Print
                      </Link>
                    </h3>
                    {quotation?.status != "pending" && (
                      <h3 className="card-label">
                        <PermissionAbility permission="quotations_generate_invoice">
                          <button
                            className="btn btn-sm btn-dark "
                            style={{ marginRight: "0.1rem" }}
                            onClick={() => {
                              storeInvoice();
                            }}
                          >
                            Generate Invoice
                          </button>
                        </PermissionAbility>
                      </h3>
                    )}

                    {quotation?.status != "pending" && (
                      <PermissionAbility permission="quotations_lock">
                        {!locked ? (
                          <h3>
                            <button
                              className="btn btn-sm btn-dark float-end fs-6 "
                              onClick={lockedPartItems}
                            >
                              Lock
                            </button>
                          </h3>
                        ) : (
                          <h3>
                            <button
                              className="btn btn-sm btn-danger float-end fs-6 "
                              onClick={lockedPartItems}
                            >
                              Locked
                            </button>
                          </h3>
                        )}
                      </PermissionAbility>
                    )}
                    <PermissionAbility permission="quotations_approve">
                      {quotation?.status == "pending" && (
                        <h3 className="card-label">
                          <button
                            className="btn btn-sm btn-success "
                            style={{ marginRight: "0.1rem" }}
                            onClick={() => {
                              approveQuotation();
                            }}
                          >
                            Approve
                          </button>
                        </h3>
                      )}

                      {quotation?.status == "pending" && (
                        <h3 className="card-label">
                          <button
                            className="btn btn-sm btn-danger "
                            style={{ marginRight: "0.1rem" }}
                            onClick={() => {
                              rejectQuotation();
                            }}
                          >
                            Reject
                          </button>
                        </h3>
                      )}
                    </PermissionAbility>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-9">
              <div className="flex-lg-row-fluid ms-lg-15">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab == "quotations" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#quotations"
                      onClick={() => setTab("quotations")}
                    >
                      Part Items
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab == "comment" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#comment"
                      onClick={() => setTab("comment")}
                    >
                      Comments
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab == "files" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#files"
                      onClick={() => setTab("files")}
                    >
                      Files
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab == "activities" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#activities"
                      onClick={() => setTab("activities")}
                    >
                      Activities
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${
                    tab == "quotations" ? "active show" : ""
                  }`}
                  id="quotations"
                  role="tabpanel"
                >
                  <div className="card card-custom gutter-b">
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
                                        {item?.part?.aliases[0].name}{" "}
                                        <span className="text-primary">
                                          {item?.part?.is_foc == true
                                            ? "Foc"
                                            : "Non foc"}
                                        </span>
                                      </Link>
                                    </td>
                                    <td className=" fw-bolder mb-1 fs-6">
                                      <span>
                                        {item?.part?.aliases[0].part_number}
                                      </span>
                                    </td>

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
                                {quotation?.requisition?.type ==
                                  "purchase_request" && (
                                  <>
                                    <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                      <td colSpan={2}></td>
                                      <td>Sub-total</td>
                                      <td></td>
                                      <td>{total}</td>
                                      <td></td>
                                    </tr>
                                    <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                      <td colSpan={2}></td>
                                      <td className="align-center justify-content-center">
                                        Vat(%)
                                      </td>
                                      <td className="">
                                        <input
                                          type="number"
                                          className="form-control"
                                          aria-label="Small"
                                          aria-describedby="inputGroup-sizing-sm"
                                          name="vat"
                                          value={data?.vat}
                                          onChange={handleDataChange}
                                        />
                                      </td>
                                      <td>{(total * data?.vat) / 100}</td>
                                      <td></td>
                                    </tr>
                                    <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                      <td colSpan={2}></td>
                                      <td>Discount(%)</td>
                                      <td>
                                        <input
                                          type="number"
                                          className="form-control"
                                          aria-label="Small"
                                          aria-describedby="inputGroup-sizing-sm"
                                          name="discount"
                                          placeholder=""
                                          value={data?.discount}
                                          onChange={handleDataChange}
                                        />
                                      </td>
                                      <td className="text-danger">
                                        {(total * data?.discount) / 100}
                                      </td>
                                      <td></td>
                                    </tr>
                                    <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                      <td colSpan={2}></td>
                                      <td>Grand Total</td>
                                      <td></td>
                                      <td>{grandTotal}</td>
                                      <td></td>
                                    </tr>
                                  </>
                                )}
                              </tbody>
                            </table>
                            <PermissionAbility permission="quotations_partItems_update">
                              {!locked ? (
                                <button
                                  className="btn btn-sm btn-dark float-end fs-6 mt-5"
                                  onClick={handleUpdate}
                                >
                                  Update
                                </button>
                              ) : (
                                ""
                              )}
                            </PermissionAbility>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`tab-pane fade ${
                    tab == "comment" ? "active show" : ""
                  }`}
                  id="comment"
                  role="tabpanel"
                >
                  <div className="card">
                    <Scrollbars style={{ height: 610 }}>
                      {comment.length ? (
                        comment.map((item) => {
                          return (
                            <div className="d-flex flex-row m-5 card">
                              <div className="p-2">
                                <img
                                  className="rounded-circle"
                                  src={item.user.avatar_url}
                                  style={{ height: 50, width: 50 }}
                                />
                              </div>
                              <div>
                                <div className="h4">{item.user.name}</div>
                                <div>
                                  <span>
                                    {new Date(item.updated_at).getDate()}-
                                    {new Date(item.updated_at).getMonth()}-
                                    {new Date(item.updated_at).getFullYear()}
                                  </span>
                                  <span className="border mx-2">
                                    {item.type}
                                  </span>
                                  <div
                                    className="justify-content-between"
                                    style={{ fontSize: 14 }}
                                  >
                                    {item.text}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div className="d-flex justify-content-center mt-20">
                          <h2>No comment yet</h2>
                        </div>
                      )}
                    </Scrollbars>
                    <div className="d-flex align-items-end">
                      <div class="input-group m-3">
                        <textarea
                          class="form-control"
                          rows="1"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Type comment..."
                        />
                        <div
                          class="input-group-append d-flex align-items-end"
                          onClick={sendComment}
                        >
                          <button class="input-group-text " id="basic-addon2">
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${
                    tab == "files" ? "active show" : ""
                  }`}
                  id="files"
                  role="tabpanel"
                >
                  <div className="card card-custom gutter-b">
                    <div className="card-body px-0">
                      <div className="card mb-5 mb-xl-8">
                        <div className="card-body py-3">
                          <form
                            id="attachment-form"
                            encType="multipart/form-data"
                          >
                            <NewDropzone onDrop={uploadFile} />
                          </form>
                          <div className="table-responsive">
                            <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                              <thead>
                                <tr className="fw-bolder text-muted">
                                  <th className="min-w-50px">SL</th>
                                  <th className="min-w-120px">File Name</th>
                                  <th className="min-w-120px">Action</th>
                                </tr>
                              </thead>

                              <tbody>
                                {file?.data?.map((item, index) => (
                                  <tr key={index}>
                                    <td className="">{index + 1}</td>
                                    <td className=" fw-bolder mb-1 fs-6">
                                      <span>{item?.file_name}</span>
                                    </td>
                                    <td className=" fw-bolder mb-1 fs-6">
                                      <button
                                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                        onClick={() => {
                                          setConfirmDelete(true);
                                          setuuid(item.uuid);
                                          setModelId(item.model_id);
                                        }}
                                      >
                                        <i className="fa fa-trash"></i>
                                      </button>
                                      <a
                                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                        href={item?.original_url}
                                        target="_blank"
                                      >
                                        <i className="fa fa-download"></i>
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Activities logName="quotations" modelId={id} tab={tab} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteItem();
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </>
  );
};

export default ShowQuotation;
