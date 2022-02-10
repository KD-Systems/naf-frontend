import Confirmation from "components/utils/Confirmation";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyService from "services/CompanyService";
import CreateCompany from "./Create";
import EditCompany from "./Edit";

const Companies = () => {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [companyId, setcompanyId] = useState("");
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
    setOpenCreate(false);
  };

  const getCompanies = async () => {
    setCompanies(await CompanyService.getAll());
  };

  const deleteCompany = async (id) => {
    if (window.confirm("Are you sure want to delete?"))
      await CompanyService.remove(id);
    getCompanies();
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card mb-5 mb-xl-8">
            <div className="card-header mt-6">
              <div className="card-title">
                {/* <div className="d-flex align-items-center position-relative my-1 me-5">
                  <span className="svg-icon svg-icon-1 position-absolute ms-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x="17.0365"
                        y="15.1223"
                        width="8.15546"
                        height="2"
                        rx="1"
                        transform="rotate(45 17.0365 15.1223)"
                        fill="black"
                      ></rect>
                      <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="black"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control form-control-solid w-250px ps-15"
                    placeholder="Search Companies"
                  />
                </div> */}
              </div>
              <div className="card-toolbar">
                <button
                  type="button"
                  className="btn btn-light-primary"
                  onClick={() => {
                    setOpenCreate(true);
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
                  Add Company
                </button>
              </div>
            </div>

            <div className="card-body py-3">
              <div className="table-responsive">
                <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                  <thead>
                    <tr className="fw-bolder text-muted">
                      <th className="min-w-150px">Name</th>
                      <th className="min-w-120px">Group of Company</th>
                      <th className="min-w-120px">Factory Types</th>
                      <th className="min-w-50px">Contract Status</th>
                      <th className="min-w-100px text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {companies?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50px me-5">
                              <span className="symbol-label bg-light">
                                <img
                                  src={item.logo}
                                  className="h-75 overflow-hidden"
                                  alt=""
                                />
                              </span>
                            </div>
                            <div className="d-flex justify-content-start flex-column">
                              <Link
                                to={'/panel/companies/' + item.id}
                                className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                              >
                                {item.name}
                              </Link>
                              <span className="text-muted fw-bold text-muted d-block fs-7">
                                {item.company_group ?? '--'}
                              </span>
                            </div>
                          </div>
                        </td>

                        <td>
                          {item.company_group}
                        </td>

                        <td>
                          {item.machine_types}
                        </td>

                        <td>
                          <div
                            className={
                              item.status === 1
                                ? "badge badge-light-success"
                                : "badge badge-light-danger"
                            }
                          >
                            {item.status === 1
                              ? "Active"
                              : "Inactive"}
                          </div>
                        </td>

                        <td className="text-center">
                          <Link
                            to={'/panel/companies/' + item.id}
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                          >
                            <i className="fa fa-eye"></i>
                          </Link>
                          <button
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                              setOpen(true);
                              setcompanyId(item.id);
                            }}
                          >
                            <i className="fa fa-pen"></i>
                          </button>
                          <button
                            onClick={() => {
                              setConfirmDelete(true)
                              setcompanyId(item.id);
                            }}
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
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

      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteCompany(companyId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />

      <EditCompany
        open={open}
        companyId={companyId}
        onCloseModal={onCloseModal}
        onUpdate={getCompanies}
      />
      <CreateCompany
        open={openCreate}
        onCloseModal={onCloseModal}
        onCreate={getCompanies}
      />
    </>
  );
};

export default Companies;
