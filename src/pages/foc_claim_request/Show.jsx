import { Activities } from "components/utils/Activities";
import PermissionAbility from "helpers/PermissionAbility";
import UpdateReqInfo from "pages/requierd_requisitions/section/UpdateReqInfo";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import RequisitionService from "../../services/RequisitionService";
import UpdatePartInfo from "./section/UpdatePartInfo";

const ShowClaimRequest = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [claimRequest, setClaimRequest] = useState({});
  const [reqId, setReqId] = useState({});
  const [part, setPart] = useState({});

  const [tab, setTab] = useState("requisitions");
  const [reqisitionInfoModal, setReqisitionInfoModal] = useState(false);
  const [reqisitionPartModal, setReqisitionPartModal] = useState(false);
  const onCloseModal = () => {
    setReqisitionInfoModal(false);
    setReqisitionPartModal(false);
  };
  const getRequisition = async () => {
    let res = await RequisitionService.getRequiredRequisition(id);
    setClaimRequest(res);
  };

  const status = [
    { value: "pending", label: "Pending" },
    { value: "from_foc", label: "From Foc" },
    { value: "from_sellable", label: "From Sellable" },
    { value: "both", label: "Both" },
    { value: "waiting_for_tajima", label: "Waiting for tajima" },
  ];

  const handleSelect = async (e) => {
    let data = { status: e.value };
    await RequisitionService.changeStatus(id, data);
    setClaimRequest({ ...claimRequest, status: e.value });
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
                  {claimRequest?.company?.name}
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
                  {claimRequest?.engineer?.name ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Requisition Status</div>
                <div className="fw-bolder text-danger">
                  {claimRequest?.requisition_id ? (
                    <Link
                      to={"/panel/requisitions/" + claimRequest?.requisition_id}
                      className="fw-bolder text-success"
                    >
                      Created
                    </Link>
                  ) : (
                    "Not yet Created"
                  )}
                </div>

                <div className="fw-bolder mt-5">Expected Delivery</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {claimRequest?.expected_delivery}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Priority</div>
                <div className="text-gray-600">
                  {claimRequest?.priority?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Type</div>
                <div className="text-gray-600">
                  {claimRequest?.type?.replaceAll("_", " ")?.capitalize()}
                </div>

                <div className="fw-bolder mt-5">Updated At</div>
                <div className="text-gray-600">
                  <Moment format="D MMMM YYYY">
                    {claimRequest?.updated_at}
                  </Moment>
                </div>

                <div className="fw-bolder mt-5">Ref Number</div>
                <div className="text-gray-600">
                  {claimRequest?.ref_number ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Reason Of Trouble</div>
                <div className="text-gray-600">
                  {claimRequest?.reason_of_trouble ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Solutions</div>
                <div className="text-gray-600">
                  {claimRequest?.solutions ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Remarks</div>
                <div className="text-gray-600">
                  {claimRequest?.remarks ?? "--"}
                </div>

                <div className="fw-bolder mt-5">Status</div>
                <div className="text-gray-600">{claimRequest?.status}</div>

                <div className="card-title mt-10 justify-content-center">
                  <h3 className="card-label mr-10">
                    {/* <PermissionAbility permission="companies_edit"> */}
                    <button
                      className="btn btn-sm btn-dark"
                      onClick={() => {
                        setReqId(id);
                        setReqisitionInfoModal(true);
                      }}
                    >
                      <i className="fa fa-pen"></i> Update Info
                    </button>
                    {/* </PermissionAbility> */}
                  </h3>
                </div>
              </div>
              {!claimRequest?.requisition_id && (
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

                  {(claimRequest?.status == "complete" ||
                    claimRequest?.status == "from_foc" ||
                    claimRequest?.status == "from_sellable" ||
                    claimRequest?.status == "both") && (
                    <div className="card-header">
                      <div className="card-title">
                        <h3 className="card-label">
                          <PermissionAbility permission="requisitions_generate_quotation">
                            <button
                              className="btn btn-sm btn-dark "
                              style={{ marginRight: "0.1rem" }}
                              onClick={() =>
                                navigate(`/panel/claim-requests/create/` + id)
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
                                  {/* <th className="min-w-120px">status</th> */}
                                  <th className="min-w-120px">Remarks</th>
                                  {/* <th className="min-w-120px">Action</th> */}
                                </tr>
                              </thead>

                              <tbody>
                                {claimRequest?.required_part_items?.map(
                                  (item, index) => (
                                    <tr key={index}>
                                      <td className="">{item?.part_name}</td>
                                      <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.part_number}</span>
                                      </td>
                                      <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.qty}</span>
                                      </td>
                                      {/* <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.status}</span>
                                      </td> */}
                                      <td className=" fw-bolder mb-1 fs-6">
                                        <span>{item?.remarks}</span>
                                      </td>

                                      {/* <td className=" fw-bolder mb-1 fs-6">
                                        <span className="text-end">
                                          <div
                                            // onClick={()=>handleModal(row)}
                                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                            data-toggle="tooltip"
                                            onClick={() => {
                                              setPart(item);
                                              setReqisitionPartModal(true);
                                            }}
                                          >
                                            <i className="fa fa-pen"></i>
                                          </div>
                                        </span>
                                      </td> */}
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
                <Activities logName="requisitions" modelId={id} tab={tab} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* From required part section */}
      <UpdateReqInfo
        open={reqisitionInfoModal}
        reqId={reqId}
        onCloseModal={onCloseModal}
        onUpdated={getRequisition}
      />

      <UpdatePartInfo
        open={reqisitionPartModal}
        part={part}
        onCloseModal={onCloseModal}
        onUpdated={getRequisition}
      />
    </div>
  );
};

export default ShowClaimRequest;
