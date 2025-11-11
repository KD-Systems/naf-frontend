import { Activities } from "components/utils/Activities";
import Confirmation from "components/utils/Confirmation";
import PermissionAbility from "helpers/PermissionAbility";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoiceService from "services/InvoiceService";
import NewDropzone from "./Dropzone/MyDropzone";
import InvoicePartItems from "./partItems/Index";
import InvoiceCreatePayment from "./paymentHistories/Create";
import UpdateInfo from "./section/UpdateInfo";

const ShowInvoice = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [paymentHistories, setPaymentHistories] = useState([]);
  const [paymentHistoriesId, setPaymentHistoriesId] = useState({});
  const [paymentHistoriesDelete, setPaymentHistoriesDelete] = useState(false);
  const [active, setActive] = useState("part_items"); // * tab active or not
  const [tab, setTab] = useState("part_items");
  const [open, setOpen] = useState(false); //* open modal
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [file, setFile] = useState({});
  const [updateAMountModal, setUpdateAMountModal] = useState(false);
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState(0);

  const uploadFile = async (formData) => {
    await InvoiceService.fileUpload(id, formData);
    getFile();
  };

  const getFile = async () => {
    const res = await InvoiceService.getFile(id);
    setFile(res);
  };

  const getInvoice = async () => {
    let res = await InvoiceService.get(id);
    setInvoice(res);
    if (res?.part_items?.length == 0) {
      setTab("payment_histories");
    }
    setTotal(res?.previous_due ?? res?.grand_total);
    setVat(res?.vat_type == 'percentage' ? (res?.vat * res?.sub_total) / 100 : res?.vat);
    setDiscount(res?.discount_type == 'percentage' ? (res?.discount * res?.sub_total) / 100 : res?.discount);    
  };

  useEffect(() => {
    invoice?.part_items?.length == 0 && setActive("payment_histories");
    getFile();
  }, [invoice]);

  const getPaymentHistories = async () => {
    let res = await InvoiceService.getPaymentHistories(id);
    setPaymentHistories(res.data);
    setTotalPayment(
      res?.data?.reduce(
        (partialSum, a) => parseInt(partialSum) + parseInt(a.amount),
        0
      )
    );
  };

  const deleteItem = async () => {
    if (paymentHistoriesDelete == true) {
      await InvoiceService.removePaymentHistory(paymentHistoriesId);
      getPaymentHistories();
    } else {
      await InvoiceService.deleteFile(uuid, model_id);
      getFile();
    }
  };
  const onCloseModal = () => {
    setOpen(false);
    setUpdateAMountModal(false);
  };

  const updateInvoiceDate = async (date) => {
    setInvoice({
      ...invoice,
      invoice_date: new Date(date),
    });

    await InvoiceService.updateInfo(id, {
      created_at: moment(date).format("YYYY-MM-DD") + " 00:00:00",
    });
  };

  useEffect(() => {
    if (!open) {
      getPaymentHistories();
    }
  }, [open]);

  useEffect(() => {
    if (id) getInvoice();
    getPaymentHistories();
  }, [id]);
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
                  <div className="fw-bolder mt-5">Invoice Number</div>
                  <div className="text-gray-600">{invoice?.invoice_number}</div>
                  <div className="fw-bolder mt-5">Quotation Number</div>
                  <div className="text-gray-600">{invoice?.quotation}</div>
                  {invoice?.part_items?.length > 0 && (
                    <>
                      <div className="fw-bolder mt-5">Invoice Status</div>
                      {invoice?.requisition?.type !== "claim_report" ? (
                        <>
                          <div className="text-gray-600">
                            {invoice?.part_items?.reduce(
                              (partialSum, a) =>
                                partialSum + parseInt(a.total_value),
                              0
                            ) ==
                            paymentHistories?.reduce(
                              (partialSum, a) =>
                                partialSum + parseInt(a.amount),
                              0
                            ) ? (
                              <span className="badge badge-light-success">
                                Paid
                              </span>
                            ) : invoice?.part_items?.reduce(
                                (partialSum, a) =>
                                  partialSum + parseInt(a.total_value),
                                0
                              ) >
                              paymentHistories?.reduce(
                                (partialSum, a) =>
                                  partialSum + parseInt(a.amount),
                                0
                              ) ? (
                              <span className="badge badge-light-warning">
                                Partial Paid
                              </span>
                            ) : paymentHistories?.reduce(
                                (partialSum, a) =>
                                  partialSum + parseInt(a.amount),
                                0
                              ) == 0 ? (
                              <span className="badge badge-light-danger">
                                {" "}
                                Unpaid
                              </span>
                            ) : (
                              <span className="badge badge-light-danger">
                                {" "}
                              </span>
                            )}
                          </div>
                        </>
                      ) : (
                        "--"
                      )}
                    </>
                  )}

                  <div className="fw-bolder mt-5">Company</div>
                  <div className="text-gray-600">{invoice?.company?.name}</div>

                  <div className="fw-bolder mt-5 mb-3">Invoice Date</div>
                  <div className="text-gray-600">
                    <DatePicker
                      className="form-control"
                      name="payment_date"
                      selected={
                        new Date(
                          moment(invoice?.invoice_date).format("YYYY-MM-DD")
                        )
                      }
                      onChange={updateInvoiceDate}
                    />
                  </div>
                  {invoice?.part_items?.length > 0 && (
                    <>
                      <div className="fw-bolder mt-5">Payment Mode</div>
                      <div className="text-gray-600">
                        {invoice?.payment_mode ?? "--"}
                      </div>

                      <div className="fw-bolder mt-5">Payment Term</div>
                      <div className="text-gray-600">
                        {invoice?.payment_term ?? "--"}
                      </div>

                      <div className="fw-bolder mt-5">Payment Partial Mode</div>
                      <div className="text-gray-600">
                        {invoice?.payment_partial_mode ?? "--"}
                      </div>
                      <div className="fw-bolder mt-5">Next Payment </div>
                      <div className="text-gray-600">
                        {invoice?.next_payment ?? "--"}
                      </div>

                      <div className="fw-bolder mt-5">Last Payment </div>
                      <div className="text-gray-600">
                        {invoice?.last_payment ?? "--"}
                      </div>

                      <div className="fw-bolder mt-5">Priority</div>
                      <div className="text-gray-600">
                        {invoice?.requisition?.priority?.capitalize()}
                      </div>

                      <div className="fw-bolder mt-5">Requisition Type</div>
                      <div className="text-gray-600">
                        {invoice?.requisition?.type
                          ?.replaceAll("_", " ")
                          ?.capitalize()}
                      </div>

                      <div className="fw-bolder mt-5">Sub Total </div>
                      <div className="text-gray-600">
                        {invoice?.sub_total ?? "0"}tk
                      </div>

                      <div className="fw-bolder mt-5">Vat </div>
                      <div className="text-gray-600">
                        {invoice?.vat ?? "0"}{invoice?.vat_type == 'percentage' ? '%' : ' TK.'}
                      </div>

                      <div className="fw-bolder mt-5">Discount </div>
                      <div className="text-gray-600">
                        {invoice?.discount ?? "0"}{invoice?.discount_type == 'percentage' ? '%' : ' TK.'}
                      </div>

                      <div className="fw-bolder mt-5">Grand Total</div>
                      <div className="text-gray-600">
                        {invoice?.grand_total ?? "0"}tk
                      </div>

                      <div className="fw-bolder mt-5">
                        Requisition Ref Number
                      </div>
                      <div className="text-gray-600">
                        {invoice?.requisition?.ref_number ?? "--"}
                      </div>

                      <div className="fw-bolder mt-5">Created At </div>
                      <div className="text-gray-600">
                        <Moment format="D MMMM YYYY">
                          {invoice?.invoice_date}
                        </Moment>
                      </div>

                      <div className="fw-bolder mt-5">Created By </div>
                      <div className="text-gray-600">{invoice?.created_by}</div>

                      <div className="fw-bolder mt-5">Remrks</div>
                      <div className="text-gray-600">
                        {invoice?.remarks ?? "--"}
                      </div>
                    </>
                  )}
                </div>
                <div className="text-center p-3">
                  {invoice?.part_items?.length > 0 && (
                    <div>
                        <PermissionAbility permission="invoices_update">
                          <button
                            className="btn btn-sm btn-primary text-white m-1"
                            onClick={() => {
                              setUpdateAMountModal(true);
                            }}
                          >
                            Edit
                          </button>
                        </PermissionAbility>

                        <PermissionAbility permission="invoices_print">
                            <Link
                              className="btn btn-sm btn-secondary m-1"
                              to={"/panel/invoices/" + invoice.id + "/print"}
                              style={{ marginRight: "0.75rem" }}
                              target="_blank"
                            >
                              Print
                            </Link>
                        </PermissionAbility>
                      
                      <PermissionAbility permission="invoices_generate_delivery_note">
                          <button
                            className="btn btn-sm btn-primary m-1"
                            onClick={() =>
                              navigate(
                                `/panel/delivery-notes/${invoice?.id}/create`
                              )
                            }
                          >
                            Generate Delivery Note
                          </button>
                      </PermissionAbility>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-xl-9">
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                  {invoice?.part_items?.length > 0 && (
                    <li className="nav-item">
                      <a
                        className="nav-link text-active-primary pb-4 active"
                        data-bs-toggle="tab"
                        href="#part_items"
                        onClick={() => {
                          setActive("part_items");
                          setTab("part_items");
                        }}
                      >
                        Part Items
                      </a>
                    </li>
                  )}
                  {invoice?.requisition?.type !== "claim_report" ? (
                    <li className="nav-item">
                      <a
                        className="nav-link text-active-primary pb-4"
                        data-bs-toggle="tab"
                        href="#payment_histories"
                        onClick={() => {
                          setActive("payment_histories");
                        }}
                      >
                        Payment Histories
                      </a>
                    </li>
                  ) : (
                    ""
                  )}

                  {invoice?.part_items?.length > 0 && (
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
                  )}
                  {invoice?.part_items?.length > 0 && (
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
                  )}
                </ul>

                <div className="tab-content">
                  {/* Tabs start from here */}
                  <div
                    className={`tab-pane fade ${
                      tab == "part_items" ? "active show" : ""
                    }`}
                    id="requisitions"
                    role="tabpanel"
                  >
                    <InvoicePartItems
                      active={active}
                      invoice={invoice}
                      tab={tab}
                      discount={discount}
                      vat={vat}
                    />
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
                                          rel="noreferrer"
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
                  <div
                    className={`tab-pane fade ${
                      tab == "activities" ? "active show" : ""
                    }`}
                    id="requisitions"
                    role="tabpanel"
                  >
                    <Activities logName="invoices" modelId={id} tab={tab} />
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tab == "payment_histories" ? "active show" : ""
                    }`}
                    id="payment_histories"
                    role="tab-panel"
                  >
                    <div className="d-flex flex-column gap-7 gap-lg-10">
                      <div className="card card-flush py-4">
                        <div className="card-header">
                          <div className="card-title">
                            <h2>Payment Histories</h2>
                          </div>
                          <div className="card-toolbar">
                            <PermissionAbility permission="invoices_payment">
                              <button
                                type="button"
                                className="btn btn-light-primary"
                                onClick={() => {
                                  setOpen(true);
                                }}
                              >
                                <span className="svg-icon svg-icon-3">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <rect
                                      opacity="0.3"
                                      x="2"
                                      y="2"
                                      width="20"
                                      height="20"
                                      rx="5"
                                      fill="black"
                                    ></rect>
                                    <rect
                                      x="10.8891"
                                      y="17.8033"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      transform="rotate(-90 10.8891 17.8033)"
                                      fill="black"
                                    ></rect>
                                    <rect
                                      x="6.01041"
                                      y="10.9247"
                                      width="12"
                                      height="2"
                                      rx="1"
                                      fill="black"
                                    ></rect>
                                  </svg>
                                </span>
                                Add Payment
                              </button>
                            </PermissionAbility>
                          </div>
                        </div>
                        <div className="card-body pt-0">
                          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                            <thead>
                              <tr className="fw-bolder text-muted">
                                <th className="min-w-80px">Invoice Id</th>
                                <th className="min-w-120px">Payment Mode</th>
                                <th className="min-w-120px">Payment Date</th>
                                <th className="min-w-120px">Amount</th>
                                <th className="min-w-150x">Action</th>
                              </tr>
                            </thead>

                            <tbody>
                              {paymentHistories?.map((item, index) => (
                                <tr key={index}>
                                  <td>{item?.invoice?.invoice_number}</td>
                                  <td>{item.payment_mode}</td>

                                  <td>
                                    <Moment format="YYYY-MM-DD">
                                      {item.payment_date}
                                    </Moment>
                                  </td>
                                  <td>{Math.floor(item?.amount)}Tk.</td>

                                  <td>
                                    <span className="text-end">
                                      <Link
                                        to={
                                          `/panel/invoices/` +
                                          item?.invoice?.id +
                                          `/payment-histories/` +
                                          item.id
                                        }
                                        className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </Link>
                                    </span>
                                    <PermissionAbility permission="payment_history_delete">
                                      <span className="text-end">
                                        <button
                                          onClick={() => {
                                            setPaymentHistoriesId(item?.id);
                                            setPaymentHistoriesDelete(true);
                                            setConfirmDelete(true);
                                          }}
                                          className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                        >
                                          <i className="fa fa-trash"></i>
                                        </button>
                                      </span>
                                    </PermissionAbility>
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
            </div>
          </div>
        </div>
      </div>

      <InvoiceCreatePayment
        open={open}
        onCloseModal={onCloseModal}
        invoice={invoice}
        due={total - totalPayment}
      />
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteItem();
        }}
        onCancel={() => setConfirmDelete(false)}
      />
      <UpdateInfo
        open={updateAMountModal}
        InvoiceId={id}
        onCloseModal={onCloseModal}
        onUpdated={getInvoice}
      />
    </>
  );
};

export default ShowInvoice;
