import React from "react";
import { Link } from "react-router-dom";

const Employee = () => {
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
                <div className="w-100 mw-150px">
                  <select
                    className="form-select form-select-solid"
                    data-control="select2"
                    data-hide-search="true"
                    data-placeholder="Status"
                    data-kt-ecommerce-product-filter="status"
                  >
                    <option></option>
                    <option value="all">All</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>

                <Link
                  to="../../demo1/dist/apps/ecommerce/catalog/add-product.html"
                  className="btn btn-primary"
                >
                  Add Employee
                </Link>
              </div>
            </div>

            <div className="card-body pt-0">
              <table
                className="table align-middle table-row-dashed fs-6 gy-5"
                id="kt_ecommerce_products_table"
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
                  <tr>
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
                            Safil Nawaz Chowdhury
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="pe-0">
                      <span className="fw-bolder">#1</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Deputy Managing Director</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Administration</span>
                    </td>

                    <td className="pe-0" data-order="Scheduled">
                      <div className="badge badge-light-success">Active</div>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
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
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
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
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                            Mahzabien Chowdhury
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="pe-0">
                      <span className="fw-bolder">#2</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Sales Manager</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Sales</span>
                    </td>

                    <td className="pe-0" data-order="Scheduled">
                      <div className="badge badge-light-success">Active</div>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
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
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
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
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                            Mirza Bashir
                          </Link>
                        </div>
                      </div>
                    </td>

                    <td className="pe-0">
                      <span className="fw-bolder">#3</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Marketing Officer</span>
                    </td>

                    <td className="pe-0" data-order="32">
                      <span className="fw-bolder ms-3">Marketing</span>
                    </td>

                    <td className="pe-0" data-order="Scheduled">
                      <div className="badge badge-light-danger">Inactive</div>
                    </td>

                    <td>
                      <button
                        className="btn btn-sm btn-light btn-active-light-primary"
                        data-kt-menu-trigger="click"
                        data-kt-menu-placement="bottom-end"
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
                        <div
                          className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
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
                            >
                              Delete
                            </Link>
                          </div>
                        </div>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
