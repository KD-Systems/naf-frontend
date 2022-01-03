import React from "react";
import NavBar from "./NavBar";

const SideMenu = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          id="kt_aside"
          className="aside aside-dark aside-hoverable"
          data-kt-drawer="true"
          data-kt-drawer-name="aside"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '300px': '250px'}"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_aside_mobile_toggle"
        >
          <div className="aside-logo flex-column-auto" id="kt_aside_logo">
            <a href="../../demo1/dist/index.html">
              <img
                alt="Logo"
                src="/assets/media/logos/logo-1-dark.svg"
                className="h-25px logo"
              />
            </a>
            <div
              id="kt_aside_toggle"
              className="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
              data-kt-toggle="true"
              data-kt-toggle-state="active"
              data-kt-toggle-target="body"
              data-kt-toggle-name="aside-minimize"
            >
              <span className="svg-icon svg-icon-1 rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    opacity="0.5"
                    d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z"
                    fill="black"
                  />
                  <path
                    d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="aside-menu flex-column-fluid">
            <div
              className="hover-scroll-overlay-y my-5 my-lg-5"
              id="kt_aside_menu_wrapper"
              data-kt-scroll="true"
              data-kt-scroll-activate="{default: false, lg: true}"
              data-kt-scroll-height="auto"
              data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer"
              data-kt-scroll-wrappers="#kt_aside_menu"
              data-kt-scroll-offset="0"
            >
              <div
                className="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500"
                id="#kt_aside_menu"
                data-kt-menu="true"
              >
                <div className="menu-item">
                  <div className="menu-content pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      Dashboard
                    </span>
                  </div>
                </div>
                <div className="menu-item">
                  <a className="menu-link active" href="!#">
                    <span className="menu-icon">
                      <span className="svg-icon svg-icon-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="9"
                            height="9"
                            rx="2"
                            fill="black"
                          />
                          <rect
                            opacity="0.3"
                            x="13"
                            y="2"
                            width="9"
                            height="9"
                            rx="2"
                            fill="black"
                          />
                          <rect
                            opacity="0.3"
                            x="13"
                            y="13"
                            width="9"
                            height="9"
                            rx="2"
                            fill="black"
                          />
                          <rect
                            opacity="0.3"
                            x="2"
                            y="13"
                            width="9"
                            height="9"
                            rx="2"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="menu-title">Dashboard</span>
                  </a>
                </div>
               
                <div className="menu-item">
                  <div className="menu-content pt-8 pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      User manegement
                    </span>
                  </div>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-users"></i>
                    </span>
                    <span className="menu-title">Employees</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
                <i className="fa fa-sitemap"></i>
                    </span>
                    <span className="menu-title">Depatrments</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-user-shield"></i>
                    </span>
                    <span className="menu-title">Roles</span>
                  </span>
                </div>

                <div className="menu-item">
                  <div className="menu-content pt-8 pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      Customers
                    </span>
                  </div>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-building"></i>
                    </span>
                    <span className="menu-title">Companies</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="bi bi-sticky fs-3"></i>
                    </span>
                    <span className="menu-title">Contracts</span>
                  </span>
                </div>

                <div className="menu-item">
                  <div className="menu-content pt-8 pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      Sales
                    </span>
                  </div>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fab fa-wpforms"></i>
                    </span>
                    <span className="menu-title">Requisitions</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fas fa-money-bill"></i>
                    </span>
                    <span className="menu-title">Quotations</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-credit-card "></i>
                    </span>
                    <span className="menu-title">Invoices</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
						<i className="fa fa-sticky-note"></i>
                    </span>
                    <span className="menu-title">Delivery Notes</span>
                  </span>
                </div>

                <div className="menu-item">
                  <div className="menu-content pt-8 pb-2">
                    <span className="menu-section text-muted text-uppercase fs-8 ls-1">
                      Inventory
                    </span>
                  </div>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
                    <i className="fas fa-warehouse"></i>
                    </span>
                    <span className="menu-title">Ware Houses</span>
                  </span>
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-cogs"></i>
                    </span>
                    <span className="menu-title">Machines</span>
              
                  </span>

             
                </div>

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-tools"></i>
                    </span>
                    <span className="menu-title">Parts</span>
          
                  </span>

                </div>


				

                <div className="menu-item">
                  <div className="menu-content">
                    <div className="separator mx-1 my-2"></div>
                  </div>
                </div>

				<div
                  data-kt-menu-trigger="click"
                  className="menu-item menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
					<i className="fa fa-cog"></i>
                    </span>
                    <span className="menu-title">Settings</span>
          
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mobile aside */}

        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <div id="kt_header" className="header align-items-stretch">
            <div className="container-fluid d-flex align-items-stretch justify-content-between">
              <div
                className="d-flex align-items-center d-lg-none ms-n2 me-2"
                title="Show aside menu"
              >
                <div
                  className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                  id="kt_aside_mobile_toggle"
                >
                  <span className="svg-icon svg-icon-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                <a href="../../demo1/dist/index.html" className="d-lg-none">
                  <img
                    alt="Logo"
                    src="assets/media/logos/logo-2.svg"
                    className="h-30px"
                  />
                </a>
              </div>
              <NavBar />
            </div>
          </div>
          <div
            className="content d-flex flex-column flex-column-fluid"
            id="kt_content"
          >
            <div className="post d-flex flex-column-fluid" id="kt_post">
              <div id="kt_content_container" className="container-xxl">
                <div className="row gy-5 g-xl-8">
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch">
                      <div className="card-header border-0 bg-danger py-5">
                        <h3 className="card-title fw-bolder text-white">
                          Sales Statistics
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-white btn-active-white btn-active-color- border-0 me-n3"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                Payments
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Create Invoice
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="!#"
                                className="menu-link flex-stack px-3"
                              >
                                Create Payment
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify a target name for future usage and reference"
                                ></i>
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Generate Bill
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-end"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">Subscription</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Plans
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Billing
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Statements
                                  </a>
                                </div>
                                <div className="separator my-2"></div>
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input w-30px h-20px"
                                        type="checkbox"
                                        defaultValue="1"
                                        name="notifications"
                                      />
                                      <span className="form-check-label text-muted fs-6">
                                        Recuring
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3 my-1">
                              <a href="!#" className="menu-link px-3">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <div
                          className="mixed-widget-2-chart card-rounded-bottom bg-danger"
                          data-kt-color="danger"
                          style={{ height: "200px" }}
                        ></div>
                        <div className="card-p mt-n20 position-relative">
                          <div className="row g-0">
                            <div className="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
                              <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <rect
                                    x="8"
                                    y="9"
                                    width="3"
                                    height="10"
                                    rx="1.5"
                                    fill="black"
                                  />
                                  <rect
                                    opacity="0.5"
                                    x="13"
                                    y="5"
                                    width="3"
                                    height="14"
                                    rx="1.5"
                                    fill="black"
                                  />
                                  <rect
                                    x="18"
                                    y="11"
                                    width="3"
                                    height="8"
                                    rx="1.5"
                                    fill="black"
                                  />
                                  <rect
                                    x="3"
                                    y="13"
                                    width="3"
                                    height="6"
                                    rx="1.5"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <a
                                href="!#"
                                className="text-warning fw-bold fs-6"
                              >
                                Weekly Sales
                              </a>
                            </div>
                            <div className="col bg-light-primary px-6 py-8 rounded-2 mb-7">
                              <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <a
                                href="!#"
                                className="text-primary fw-bold fs-6"
                              >
                                New Projects
                              </a>
                            </div>
                          </div>
                          <div className="row g-0">
                            <div className="col bg-light-danger px-6 py-8 rounded-2 me-7">
                              <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <a
                                href="!#"
                                className="text-danger fw-bold fs-6 mt-2"
                              >
                                Item Orders
                              </a>
                            </div>
                            <div className="col bg-light-success px-6 py-8 rounded-2">
                              <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                    fill="black"
                                  />
                                  <path
                                    opacity="0.3"
                                    d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                              <a
                                href="!#"
                                className="text-success fw-bold fs-6 mt-2"
                              >
                                Bug Reports
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch">
                      <div className="card-header align-items-center border-0 mt-4">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="fw-bolder mb-2 text-dark">
                            Activities
                          </span>
                          <span className="text-muted fw-bold fs-7">
                            890,344 Sales
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                            data-kt-menu="true"
                            id="kt_menu_61bc33c4f09dc"
                          >
                            <div className="px-7 py-5">
                              <div className="fs-5 text-dark fw-bolder">
                                Filter Options
                              </div>
                            </div>
                            <div className="separator border-gray-200"></div>
                            <div className="px-7 py-5">
                              <div className="mb-10">
                                <label className="form-label fw-bold">
                                  Status:
                                </label>
                                <div>
                                  <select
                                    className="form-select form-select-solid"
                                    data-kt-select2="true"
                                    data-placeholder="Select option"
                                    data-dropdown-parent="#kt_menu_61bc33c4f09dc"
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
                                    <span className="form-check-label">
                                      Author
                                    </span>
                                  </label>
                                  <label className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="2"
                                    />
                                    <span className="form-check-label">
                                      Customer
                                    </span>
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
                                  <label className="form-check-label">
                                    Enabled
                                  </label>
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
                      </div>
                      <div className="card-body pt-5">
                        <div className="timeline-label">
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              08:42
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-warning fs-1"></i>
                            </div>
                            <div className="fw-mormal timeline-content text-muted ps-3">
                              Outlines keep you honest. And keep structure
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              10:00
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-success fs-1"></i>
                            </div>
                            <div className="timeline-content d-flex">
                              <span className="fw-bolder text-gray-800 ps-3">
                                AEOL meeting
                              </span>
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              14:37
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-danger fs-1"></i>
                            </div>
                            <div className="timeline-content fw-bolder text-gray-800 ps-3">
                              Make deposit
                              <a href="!#" className="text-primary">
                                USD 700
                              </a>
                              . to ESL
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              16:50
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-primary fs-1"></i>
                            </div>
                            <div className="timeline-content fw-mormal text-muted ps-3">
                              Indulging in poorly driving and keep structure
                              keep great
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              21:03
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-danger fs-1"></i>
                            </div>
                            <div className="timeline-content fw-bold text-gray-800 ps-3">
                              New order placed
                              <a href="!#" className="text-primary">
                                #XF-2356
                              </a>
                              .
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              16:50
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-primary fs-1"></i>
                            </div>
                            <div className="timeline-content fw-mormal text-muted ps-3">
                              Indulging in poorly driving and keep structure
                              keep great
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              21:03
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-danger fs-1"></i>
                            </div>
                            <div className="timeline-content fw-bold text-gray-800 ps-3">
                              New order placed
                              <a href="!#" className="text-primary">
                                #XF-2356
                              </a>
                              .
                            </div>
                          </div>
                          <div className="timeline-item">
                            <div className="timeline-label fw-bolder text-gray-800 fs-6">
                              10:30
                            </div>
                            <div className="timeline-badge">
                              <i className="fa fa-genderless text-success fs-1"></i>
                            </div>
                            <div className="timeline-content fw-mormal text-muted ps-3">
                              Finance KPI Mobile app launch preparion meeting
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch-50 mb-5 mb-xl-8">
                      <div className="card-body d-flex flex-column p-0">
                        <div className="flex-grow-1 card-p pb-0">
                          <div className="d-flex flex-stack flex-wrap">
                            <div className="me-2">
                              <a
                                href="!#"
                                className="text-dark text-hover-primary fw-bolder fs-3"
                              >
                                Generate Reports
                              </a>
                              <div className="text-muted fs-7 fw-bold">
                                Finance and accounting reports
                              </div>
                            </div>
                            <div className="fw-bolder fs-3 text-primary">
                              $24,500
                            </div>
                          </div>
                        </div>
                        <div
                          className="mixed-widget-7-chart card-rounded-bottom"
                          data-kt-chart-color="primary"
                          style={{ height: "150px" }}
                        ></div>
                      </div>
                    </div>
                    <div className="card card-xl-stretch-50 mb-5 mb-xl-8">
                      <div className="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
                        <div className="d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3">
                          <div className="me-2">
                            <span className="fw-bolder text-gray-800 d-block fs-3">
                              Sales
                            </span>
                            <span className="text-gray-400 fw-bold">
                              Oct 8 - Oct 26 21
                            </span>
                          </div>
                          <div className="fw-bolder fs-3 text-primary">
                            $15,300
                          </div>
                        </div>
                        <div
                          className="mixed-widget-10-chart"
                          data-kt-color="primary"
                          style={{ height: "175px" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-5 g-xl-8">
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch mb-xl-8">
                      <div className="card-header border-0">
                        <h3 className="card-title fw-bolder text-dark">Todo</h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                Payments
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Create Invoice
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="!#"
                                className="menu-link flex-stack px-3"
                              >
                                Create Payment
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify a target name for future usage and reference"
                                ></i>
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Generate Bill
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-end"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">Subscription</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Plans
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Billing
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Statements
                                  </a>
                                </div>
                                <div className="separator my-2"></div>
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input w-30px h-20px"
                                        type="checkbox"
                                        defaultValue="1"
                                        name="notifications"
                                      />
                                      <span className="form-check-label text-muted fs-6">
                                        Recuring
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3 my-1">
                              <a href="!#" className="menu-link px-3">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-2">
                        <div className="d-flex align-items-center mb-8">
                          <span className="bullet bullet-vertical h-40px bg-success"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              Create FireStone Logo
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 2 Days
                            </span>
                          </div>
                          <span className="badge badge-light-success fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                          <span className="bullet bullet-vertical h-40px bg-primary"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              Stakeholder Meeting
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 3 Days
                            </span>
                          </div>
                          <span className="badge badge-light-primary fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                          <span className="bullet bullet-vertical h-40px bg-warning"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              Scoping &amp; Estimations
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 5 Days
                            </span>
                          </div>
                          <span className="badge badge-light-warning fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                          <span className="bullet bullet-vertical h-40px bg-primary"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              KPI App Showcase
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 2 Days
                            </span>
                          </div>
                          <span className="badge badge-light-primary fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                        <div className="d-flex align-items-center mb-8">
                          <span className="bullet bullet-vertical h-40px bg-danger"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              Project Meeting
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 12 Days
                            </span>
                          </div>
                          <span className="badge badge-light-danger fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="bullet bullet-vertical h-40px bg-success"></span>
                          <div className="form-check form-check-custom form-check-solid mx-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-gray-800 text-hover-primary fw-bolder fs-6"
                            >
                              Customers Update
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 1 week
                            </span>
                          </div>
                          <span className="badge badge-light-success fs-8 fw-bolder">
                            New
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder fs-3 mb-1">
                            Members Statistics
                          </span>
                          <span className="text-muted mt-1 fw-bold fs-7">
                            Over 500 members
                          </span>
                        </h3>
                        <div
                          className="card-toolbar"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          data-bs-trigger="hover"
                          title="Click to add a user"
                        >
                          <a
                            href="!#"
                            className="btn btn-sm btn-light btn-active-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_invite_friends"
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
                                  opacity="0.5"
                                  x="11.364"
                                  y="20.364"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(-90 11.364 20.364)"
                                  fill="black"
                                />
                                <rect
                                  x="4.36396"
                                  y="11.364"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="card-body py-3">
                        <div className="table-responsive">
                          <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <thead>
                              <tr className="fw-bolder text-muted">
                                <th className="w-25px">
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue="1"
                                      data-kt-check="true"
                                      data-kt-check-target=".widget-9-check"
                                    />
                                  </div>
                                </th>
                                <th className="min-w-150px">Authors</th>
                                <th className="min-w-140px">Company</th>
                                <th className="min-w-120px">Progress</th>
                                <th className="min-w-100px text-end">
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-9-check"
                                      type="checkbox"
                                      defaultValue="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-45px me-5">
                                      <img
                                        src="assets/media/avatars/150-11.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary fs-6"
                                      >
                                        Ana Simmons
                                      </a>
                                      <span className="text-muted fw-bold text-muted d-block fs-7">
                                        HTML, JS, ReactJS
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="!#"
                                    className="text-dark fw-bolder text-hover-primary d-block fs-6"
                                  >
                                    Intertico
                                  </a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">
                                    Web, UI/UX Design
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex flex-column w-100 me-2">
                                    <div className="d-flex flex-stack mb-2">
                                      <span className="text-muted me-2 fs-7 fw-bold">
                                        50%
                                      </span>
                                    </div>
                                    <div className="progress h-6px w-100">
                                      <div
                                        className="progress-bar bg-primary"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        ariadefaultvaluenow="50"
                                        ariadefaultvaluemin="0"
                                        ariadefaultvaluemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end flex-shrink-0">
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-9-check"
                                      type="checkbox"
                                      defaultValue="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-45px me-5">
                                      <img
                                        src="assets/media/avatars/150-3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary fs-6"
                                      >
                                        Jessie Clarcson
                                      </a>
                                      <span className="text-muted fw-bold text-muted d-block fs-7">
                                        C#, ASP.NET, MS SQL
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="!#"
                                    className="text-dark fw-bolder text-hover-primary d-block fs-6"
                                  >
                                    Agoda
                                  </a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">
                                    Houses &amp; Hotels
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex flex-column w-100 me-2">
                                    <div className="d-flex flex-stack mb-2">
                                      <span className="text-muted me-2 fs-7 fw-bold">
                                        70%
                                      </span>
                                    </div>
                                    <div className="progress h-6px w-100">
                                      <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "70%" }}
                                        ariadefaultvaluenow="70"
                                        ariadefaultvaluemin="0"
                                        ariadefaultvaluemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end flex-shrink-0">
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-9-check"
                                      type="checkbox"
                                      defaultValue="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-45px me-5">
                                      <img
                                        src="assets/media/avatars/150-4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary fs-6"
                                      >
                                        Lebron Wayde
                                      </a>
                                      <span className="text-muted fw-bold text-muted d-block fs-7">
                                        PHP, Laravel, VueJS
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="!#"
                                    className="text-dark fw-bolder text-hover-primary d-block fs-6"
                                  >
                                    RoadGee
                                  </a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">
                                    Transportation
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex flex-column w-100 me-2">
                                    <div className="d-flex flex-stack mb-2">
                                      <span className="text-muted me-2 fs-7 fw-bold">
                                        60%
                                      </span>
                                    </div>
                                    <div className="progress h-6px w-100">
                                      <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: "60%" }}
                                        ariadefaultvaluenow="60"
                                        ariadefaultvaluemin="0"
                                        ariadefaultvaluemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end flex-shrink-0">
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-9-check"
                                      type="checkbox"
                                      defaultValue="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-45px me-5">
                                      <img
                                        src="assets/media/avatars/150-5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary fs-6"
                                      >
                                        Natali Goodwin
                                      </a>
                                      <span className="text-muted fw-bold text-muted d-block fs-7">
                                        Python, PostgreSQL, ReactJS
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="!#"
                                    className="text-dark fw-bolder text-hover-primary d-block fs-6"
                                  >
                                    The Hill
                                  </a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">
                                    Insurance
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex flex-column w-100 me-2">
                                    <div className="d-flex flex-stack mb-2">
                                      <span className="text-muted me-2 fs-7 fw-bold">
                                        50%
                                      </span>
                                    </div>
                                    <div className="progress h-6px w-100">
                                      <div
                                        className="progress-bar bg-warning"
                                        role="progressbar"
                                        style={{ width: "50%" }}
                                        ariadefaultvaluenow="50"
                                        ariadefaultvaluemin="0"
                                        ariadefaultvaluemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end flex-shrink-0">
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input widget-9-check"
                                      type="checkbox"
                                      defaultValue="1"
                                    />
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex align-items-center">
                                    <div className="symbol symbol-45px me-5">
                                      <img
                                        src="assets/media/avatars/150-6.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary fs-6"
                                      >
                                        Kevin Leonard
                                      </a>
                                      <span className="text-muted fw-bold text-muted d-block fs-7">
                                        HTML, JS, ReactJS
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <a
                                    href="!#"
                                    className="text-dark fw-bolder text-hover-primary d-block fs-6"
                                  >
                                    RoadGee
                                  </a>
                                  <span className="text-muted fw-bold text-muted d-block fs-7">
                                    Art Director
                                  </span>
                                </td>
                                <td className="text-end">
                                  <div className="d-flex flex-column w-100 me-2">
                                    <div className="d-flex flex-stack mb-2">
                                      <span className="text-muted me-2 fs-7 fw-bold">
                                        90%
                                      </span>
                                    </div>
                                    <div className="progress h-6px w-100">
                                      <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{ width: "90%" }}
                                        ariadefaultvaluenow="90"
                                        ariadefaultvaluemin="0"
                                        ariadefaultvaluemax="100"
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="d-flex justify-content-end flex-shrink-0">
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                    <a
                                      href="!#"
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
                                    </a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row gy-5 g-xl-8">
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch mb-xl-8">
                      <div className="card-header border-0">
                        <h3 className="card-title fw-bolder text-dark">
                          Authors
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            <div className="separator mb-3 opacity-75"></div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                New Ticket
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                New Customer
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Admin Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Staff Group
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Member Group
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                New Contact
                              </a>
                            </div>
                            <div className="separator mt-3 opacity-75"></div>
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary btn-sm px-4"
                                  href="!#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-2">
                        <div className="d-flex align-items-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <img
                              src="assets/media/avatars/150-1.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-dark fw-bolder text-hover-primary fs-6"
                            >
                              Emma Smith
                            </a>
                            <span className="text-muted d-block fw-bold">
                              Project Manager
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <img
                              src="assets/media/avatars/150-4.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-dark fw-bolder text-hover-primary fs-6"
                            >
                              Sean Bean
                            </a>
                            <span className="text-muted d-block fw-bold">
                              PHP, SQLite, Artisan CLI
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <img
                              src="assets/media/avatars/150-12.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-dark fw-bolder text-hover-primary fs-6"
                            >
                              Brian Cox
                            </a>
                            <span className="text-muted d-block fw-bold">
                              PHP, SQLite, Artisan CLI
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <img
                              src="assets/media/avatars/150-8.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-dark fw-bolder text-hover-primary fs-6"
                            >
                              Francis Mitcham
                            </a>
                            <span className="text-muted d-block fw-bold">
                              PHP, SQLite, Artisan CLI
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="symbol symbol-50px me-5">
                            <img
                              src="assets/media/avatars/150-6.jpg"
                              className=""
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1">
                            <a
                              href="!#"
                              className="text-dark fw-bolder text-hover-primary fs-6"
                            >
                              Dan Wilson
                            </a>
                            <span className="text-muted d-block fw-bold">
                              PHP, SQLite, Artisan CLI
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch mb-xl-8">
                      <div className="card-header border-0">
                        <h3 className="card-title fw-bolder text-dark">
                          Notifications
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                Payments
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Create Invoice
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="!#"
                                className="menu-link flex-stack px-3"
                              >
                                Create Payment
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify a target name for future usage and reference"
                                ></i>
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Generate Bill
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-end"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">Subscription</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Plans
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Billing
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Statements
                                  </a>
                                </div>
                                <div className="separator my-2"></div>
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input w-30px h-20px"
                                        type="checkbox"
                                        defaultValue="1"
                                        name="notifications"
                                      />
                                      <span className="form-check-label text-muted fs-6">
                                        Recuring
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3 my-1">
                              <a href="!#" className="menu-link px-3">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
                          <span className="svg-icon svg-icon-warning me-5">
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                  fill="black"
                                />
                                <path
                                  d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex-grow-1 me-2">
                            <a
                              href="!#"
                              className="fw-bolder text-gray-800 text-hover-primary fs-6"
                            >
                              Group lunch celebration
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 2 Days
                            </span>
                          </div>
                          <span className="fw-bolder text-warning py-1">
                            +28%
                          </span>
                        </div>
                        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
                          <span className="svg-icon svg-icon-success me-5">
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                  fill="black"
                                />
                                <path
                                  d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex-grow-1 me-2">
                            <a
                              href="!#"
                              className="fw-bolder text-gray-800 text-hover-primary fs-6"
                            >
                              Navigation optimization
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 2 Days
                            </span>
                          </div>
                          <span className="fw-bolder text-success py-1">
                            +50%
                          </span>
                        </div>
                        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
                          <span className="svg-icon svg-icon-danger me-5">
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                  fill="black"
                                />
                                <path
                                  d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex-grow-1 me-2">
                            <a
                              href="!#"
                              className="fw-bolder text-gray-800 text-hover-primary fs-6"
                            >
                              Rebrand strategy planning
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 5 Days
                            </span>
                          </div>
                          <span className="fw-bolder text-danger py-1">
                            -27%
                          </span>
                        </div>
                        <div className="d-flex align-items-center bg-light-info rounded p-5">
                          <span className="svg-icon svg-icon-info me-5">
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  opacity="0.3"
                                  d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z"
                                  fill="black"
                                />
                                <path
                                  d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <div className="flex-grow-1 me-2">
                            <a
                              href="!#"
                              className="fw-bolder text-gray-800 text-hover-primary fs-6"
                            >
                              Product goals strategy
                            </a>
                            <span className="text-muted fw-bold d-block">
                              Due in 7 Days
                            </span>
                          </div>
                          <span className="fw-bolder text-info py-1">+8%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4">
                    <div className="card card-xl-stretch mb-5 mb-xl-8">
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder text-dark">
                            Trends
                          </span>
                          <span className="text-muted mt-1 fw-bold fs-7">
                            Latest tech trends
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                Payments
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Create Invoice
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="!#"
                                className="menu-link flex-stack px-3"
                              >
                                Create Payment
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify a target name for future usage and reference"
                                ></i>
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Generate Bill
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-end"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">Subscription</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Plans
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Billing
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Statements
                                  </a>
                                </div>
                                <div className="separator my-2"></div>
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input w-30px h-20px"
                                        type="checkbox"
                                        defaultValue="1"
                                        name="notifications"
                                      />
                                      <span className="form-check-label text-muted fs-6">
                                        Recuring
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3 my-1">
                              <a href="!#" className="menu-link px-3">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body pt-5">
                        <div className="d-flex align-items-sm-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                              <img
                                src="assets/media/svg/brand-logos/plurk.svg"
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="!#"
                                className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                              >
                                Top Authors
                              </a>
                              <span className="text-muted fw-bold d-block fs-7">
                                Mark, Rowling, Esther
                              </span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">
                              +82$
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-sm-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                              <img
                                src="assets/media/svg/brand-logos/telegram.svg"
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="!#"
                                className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                              >
                                Popular Authors
                              </a>
                              <span className="text-muted fw-bold d-block fs-7">
                                Randy, Steve, Mike
                              </span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">
                              +280$
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-sm-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                              <img
                                src="assets/media/svg/brand-logos/vimeo.svg"
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="!#"
                                className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                              >
                                New Users
                              </a>
                              <span className="text-muted fw-bold d-block fs-7">
                                John, Pat, Jimmy
                              </span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">
                              +4500$
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-sm-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                              <img
                                src="assets/media/svg/brand-logos/bebo.svg"
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="!#"
                                className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                              >
                                Active Customers
                              </a>
                              <span className="text-muted fw-bold d-block fs-7">
                                Mark, Rowling, Esther
                              </span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">
                              +686$
                            </span>
                          </div>
                        </div>
                        <div className="d-flex align-items-sm-center mb-7">
                          <div className="symbol symbol-50px me-5">
                            <span className="symbol-label">
                              <img
                                src="assets/media/svg/brand-logos/kickstarter.svg"
                                className="h-50 align-self-center"
                                alt=""
                              />
                            </span>
                          </div>
                          <div className="d-flex align-items-center flex-row-fluid flex-wrap">
                            <div className="flex-grow-1 me-2">
                              <a
                                href="!#"
                                className="text-gray-800 text-hover-primary fs-6 fw-bolder"
                              >
                                Bestseller Theme
                              </a>
                              <span className="text-muted fw-bold d-block fs-7">
                                Disco, Retro, Sports
                              </span>
                            </div>
                            <span className="badge badge-light fw-bolder my-2">
                              +726$
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-5 g-xl-8">
                  <div className="col-xl-4">
                    <div className="card card-xxl-stretch mb-xl-8">
                      <div className="card-header border-0 py-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder fs-3 mb-1">
                            Trends
                          </span>
                          <span className="text-muted fw-bold fs-7">
                            Latest trends
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <button
                            type="button"
                            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            <span className="svg-icon svg-icon-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  stroke="none"
                                  strokeWidth="1"
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <rect
                                    x="5"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                  />
                                  <rect
                                    x="14"
                                    y="5"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="5"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                  <rect
                                    x="14"
                                    y="14"
                                    width="5"
                                    height="5"
                                    rx="1"
                                    fill="#000000"
                                    opacity="0.3"
                                  />
                                </g>
                              </svg>
                            </span>
                          </button>
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                            data-kt-menu="true"
                          >
                            <div className="menu-item px-3">
                              <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                                Payments
                              </div>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Create Invoice
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="!#"
                                className="menu-link flex-stack px-3"
                              >
                                Create Payment
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="Specify a target name for future usage and reference"
                                ></i>
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a href="!#" className="menu-link px-3">
                                Generate Bill
                              </a>
                            </div>
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-end"
                            >
                              <a href="!#" className="menu-link px-3">
                                <span className="menu-title">Subscription</span>
                                <span className="menu-arrow"></span>
                              </a>
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Plans
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Billing
                                  </a>
                                </div>
                                <div className="menu-item px-3">
                                  <a href="!#" className="menu-link px-3">
                                    Statements
                                  </a>
                                </div>
                                <div className="separator my-2"></div>
                                <div className="menu-item px-3">
                                  <div className="menu-content px-3">
                                    <label className="form-check form-switch form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input w-30px h-20px"
                                        type="checkbox"
                                        defaultValue="1"
                                        name="notifications"
                                      />
                                      <span className="form-check-label text-muted fs-6">
                                        Recuring
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="menu-item px-3 my-1">
                              <a href="!#" className="menu-link px-3">
                                Settings
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card-body d-flex flex-column">
                        <div
                          className="mixed-widget-5-chart card-rounded-top"
                          data-kt-chart-color="success"
                          style={{ height: "150px" }}
                        ></div>
                        <div className="mt-5">
                          <div className="d-flex flex-stack mb-5">
                            <div className="d-flex align-items-center me-2">
                              <div className="symbol symbol-50px me-3">
                                <div className="symbol-label bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/plurk.svg"
                                    className="h-50"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <a
                                  href="!#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                >
                                  Top Authors
                                </a>
                                <div className="fs-7 text-muted fw-bold mt-1">
                                  Ricky Hunt, Sandra Trepp
                                </div>
                              </div>
                            </div>
                            <div className="badge badge-light fw-bold py-4 px-3">
                              +82$
                            </div>
                          </div>
                          <div className="d-flex flex-stack mb-5">
                            <div className="d-flex align-items-center me-2">
                              <div className="symbol symbol-50px me-3">
                                <div className="symbol-label bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/figma-1.svg"
                                    className="h-50"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div>
                                <a
                                  href="!#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                >
                                  Top Sales
                                </a>
                                <div className="fs-7 text-muted fw-bold mt-1">
                                  PitStop Emails
                                </div>
                              </div>
                            </div>
                            <div className="badge badge-light fw-bold py-4 px-3">
                              +82$
                            </div>
                          </div>
                          <div className="d-flex flex-stack">
                            <div className="d-flex align-items-center me-2">
                              <div className="symbol symbol-50px me-3">
                                <div className="symbol-label bg-light">
                                  <img
                                    src="assets/media/svg/brand-logos/vimeo.svg"
                                    className="h-50"
                                    alt=""
                                  />
                                </div>
                              </div>
                              <div className="py-1">
                                <a
                                  href="!#"
                                  className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                                >
                                  Top Engagement
                                </a>
                                <div className="fs-7 text-muted fw-bold mt-1">
                                  KT.com
                                </div>
                              </div>
                            </div>
                            <div className="badge badge-light fw-bold py-4 px-3">
                              +82$
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-8">
                    <div className="card card-xxl-stretch mb-5 mb-xl-8">
                      <div className="card-header border-0 pt-5">
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bolder fs-3 mb-1">
                            Latest Products
                          </span>
                          <span className="text-muted mt-1 fw-bold fs-7">
                            More than 400 new products
                          </span>
                        </h3>
                        <div className="card-toolbar">
                          <ul className="nav">
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder px-4 me-1"
                                data-bs-toggle="tab"
                                href="#kt_table_widget_5_tab_1"
                              >
                                Month
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder px-4 me-1"
                                data-bs-toggle="tab"
                                href="#kt_table_widget_5_tab_2"
                              >
                                Week
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-secondary fw-bolder px-4 active"
                                data-bs-toggle="tab"
                                href="#kt_table_widget_5_tab_3"
                              >
                                Day
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="card-body py-3">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade"
                            id="kt_table_widget_5_tab_1"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                <thead>
                                  <tr className="border-0">
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-140px"></th>
                                    <th className="p-0 min-w-110px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/plurk.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Brad Simmons
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Movie Creator
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      React, HTML
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-success">
                                        Approved
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/telegram.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Popular Authors
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Most Successful
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      Python, MySQL
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-warning">
                                        In Progress
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/vimeo.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        New Users
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Awesome Users
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      Laravel,Metronic
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-primary">
                                        Success
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/bebo.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Active Customers
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Movie Creator
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      AngularJS, C#
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-danger">
                                        Rejected
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/kickstarter.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Bestseller Theme
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Best Customers
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      ReactJS, Ruby
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-warning">
                                        In Progress
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="kt_table_widget_5_tab_2"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                <thead>
                                  <tr className="border-0">
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-140px"></th>
                                    <th className="p-0 min-w-110px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/plurk.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Brad Simmons
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Movie Creator
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      React, HTML
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-success">
                                        Approved
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/telegram.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Popular Authors
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Most Successful
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      Python, MySQL
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-warning">
                                        In Progress
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/bebo.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Active Customers
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Movie Creator
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      AngularJS, C#
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-danger">
                                        Rejected
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade show active"
                            id="kt_table_widget_5_tab_3"
                          >
                            <div className="table-responsive">
                              <table className="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4">
                                <thead>
                                  <tr className="border-0">
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-140px"></th>
                                    <th className="p-0 min-w-110px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/kickstarter.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Bestseller Theme
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Best Customers
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      ReactJS, Ruby
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-warning">
                                        In Progress
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/bebo.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Active Customers
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Movie Creator
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      AngularJS, C#
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-danger">
                                        Rejected
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/vimeo.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        New Users
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Awesome Users
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      Laravel,Metronic
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-primary">
                                        Success
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="symbol symbol-45px me-2">
                                        <span className="symbol-label">
                                          <img
                                            src="assets/media/svg/brand-logos/telegram.svg"
                                            className="h-50 align-self-center"
                                            alt=""
                                          />
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <a
                                        href="!#"
                                        className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                                      >
                                        Popular Authors
                                      </a>
                                      <span className="text-muted fw-bold d-block">
                                        Most Successful
                                      </span>
                                    </td>
                                    <td className="text-end text-muted fw-bold">
                                      Python, MySQL
                                    </td>
                                    <td className="text-end">
                                      <span className="badge badge-light-warning">
                                        In Progress
                                      </span>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="!#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                                      >
                                        <span className="svg-icon svg-icon-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                          >
                                            <rect
                                              opacity="0.5"
                                              x="18"
                                              y="13"
                                              width="13"
                                              height="2"
                                              rx="1"
                                              transform="rotate(-180 18 13)"
                                              fill="black"
                                            />
                                            <path
                                              d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                              fill="black"
                                            />
                                          </svg>
                                        </span>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title align-items-start flex-column">
                      <span className="card-label fw-bolder text-dark">
                        My Calendar
                      </span>
                      <span className="text-muted mt-1 fw-bold fs-7">
                        Preview monthly events
                      </span>
                    </h3>
                    <div className="card-toolbar">
                      <a href="!#" className="btn btn-primary">
                        Manage Calendar
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="kt_calendar_widget_1"></div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="kt_modal_add_event"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                      <form
                        className="form"
                        action="#"
                        id="kt_modal_add_event_form"
                      >
                        <div className="modal-header">
                          <h2 className="fw-bolder" data-kt-calendar="title">
                            Add Event
                          </h2>
                          <div
                            className="btn btn-icon btn-sm btn-active-icon-primary"
                            id="kt_modal_add_event_close"
                          >
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.5"
                                  x="6"
                                  y="17.3137"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(-45 6 17.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="7.41422"
                                  y="6"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  transform="rotate(45 7.41422 6)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="modal-body py-10 px-lg-17">
                          <div className="fv-row mb-9">
                            <label className="fs-6 fw-bold required mb-2">
                              Event Name
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="calendar_event_name"
                            />
                          </div>
                          <div className="fv-row mb-9">
                            <label className="fs-6 fw-bold mb-2">
                              Event Description
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="calendar_event_description"
                            />
                          </div>
                          <div className="fv-row mb-9">
                            <label className="fs-6 fw-bold mb-2">
                              Event Location
                            </label>
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder=""
                              name="calendar_event_location"
                            />
                          </div>
                          <div className="fv-row mb-9">
                            <label className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue=""
                                id="kt_calendar_datepicker_allday"
                              />
                              <span
                                className="form-check-label fw-bold"
                                htmlFor="kt_calendar_datepicker_allday"
                              >
                                All Day
                              </span>
                            </label>
                          </div>
                          <div className="row row-cols-lg-2 g-10">
                            <div className="col">
                              <div className="fv-row mb-9">
                                <label className="fs-6 fw-bold mb-2 required">
                                  Event Start Date
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  name="calendar_event_start_date"
                                  placeholder="Pick a start date"
                                  id="kt_calendar_datepicker_start_date"
                                />
                              </div>
                            </div>
                            <div className="col" data-kt-calendar="datepicker">
                              <div className="fv-row mb-9">
                                <label className="fs-6 fw-bold mb-2">
                                  Event Start Time
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  name="calendar_event_start_time"
                                  placeholder="Pick a start time"
                                  id="kt_calendar_datepicker_start_time"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row row-cols-lg-2 g-10">
                            <div className="col">
                              <div className="fv-row mb-9">
                                <label className="fs-6 fw-bold mb-2 required">
                                  Event End Date
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  name="calendar_event_end_date"
                                  placeholder="Pick a end date"
                                  id="kt_calendar_datepicker_end_date"
                                />
                              </div>
                            </div>
                            <div className="col" data-kt-calendar="datepicker">
                              <div className="fv-row mb-9">
                                <label className="fs-6 fw-bold mb-2">
                                  Event End Time
                                </label>
                                <input
                                  className="form-control form-control-solid"
                                  name="calendar_event_end_time"
                                  placeholder="Pick a end time"
                                  id="kt_calendar_datepicker_end_time"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer flex-center">
                          <button
                            type="reset"
                            id="kt_modal_add_event_cancel"
                            className="btn btn-light me-3"
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            id="kt_modal_add_event_submit"
                            className="btn btn-primary"
                          >
                            <span className="indicator-label">Submit</span>
                            <span className="indicator-progress">
                              Please wait...
                              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                            </span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id="kt_modal_view_event"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered mw-650px">
                    <div className="modal-content">
                      <div className="modal-header border-0 justify-content-end">
                        <div
                          className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-primary me-2"
                          data-bs-toggle="tooltip"
                          data-bs-dismiss="click"
                          title="Edit Event"
                          id="kt_modal_view_event_edit"
                        >
                          <span className="svg-icon svg-icon-2">
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
                        </div>
                        <div
                          className="btn btn-icon btn-sm btn-color-gray-400 btn-active-icon-danger me-2"
                          data-bs-toggle="tooltip"
                          data-bs-dismiss="click"
                          title="Delete Event"
                          id="kt_modal_view_event_delete"
                        >
                          <span className="svg-icon svg-icon-2">
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
                        </div>
                        <div
                          className="btn btn-icon btn-sm btn-color-gray-500 btn-active-icon-primary"
                          data-bs-toggle="tooltip"
                          title="Hide Event"
                          data-bs-dismiss="modal"
                        >
                          <span className="svg-icon svg-icon-1">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x="6"
                                y="17.3137"
                                width="16"
                                height="2"
                                rx="1"
                                transform="rotate(-45 6 17.3137)"
                                fill="black"
                              />
                              <rect
                                x="7.41422"
                                y="6"
                                width="16"
                                height="2"
                                rx="1"
                                transform="rotate(45 7.41422 6)"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className="modal-body pt-0 pb-20 px-lg-17">
                        <div className="d-flex">
                          <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                fill="black"
                              />
                              <path
                                d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                fill="black"
                              />
                              <path
                                d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <div className="mb-9">
                            <div className="d-flex align-items-center mb-2">
                              <span
                                className="fs-3 fw-bolder me-3"
                                data-kt-calendar="event_name"
                              ></span>
                              <span
                                className="badge badge-light-success"
                                data-kt-calendar="all_day"
                              ></span>
                            </div>
                            <div
                              className="fs-6"
                              data-kt-calendar="event_description"
                            ></div>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <span className="svg-icon svg-icon-1 svg-icon-success me-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle fill="#000000" cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <div className="fs-6">
                            <span className="fw-bolder">Starts</span>
                            <span data-kt-calendar="event_start_date"></span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-9">
                          <span className="svg-icon svg-icon-1 svg-icon-danger me-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              version="1.1"
                            >
                              <circle fill="#000000" cx="12" cy="12" r="8" />
                            </svg>
                          </span>
                          <div className="fs-6">
                            <span className="fw-bolder">Ends</span>
                            <span data-kt-calendar="event_end_date"></span>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="svg-icon svg-icon-1 svg-icon-muted me-5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
                                fill="black"
                              />
                              <path
                                d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                          <div
                            className="fs-6"
                            data-kt-calendar="event_location"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
            <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
              <div className="text-dark order-2 order-md-1">
                <span className="text-muted fw-bold me-1">2021©</span>
                <a
                  href="!#"
                  target="_blank"
                  className="text-gray-800 text-hover-primary"
                >
                  Naf Inventory
                </a>
              </div>
              <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                <li className="menu-item">
                  <a href="!#" target="_blank" className="menu-link px-2">
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a href="!#" target="_blank" className="menu-link px-2">
                    Support
                  </a>
                </li>
                <li className="menu-item">
                  <a href="!#" target="_blank" className="menu-link px-2">
                    Purchase
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* end Mobile aside */}
      </div>
    </div>
  );
};

export default SideMenu;
