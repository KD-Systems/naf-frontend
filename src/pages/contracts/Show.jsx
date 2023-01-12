import React, { useState, useEffect } from "react";
import NewDropzone from "./Dropzone/MyDropzone";
import { Activities } from "components/utils/Activities";
import Moment from "react-moment";
import { useParams, useNavigate, Link } from "react-router-dom";
import ContractService from "services/ContractService";
import MachineModels from "./machines/Index";
import PermissionAbility from "helpers/PermissionAbility";
import Confirmation from "components/utils/Confirmation";

const ShowContract = () => {
  
  const [tab, setTab] = useState("machines");
  const navigate = useNavigate();
  let { id } = useParams();
  const [data, setData] = useState({});

  const [confirmDelete, setConfirmDelete] = useState(false);
  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [file, setFile] = useState({});

  const uploadFile = async (formData) => {
    await ContractService.fileUpload(id, formData);
    getFile();
  };

  const deleteItem = async () => {
    await ContractService.deleteFile(uuid, model_id);
    getFile();
  };

  const getFile = async () => {
    const res = await ContractService.getFile(id);
    setFile(res);
  };

  const getContract = async () => {
    setData(await ContractService.get(id));
  };

  useEffect(() => {
    if (id) {
      getContract();
      getFile();
    }
  }, [id]);
  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body">
                  <button
                    className="btn btn-sm btn-dark mb-2"
                    style={{ marginRight: "0.75rem" }}
                    onClick={() => navigate(-1)}
                  >
                    <i className="fa fa-arrow-left"></i>Back
                  </button>

                  <div className="separator"></div>

                  <div className="pb-5 fs-6">
                    <div className="fw-bolder mt-5">
                      {data?.is_foc ? "Installation" : "Contract"} Date
                    </div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        <Moment format="YYYY-MM-DD">{data.start_date}</Moment>
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Expriation Date</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        <Moment format="YYYY-MM-DD">{data.end_date}</Moment>
                        {data.has_expired ? (
                          <div className="badge badge-light-danger">
                            Expired
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Status</div>
                    <div
                      className={
                        data?.status
                          ? "badge badge-light-success"
                          : "badge badge-light-danger"
                      }
                    >
                      {data?.status ? "active" : "inactive"}
                    </div>

                    <div className="fw-bolder mt-5">FOC</div>
                    <div
                      className={
                        data?.is_foc
                          ? "badge badge-light-warning"
                          : "badge badge-light-info"
                      }
                    >
                      {data?.is_foc ? "Yes" : "No"}
                    </div>

                    <div className="fw-bolder mt-5">Machines</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.machine_models?.map((dt, index) => (
                          <Link
                            key={index}
                            to={`/panel/machines/${dt.model.machine_id}/models/${dt.model.id}`}
                            className="text-gray-600 text-hover-primary fw-bolder d-block mb-1 fs-6"
                          >
                            {dt?.model?.name}
                          </Link>
                        ))}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Notes</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.notes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-lg-row-fluid ms-lg-15">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                <PermissionAbility permission="contracts_machine_model_access">
                  <li className="nav-item">
                    <a
                      className={`nav-link text-active-primary pb-4 ${
                        tab === "machines" ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      href="#machines"
                      onClick={() => setTab("machines")}
                    >
                      Machine Models
                    </a>
                  </li>
                </PermissionAbility>
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${
                      tab === "contranctFiles" ? "active" : ""
                    }`}
                    data-bs-toggle="tab"
                    href="#contranctFiles"
                    onClick={() => setTab("contranctFiles")}
                  >
                    Files
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${
                      tab === "activities" ? "active" : ""
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
                  className="tab-pane fade show active"
                  id="machines"
                  role="tabpanel"
                >
                  <PermissionAbility permission="contracts_machine_model_access">
                    <MachineModels tab={tab} models={data.machine_models} />
                  </PermissionAbility>
                </div>
                <div
                  className="tab-pane fade show"
                  id="contranctFiles"
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

                <div
                  className="tab-pane fade show"
                  id="activities"
                  role="tabpanel"
                >
                  <div className="tab-content">
                    <Activities logName="contracts" modelId={id} tab={tab} />
                  </div>
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

export default ShowContract;
