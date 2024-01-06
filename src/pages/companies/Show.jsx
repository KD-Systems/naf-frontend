import { Activities } from "components/utils/Activities";
import Confirmation from "components/utils/Confirmation";
import PermissionAbility from "helpers/PermissionAbility";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { useParams } from "react-router-dom";
import CompanyService from "services/CompanyService";
import NewDropzone from "./Dropzone/MyDropzone";
import CompanyAdvance from "./company_advance/Index";
import DuePayment from "./company_advance/due/Index";
import CompanyMachines from "./machines/Index";
import CompanyInfo from "./sections/Info";
import CompanyUsers from "./users/Index";

const ShowCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [uuid, setuuid] = useState();
  const [model_id, setModelId] = useState();
  const [file, setFile] = useState({});
  const [active, setActive] = useState("users");
  const [zoomImage, setZoomImage] = useState(false);

  const getCompany = async () => {
    setCompany(await CompanyService.get(id));
  };

  const uploadFile = async (formData) => {
    await CompanyService.fileUpload(id, formData);
    getFile();
  };

  const deleteItem = async () => {
    await CompanyService.deleteFile(uuid, model_id);
    getFile();
  };

  const getFile = async () => {
    const res = await CompanyService.getFile(id);
    setFile(res);
  };

  useEffect(() => {
    getCompany();
    getFile();
  }, [id]);

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div className="form d-flex flex-column flex-lg-row gap-7 gap-lg-10 fv-plugins-bootstrap5 fv-plugins-framework">
          <CompanyInfo company={company} setZoomImage={setZoomImage} />
          {!zoomImage && (
            <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4 active"
                    data-bs-toggle="tab"
                    href="#users"
                    onClick={() => {
                      setActive("users");
                    }}
                  >
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#contracts"
                    onClick={() => {
                      setActive("contracts");
                    }}
                  >
                    Contracts
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#machines"
                    onClick={() => {
                      setActive("machines");
                    }}
                  >
                    Machines
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#advancePayment"
                    onClick={() => {
                      setActive("advancePayment");
                    }}
                  >
                    Advance Payment
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#duePayment"
                    onClick={() => {
                      setActive("duePayment");
                    }}
                  >
                    Due Payment
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#file"
                    onClick={() => {
                      setActive("file");
                    }}
                  >
                    Files
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link text-active-primary pb-4"
                    data-bs-toggle="tab"
                    href="#activities"
                    onClick={() => {
                      setActive("activities");
                    }}
                  >
                    Activities
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                {/* Tabs start from here */}
                <PermissionAbility permission="companies_users_access">
                  <CompanyUsers active={active} companyId={company.id} />
                </PermissionAbility>
                <PermissionAbility permission="companies_contracts_access">
                  <div
                    className="tab-pane fade"
                    id="contracts"
                    role="tab-panel"
                  >
                    <div className="d-flex flex-column gap-7 gap-lg-10">
                      <div className="card card-flush py-4">
                        <div className="card-header">
                          <div className="card-title">
                            <h2>Contracts</h2>
                          </div>
                        </div>
                        <div className="card-body pt-0">
                          <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                            <thead>
                              <tr className="fw-bolder text-muted">
                                <th className="min-w-150px">Machine</th>
                                <th className="min-w-150px">Machine Models</th>
                                <th className="min-w-150px">Expiration Date</th>
                                <th className="min-w-150px">Type</th>
                                <th className="min-w-120px">Status</th>
                              </tr>
                            </thead>

                            <tbody>
                              {company?.contracts?.map((item, index) => (
                                <tr key={index}>
                                  <td>
                                    {item?.machine_models?.map(
                                      (it) => it?.model?.machine?.name
                                    )}
                                  </td>
                                  <td>
                                    {item?.machine_models?.map(
                                      (it) => it?.model?.name
                                    )}
                                  </td>

                                  <td>
                                    <Moment format="YYYY-MM-DD">
                                      {item.end_date}
                                    </Moment>
                                  </td>

                                  <td>{item.is_foc == true ? "FOC" : "AMC"}</td>

                                  <td
                                    className={
                                      item.status
                                        ? "badge badge-light-success"
                                        : "badge badge-light-danger"
                                    }
                                  >
                                    <div
                                      className={
                                        item.status
                                          ? "badge badge-light-success"
                                          : "badge badge-light-danger"
                                      }
                                    >
                                      {item.status ? "Active" : "Inactive"}
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </PermissionAbility>
                {/* Tabs end from here */}
                <PermissionAbility permission="companies_machines_access">
                  <CompanyMachines active={active} companyId={company.id} />
                </PermissionAbility>
                {/* Tabs end from here */}

                <div
                  className="tab-pane fade show"
                  id="advancePayment"
                  role="tabpanel"
                >
                  <div className="card card-xl-stretch mb-xl-10">
                    <CompanyAdvance active={active} companyId={company.id} />
                  </div>
                </div>

                <div
                  className="tab-pane fade show"
                  id="duePayment"
                  role="tabpanel"
                >
                  <div className="card card-xl-stretch mb-xl-10">
                    <DuePayment active={active} companyId={company.id} />
                  </div>
                </div>

                <div className="tab-pane fade show" id="file" role="tabpanel">
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
                  className="tab-pane fade show"
                  id="activities"
                  role="tabpanel"
                >
                  <div className="card card-xl-stretch mb-xl-10">
                    <Activities logName="companies" modelId={id} tab={active} />
                  </div>
                </div>
              </div>
            </div>
          )}
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
  );
};

export default ShowCompany;
