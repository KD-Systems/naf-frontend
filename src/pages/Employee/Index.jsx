import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import CreateEmployee from "./Create";
const Employee = () => {
  const [action, setAction] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getEmployees = async () => {
    setEmployees(await EmployeeService.getAll());
  };
  useEffect(() => {
    getEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you want to do it?")) return false;

    await EmployeeService.remove(id);
    getEmployees();
    setAction(false);
    console.log(id);
  };

  return (
    <div
      className="content d-flex flex-column flex-column-fluid"
      id="kt_content"
    >
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div className="card card-flush">
            <div className="card-header align-items-center py-5 gap-2 gap-md-5">
              <div className="card-title">
                <div className="d-flex align-items-center position-relative my-1">
                  <span className="svg-icon svg-icon-1 position-absolute ms-4">
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
                      />
                      <path
                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                        fill="black"
                      />
                    </svg>
                  </span>

                  <input
                    type="text"
                    data-kt-ecommerce-product-filter="search"
                    className="form-control form-control-solid w-250px ps-14"
                    placeholder="Search Employee"
                  />
                </div>
              </div>

              <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <Link
                  to="#"
                  className="btn btn-light-primary btn-md"
                  onClick={() => {
                    onOpenModal();
                  }}
                >
                  Add Employee
                </Link>
              </div>
            </div>

            <div className="card-body pt-0">
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id=""
              >
                <thead>
                  <tr className="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                    <th className="w-10px pe-2">
                      <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          data-kt-check="true"
                          data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                          value="1"
                        />
                      </div>
                    </th>
                    <th className="min-w-100px">Name</th>
                    <th className="min-w-50px">Id</th>
                    <th className="min-w-70px">Designation</th>
                    <th className="min-w-100px">Role</th>
                    <th className="min-w-100px">Status</th>
                    <th className="min-w-70px">Actions</th>
                  </tr>
                </thead>

                <tbody className="fw-bold text-gray-600">
                  {employees.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check form-check-sm form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value="1"
                          />
                        </div>
                      </td>

                      <td>
                        <div className="d-flex align-items-center">
                          <Link to="#" className="symbol symbol-50px">
                            <span
                              className="symbol-label"
                              style={{
                                backgroundImage:
                                  "url(assets/media//stock/ecommerce/1.gif)",
                              }}
                            ></span>
                          </Link>

                          <div className="ms-5">
                            <Link
                              to="#"
                              className="text-gray-800 text-hover-primary fs-5 fw-bolder"
                              data-kt-ecommerce-product-filter="product_name"
                            >
                              {item?.user?.name}
                            </Link>
                          </div>
                        </div>
                      </td>

                      <td className="pe-0">
                        <span className="fw-bolder"># {item?.id}</span>
                      </td>

                      <td className="pe-0" data-order="32">
                        <span className="fw-bolder ms-3">
                          {item?.designation?.name}
                        </span>
                      </td>

                      <td className="pe-0" data-order="32">
                        <span className="fw-bolder ms-3">Administration</span>
                      </td>

                      <td className="pe-0" data-order="Scheduled">
                        <div
                          className={
                            item?.user?.status == "active"
                              ? "badge badge-light-success"
                              : "badge badge-light-danger"
                          }
                        >
                          {item?.user?.status == "active"
                            ? "active"
                            : "inactive"}
                        </div>
                      </td>

                      <td>
                        <button
                          className="btn btn-sm btn-light btn-active-light-primary"
                          style={{ position: "relative" }}
                          data-kt-menu-trigger="click"
                          data-kt-menu-placement="bottom-end"
                          onClick={() => setAction(!action)}
                        >
                          Actions
                          <span className="svg-icon svg-icon-5 m-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </button>
                        {action ? (
                          <>
                            <div
                              className="menu  menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4 "
                              style={{
                                position: "absolute",
                                background: "white",
                                boxShadow:
                                  "-2px -1px 42px -11px rgba(158,156,156,0.7)",
                                transition: "height .4s ease",
                                zIndex: "1000",
                              }}
                              data-kt-menu="true"
                            >
                              <div className="menu-item px-3">
                                <Link to="#" className="menu-link px-3">
                                  Edit
                                </Link>
                              </div>

                              <div className="menu-item px-3">
                                <Link
                                  to="#"
                                  className="menu-link px-3"
                                  data-kt-ecommerce-product-filter="delete_row"
                                  onClick={() => deleteEmployee(item.id)}
                                >
                                  Delete
                                </Link>
                              </div>
                            </div>
                          </>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <CreateEmployee
        open={open}
        onCloseModal={onCloseModal}
        getEmployees={getEmployees}
      />
    </div>
  );
};

export default Employee;
