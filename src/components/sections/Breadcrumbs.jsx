import React from 'react'

const Breadcrumbs = () => {
    return (
<div className="toolbar" id="kt_toolbar">
              <div
                id="kt_toolbar_container"
                className="container-fluid d-flex flex-stack"
              >
                <div
                  data-kt-swapper="true"
                  data-kt-swapper-mode="prepend"
                  data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                  className="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0"
                >
                  <h1 className="d-flex align-items-center text-dark fw-bolder fs-3 my-1">
                    Dashboard
                    <span className="h-20px border-gray-200 border-start ms-3 mx-2"></span>
                    <small className="text-muted fs-7 fw-bold my-1 ms-1">
                      #XRS-45670
                    </small>
                  </h1>
                </div>
                <div className="d-flex align-items-center py-1">
                  <div className="me-3">
                    <a
                      href="!#"
                      className="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <span className="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_61bc33c4ee0dc"
                    >
                      <div className="px-7 py-5">
                        <div className="fs-5 text-dark fw-bolder">
                          Filter Options
                        </div>
                      </div>
                      <div className="separator border-gray-200"></div>
                      <div className="px-7 py-5">
                        <div className="mb-10">
                          <label className="form-label fw-bold">Status:</label>
                          <div>
                            <select
                              className="form-select form-select-solid"
                              data-kt-select2="true"
                              data-placeholder="Select option"
                              data-dropdown-parent="#kt_menu_61bc33c4ee0dc"
                              data-allow-clear="true"
                            >
                              <option></option>
                              <option defaultValue="1">Approved</option>
                              <option defaultValue="2">Pending</option>
                              <option defaultValue="2">In Process</option>
                              <option defaultValue="2">Rejected</option>
                            </select>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-bold">
                            Member Type:
                          </label>
                          <div className="d-flex">
                            <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="1"
                              />
                              <span className="form-check-label">Author</span>
                            </label>
                            <label className="form-check form-check-sm form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue="2"
                                
                              />
                              <span className="form-check-label">Customer</span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-10">
                          <label className="form-label fw-bold">
                            Notifications:
                          </label>
                          <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                              name="notifications"
                              
                            />
                            <label className="form-check-label">Enabled</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="reset"
                            className="btn btn-sm btn-light btn-active-light-primary me-2"
                            data-kt-menu-dismiss="true"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="btn btn-sm btn-primary"
                            data-kt-menu-dismiss="true"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    href="!#"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_create_app"
                    id="kt_toolbar_primary_button"
                  >
                    Create
                  </a>
                </div>
              </div>
            </div>
    )
}

export default Breadcrumbs
