import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CompanyService from "services/CompanyService";
import CreateCompany from "./Create";
import EditCompany from "./Edit";

const Companies = () => {
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
                            <span className="svg-icon svg-icon-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                                  fill="black"
                                />
                                <path
                                  opacity="0.3"
                                  d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </Link>
                          <button
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                            onClick={() => {
                              setOpen(true);
                              setcompanyId(item.id);
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
                                <path
                                  opacity="0.3"
                                  d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z"
                                  fill="black"
                                />
                                <path
                                  d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </button>
                          <button
                            onClick={() => {
                              deleteCompany(item.id);
                            }}
                            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                          >
                            <span className="svg-icon svg-icon-3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
                                  fill="black"
                                />
                                <path
                                  opacity="0.5"
                                  d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
                                  fill="black"
                                />
                                <path
                                  opacity="0.5"
                                  d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
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
