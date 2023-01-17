import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import NewDropzone from "./Dropzone/MyDropzone";
import DeliverNoteService from "services/DeliverNoteService";
import { Activities } from "components/utils/Activities";
import PermissionAbility from "helpers/PermissionAbility";
import Barcode from "react-barcode";
import Confirmation from "components/utils/Confirmation";

const ShowDeliveryNotes = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [deliveryNote, setDeliveryNote] = useState({});
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState("part_items"); // * tab active or not
  const [tab, setTab] = useState("part_items");

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [file, setFile] = useState({});

  const uploadFile = async (formData) => {
    await DeliverNoteService.fileUpload(id, formData);
    getFile();
  };

  const deleteItem = async () => {
    await DeliverNoteService.deleteFile(uuid, model_id);
    getFile();
  };

  const getFile = async () => {
    const res = await DeliverNoteService.getFile(id);
    setFile(res);
  };

  const getDeliveryNotes = async () => {
    let res = await DeliverNoteService.get(id);
    setDeliveryNote(res);
    if (document.getElementById("content") != null) {
      let content = document.getElementById("content").innerHTML;
      document.body.innerHTML = content;
      window.print();
    }
  };

  useEffect(() => {
    if (id) {
      getDeliveryNotes();
      getFile();
    }
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
                  <div className="fw-bolder mt-5">Delivery Note Number</div>
                  <div className="text-gray-600">{deliveryNote?.dn_number}</div>

                  <div className="fw-bolder mt-5">Barcode Number</div>
                  <div className="text-gray-600">
                    <Barcode
                      value={deliveryNote?.dn_number}
                      height="50"
                      format="CODE128"
                      className="w-100"
                    />
                  </div>

                  <div className="fw-bolder mt-5">Invoice Number</div>
                  <div className="text-gray-600">
                    {deliveryNote?.invoice?.invoice_number ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Company Name</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.name ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Company Group</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.company_group ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Machine Type</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.machine_types ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Priority</div>
                  <div className="text-gray-600">
                    {deliveryNote?.requisition?.priority ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Type</div>
                  <div className="text-gray-600">
                    {deliveryNote?.requisition?.type ?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Remarks </div>
                  <div className="text-gray-600">
                    {deliveryNote?.remarks ?? "--"}
                  </div>
                </div>

                <div className="card-header">
                  <div className="card-title">
                    <PermissionAbility permission="deliverynotes_print">
                      <h3 className="card-label">
                        <Link
                          className="btn btn-sm btn-dark "
                          to={
                            "/panel/delivery-notes/" +
                            deliveryNote.id +
                            "/print"
                          }
                          style={{ marginRight: "0.75rem" }}
                          target="_blank"
                        >
                          Print
                        </Link>
                      </h3>
                    </PermissionAbility>
                  </div>
                </div>
              </div>
            </div>
            {/* div ends here */}

            <div className="col-xl-9">
              <div className="flex-lg-row-fluid ms-lg-15">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab == "part_items" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#part_items"
                      onClick={() => setTab("part_items")}
                    >
                      Part Items
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

                <div className="tab-content">
                  {/* Tabs start from here */}

                  <div
                    className={`tab-pane fade ${
                      tab == "part_items" ? "active show" : ""
                    }`}
                    id="part_items"
                    role="tab-panel"
                  >
                    <div className="d-flex flex-column gacompanyIdgap-lg-10">
                      <div className="card card-custom gutter-b">
                        <div className="card-body px-0">
                          <div className="card mb-5 mb-xl-8">
                            <div className="card-body py-3">
                              <div className="table-responsive">
                                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                                  <thead>
                                    <tr className="fw-bolder text-muted">
                                      <th className="min-w-50px">Part Name</th>
                                      <th className="min-w-120px">
                                        Part Number
                                      </th>
                                      <th className="min-w-120px">Quantity</th>
                                      <th className="min-w-120px">Total </th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {deliveryNote?.part_items?.map(
                                      (item, index) => (
                                        <tr key={index}>
                                          <td className="">
                                            <Link
                                              to={
                                                "/panel/parts/" + item?.part?.id
                                              }
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
                                              {
                                                item?.part?.aliases[0]
                                                  .part_number
                                              }
                                            </span>
                                          </td>

                                          <td>
                                            <span>{item.quantity}</span>
                                          </td>

                                          <td className=" fw-bolder mb-1 fs-6">
                                            <span>
                                              {deliveryNote?.requisition
                                                ?.type != "claim_report"
                                                ? parseInt(item.total_value)
                                                : 0}{" "}
                                              TK.
                                            </span>
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`tab-pane fade ${ tab == "files" ? "active show" : "" }`} id="files" role="tab-panel" >
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

                  <div
                    className={`tab-pane fade ${
                      tab == "activities" ? "active show" : ""
                    }`}
                    id="activities"
                    role="tab-panel"
                  >
                    <Activities logName="quotations" modelId={id} tab={tab} />
                  </div>

                  {/* Tabs end here */}
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
      </div>
    </>
  );
};

export default ShowDeliveryNotes;
