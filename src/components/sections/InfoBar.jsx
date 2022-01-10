import React from "react";
import { Link } from "react-router-dom";

const InfoBar = () => {
  return (
    <div className="d-flex align-items-stretch flex-shrink-0">
      <div className="d-flex align-items-stretch flex-shrink-0">
        <div className="d-flex align-items-center ms-1 ms-lg-3">
          <div
            className="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
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
                  d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z"
                  fill="#000000"
                />
                <rect
                  fill="#000000"
                  opacity="0.3"
                  x="10"
                  y="16"
                  width="4"
                  height="4"
                  rx="2"
                />
              </svg>
            </span>
            <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
          </div>

          <div
            className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px"
            data-kt-menu="true"
          >
            <div
              className="d-flex flex-column bgi-no-repeat rounded-top"
              style={{
                backgroundImage: "url('/assets/media/misc/pattern-1.jpg')",
              }}
            >
              <h3 className="text-white fw-bold px-9 mt-10 mb-6">
                Notifications
              </h3>

              <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                <li className="nav-item">
                  <a
                    className="nav-link text-white opacity-75 opacity-state-100 pb-4 active"
                    data-bs-toggle="tab"
                    href="#kt_topbar_notifications_1"
                  >
                    Alerts
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white opacity-75 opacity-state-100 pb-4"
                    data-bs-toggle="tab"
                    href="#kt_topbar_notifications_3"
                  >
                    Logs
                  </a>
                </li>
              </ul>
            </div>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="kt_topbar_notifications_1"
                role="tabpanel"
              >
                <div className="scroll-y mh-325px my-5 px-8">
                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <span className="svg-icon svg-icon-2 svg-icon-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z"
                                fill="black"
                              ></path>
                              <path
                                d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Project Alice
                        </a>
                        <div className="text-gray-400 fs-7">
                          Phase 1 development
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">1 hr</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-danger">
                          <span className="svg-icon svg-icon-2 svg-icon-danger">
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
                                rx="10"
                                fill="black"
                              ></rect>
                              <rect
                                x="11"
                                y="14"
                                width="7"
                                height="2"
                                rx="1"
                                transform="rotate(-90 11 14)"
                                fill="black"
                              ></rect>
                              <rect
                                x="11"
                                y="17"
                                width="2"
                                height="2"
                                rx="1"
                                transform="rotate(-90 11 17)"
                                fill="black"
                              ></rect>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          HR Confidential
                        </a>
                        <div className="text-gray-400 fs-7">
                          Confidential staff documents
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">2 hrs</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-warning">
                          <span className="svg-icon svg-icon-2 svg-icon-warning">
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
                              ></path>
                              <path
                                d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Company HR
                        </a>
                        <div className="text-gray-400 fs-7">
                          Corporeate staff profiles
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">5 hrs</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-success">
                          <span className="svg-icon svg-icon-2 svg-icon-success">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z"
                                fill="black"
                              ></path>
                              <path
                                d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z"
                                fill="black"
                              ></path>
                              <path
                                opacity="0.3"
                                d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z"
                                fill="black"
                              ></path>
                              <path
                                d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Project Redux
                        </a>
                        <div className="text-gray-400 fs-7">
                          New frontend admin theme
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">2 days</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-primary">
                          <span className="svg-icon svg-icon-2 svg-icon-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z"
                                fill="black"
                              ></path>
                              <path
                                d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Project Breafing
                        </a>
                        <div className="text-gray-400 fs-7">
                          Product launch status update
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">21 Jan</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-info">
                          <span className="svg-icon svg-icon-2 svg-icon-info">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z"
                                fill="black"
                              ></path>
                              <path
                                d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Banner Assets
                        </a>
                        <div className="text-gray-400 fs-7">
                          Collection of banner images
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">21 Jan</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px me-4">
                        <span className="symbol-label bg-light-warning">
                          <span className="svg-icon svg-icon-2 svg-icon-warning">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="25"
                              viewBox="0 0 24 25"
                              fill="none"
                            >
                              <path
                                opacity="0.3"
                                d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z"
                                fill="black"
                              ></path>
                              <path
                                d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z"
                                fill="black"
                              ></path>
                            </svg>
                          </span>
                        </span>
                      </div>

                      <div className="mb-0 me-2">
                        <a
                          href="!#"
                          className="fs-6 text-gray-800 text-hover-primary fw-bolder"
                        >
                          Icon Assets
                        </a>
                        <div className="text-gray-400 fs-7">
                          Collection of SVG icons
                        </div>
                      </div>
                    </div>

                    <span className="badge badge-light fs-8">20 March</span>
                  </div>
                </div>

                <div className="py-3 text-center border-top">
                  <a
                    href="../../demo1/dist/pages/profile/activity.html"
                    className="btn btn-color-gray-600 btn-active-color-primary"
                  >
                    View All
                    <span className="svg-icon svg-icon-5">
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
                        ></rect>
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>

              <div
                className="tab-pane fade"
                id="kt_topbar_notifications_3"
                role="tabpanel"
              >
                <div className="scroll-y mh-325px my-5 px-8">
                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-success me-4">
                        200 OK
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        New order
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Just now</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-danger me-4">
                        500 ERR
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        New customer
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">2 hrs</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-success me-4">
                        200 OK
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Payment process
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">5 hrs</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-warning me-4">
                        300 WRN
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Search query
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">2 days</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-success me-4">
                        200 OK
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        API connection
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">1 week</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-success me-4">
                        200 OK
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Database restore
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Mar 5</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-warning me-4">
                        300 WRN
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        System update
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">May 15</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-warning me-4">
                        300 WRN
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Server OS update
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Apr 3</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-warning me-4">
                        300 WRN
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        API rollback
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Jun 30</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-danger me-4">
                        500 ERR
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Refund process
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Jul 10</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-danger me-4">
                        500 ERR
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Withdrawal process
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Sep 10</span>
                  </div>

                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center me-2">
                      <span className="w-70px badge badge-light-danger me-4">
                        500 ERR
                      </span>

                      <a
                        href="!#"
                        className="text-gray-800 text-hover-primary fw-bold"
                      >
                        Mail tasks
                      </a>
                    </div>

                    <span className="badge badge-light fs-8">Dec 10</span>
                  </div>
                </div>

                <div className="py-3 text-center border-top">
                  <a
                    href="../../demo1/dist/pages/profile/activity.html"
                    className="btn btn-color-gray-600 btn-active-color-primary"
                  >
                    View All
                    <span className="svg-icon svg-icon-5">
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
                        ></rect>
                        <path
                          d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex align-items-center ms-1 ms-lg-3">
          <div className="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px">
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
                  d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                  fill="black"
                ></path>
                <rect
                  x="6"
                  y="12"
                  width="7"
                  height="2"
                  rx="1"
                  fill="black"
                ></rect>
                <rect
                  x="6"
                  y="7"
                  width="12"
                  height="2"
                  rx="1"
                  fill="black"
                ></rect>
              </svg>
            </span>
          </div>
        </div>

        <div
          className="d-flex align-items-center ms-1 ms-lg-3"
          id="kt_header_user_menu_toggle"
        >
          <div
            className="cursor-pointer symbol symbol-30px symbol-md-40px"
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
          >
            <span className="symbol-label" style={{ backgroundImage: "url(assets/media//stock/ecommerce/3.gif)" }}></span>
          </div>

          <div
            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
            data-kt-menu="true"
          >
            <div className="menu-item px-3">
              <div className="menu-content d-flex align-items-center px-3">
                <div className="symbol symbol-50px me-5">
                  <span className="symbol-label" style={{ backgroundImage: "url(assets/media//stock/ecommerce/3.gif)" }}></span>
                </div>

                <div className="d-flex flex-column">
                  <div className="fw-bolder d-flex align-items-center">
                    Safil Nawaz Chowdhury
                  </div>
                  <a
                    href="!#"
                    className="fw-bold text-muted text-hover-primary fs-7"
                  >
                    safil@nafgroup.com
                  </a>
                </div>
              </div>
            </div>

            <div className="separator my-2"></div>

            <div className="menu-item px-5">
              <Link to="/panel/profile/" className="menu-link px-5">
                My Profile
              </Link>
            </div>

            <div className="menu-item px-5 my-1">
              <Link to="/panel/profile/settings" className="menu-link px-5">
                Account Settings
              </Link>
            </div>

            <div className="menu-item px-5">
              <Link to="/login" className="menu-link px-5">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
