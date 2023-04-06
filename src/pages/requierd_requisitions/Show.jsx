import { Activities } from "components/utils/Activities";
import PermissionAbility from "helpers/PermissionAbility";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import RequisitionService from "../../services/RequisitionService";
import UpdateReqInfo from "./section/UpdateReqInfo";
import NewDropzone from "./Dropzone/MyDropzone";
import Confirmation from "components/utils/Confirmation";

const ShowRequiredRequisition = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [requisition, setRequisition] = useState({});
  const [reqId, setReqId] = useState({});
  const [tab, setTab] = useState("requisitions");
  const [file, setFile] = useState({});
  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [updateDueAMountModal, setUpdateDueAMountModal] = useState(false);
  const onCloseModal = () => {
    setUpdateDueAMountModal(false);
  };

  const getRequisition = async () => {
    let res = await RequisitionService.getRequiredRequisition(id);
    setRequisition(res);
  };

  const status = [
    { value: "pending", label: "Pending" },
    { value: "on-going", label: "On-going" },
    { value: "complete", label: "Complete" },
  ];

  const handleSelect = async (e) => {
    let data = { status: e.value };
    await RequisitionService.changeStatus(id, data);
    setRequisition({ ...requisition, status: e.value });
  };

  const uploadFile = async (formData) => {
    await RequisitionService.requiredFileUpload(id, formData);
    getFile();
  };

  const deleteItem = async () => {
    await RequisitionService.requiredDeleteFile(uuid, model_id);
    getFile();
  };

  const getFile = async () => {
    const res = await RequisitionService.requiredGetFile(id);
    setFile(res);
  };

  useEffect(() => {
    if (id) getRequisition();
  }, [id]);

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
                <div className="fw-bolder mt-5">Company</div>
                <div className="text-gray-600">
                  {requisition?.company?.name}
                </div>

                {/* <div className="fw-bolder mt-5">Machines</div>
                <div className="text-gray-600">
                  {requisition?.machines?.map((item, index) => (
                    <span key={index} className="badge badge-light-info ">
                      {item?.model?.name}{" "}
                    </span>
                  ))}
                </div> */}

                <div className="fw-bolder mt-5">Engineer</div>
                <div className="text-gray-600">
                  {requisition?.engineer?.name ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Requisition Status</div>
                <div className="fw-bolder text-danger">
                  {requisition?.requisition_id ? (
                    <Link
                      to={"/panel/requisitions/" + requisition?.requisition_id}
                      className="fw-bolder text-success"
                    >
                      Created
                    </Link>
                  ) : (
                    "Not yet Created"
                  )}
                </div>

                <div className="fw-bolder mt-5">Priority</div>
                <div className="text-gray-600">
                  {requisition?.priority?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Type</div>
                <div className="text-gray-600">
                  {requisition?.type?.replaceAll("_", " ")?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Updated At</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {requisition?.updated_at}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Ref Number</div>
                <div className="text-gray-600">
                  {requisition?.ref_number ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Reason Of Trouble</div>
                <div className="text-gray-600">
                  {requisition?.reason_of_trouble ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Solutions</div>
                <div className="text-gray-600">
                  {requisition?.solutions ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Expected Delivery</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {requisition?.expected_delivery}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Remarks</div>
                <div className="text-gray-600">
                  {requisition?.remarks ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Created At </div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {requisition?.created_at}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Created By </div>
                <div className="text-gray-600">
                    {requisition?.user?.name?.replaceAll("_", " ")?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Status</div>
                <div className="text-gray-600">{requisition?.status?.replaceAll("_", " ")?.capitalize()}</div>

                <div className="card-title mt-10 justify-content-center">
                  <h3 className="card-label mr-10">
                    {/* <PermissionAbility permission="companies_edit"> */}
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={() => {
                        setReqId(id);
                        setUpdateDueAMountModal(true);
                      }}
                    >
                      <i className="fa fa-pen"></i> Update Info
                    </button>
                    {/* </PermissionAbility> */}
                  </h3>
                </div>
              </div>
              {!requisition?.requisition_id && (
                <span>
                  <div className="card-body py-4">
                    <div className="fw-bolder mt-5">Change Status</div> 
                    <div className="text-gray-600">
                      <Select
                        options={status}
                        onChange={handleSelect}
                        name="status"
                      />
                    </div>
                  </div>

                  {requisition?.status == "complete" && (
                    <div className="card-header">
                      <div className="card-title">
                        <h3 className="card-label">
                          <PermissionAbility permission="requisitions_generate_quotation">
                            <button
                              className="btn btn-sm btn-dark "
                              style={{ marginRight: "0.1rem" }}
                              onClick={() =>
                                navigate(`/panel/require_req/create/` + id)
                              }
                            >
                              Generate Requisitions
                            </button>
                          </PermissionAbility>
                        </h3>
                      </div>
                    </div>
                  )}
                </span>
              )}
            </div>
          </div>

          <div className="col-xl-9">
            <div className="flex-lg-row-fluid ms-lg-15">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${
                      tab == "requisitions" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#requisitions"
                    onClick={() => setTab("requisitions")}
                  >
                    Part Items
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${
                      tab == "Files" ? "active" : ""
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
                <div
                  className={`tab-pane fade ${
                    tab == "requisitions" ? "active show" : ""
                  }`}
                  id="requisitions"
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
                                </tr>
                              </thead>

                              <tbody>
                                {requisition?.required_part_items?.map(
                                  (item, index) => (
                                    <tr key={index}>
                                      <td className="">{item?.part_name}</td>
                                      <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.part_number}</span>
                                      </td>
                                      <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.qty}</span>
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
                  <div className="mt-10">
                    <button
                      className="btn btn-sm btn-dark "
                      style={{ marginRight: "0.1rem" }}
                      onClick={() => navigate(`/panel/parts`)}
                    >
                      Add Part
                    </button>
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

                <Activities logName="requisitions" modelId={id} tab={tab} />
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
      <UpdateReqInfo
        open={updateDueAMountModal}
        reqId={reqId}
        onCloseModal={onCloseModal}
        onUpdated={getRequisition}
      />
    </div>
  );
};

export default ShowRequiredRequisition;
