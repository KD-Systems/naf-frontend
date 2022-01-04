import React from "react";
import { Link } from "react-router-dom";
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
            <Link to="/login">
              <img
                alt="Logo"
                src="/assets/media/logos/logo-1-dark.svg"
                className="h-25px logo"
              />
            </Link>
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
                  <Link className="menu-link active" to="/">
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
                  </Link>
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
        </div>

        {/* end Mobile aside */}
      </div>
    </div>
  );
};

export default SideMenu;
