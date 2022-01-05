import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10">
                <div class="card-body pt-9 pb-0">
                    <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
                        <div class="me-7 mb-4">
                            <div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
                                <img src="/assets/media/avatars/150-26.jpg" alt="" />
                                <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                <div class="d-flex flex-column">
                                    <div class="d-flex align-items-center mb-2">
                                        <a
                                            href="!#"
                                            class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1"
                                        >
                                            Max Smith
                                        </a>
                                    </div>
                                    <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                                        <a href="!#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">

                                            <span class="svg-icon svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                                    <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                                </svg>
                                            </span>

                                            Designation
                                        </a>

                                        <a href="!#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">

                                            <span class="svg-icon svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                    <path d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z" fill="#000000" fill-rule="nonzero" opacity="0.3" />
                                                    <path d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z" fill="#000000" fill-rule="nonzero" />
                                                </svg>
                                            </span>
                                            Department
                                        </a>

                                        <a href="!#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">

                                            <span class="svg-icon svg-icon-4 me-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
                                                    <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex flex-wrap flex-stack">
                                <div class="d-flex flex-column flex-grow-1 pe-8">
                                    <div class="d-flex flex-wrap">
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div class="d-flex align-items-center">
                                                <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            opacity="0.5"
                                                            x="13"
                                                            y="6"
                                                            width="13"
                                                            height="2"
                                                            rx="1"
                                                            transform="rotate(90 13 6)"
                                                            fill="black"
                                                        ></rect>
                                                        <path
                                                            d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <div
                                                    class="fs-2 fw-bolder counted"
                                                    data-kt-countup="true"
                                                    data-kt-countup-value="4500"
                                                    data-kt-countup-prefix="$"
                                                >
                                                    $4,500
                                                </div>
                                            </div>
                                            <div class="fw-bold fs-6 text-gray-400">Earnings</div>
                                        </div>
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div class="d-flex align-items-center">
                                                <span class="svg-icon svg-icon-3 svg-icon-danger me-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            opacity="0.5"
                                                            x="11"
                                                            y="18"
                                                            width="13"
                                                            height="2"
                                                            rx="1"
                                                            transform="rotate(-90 11 18)"
                                                            fill="black"
                                                        ></rect>
                                                        <path
                                                            d="M11.4343 15.4343L7.25 11.25C6.83579 10.8358 6.16421 10.8358 5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75L11.2929 18.2929C11.6834 18.6834 12.3166 18.6834 12.7071 18.2929L18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25C17.8358 10.8358 17.1642 10.8358 16.75 11.25L12.5657 15.4343C12.2533 15.7467 11.7467 15.7467 11.4343 15.4343Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <div
                                                    class="fs-2 fw-bolder counted"
                                                    data-kt-countup="true"
                                                    data-kt-countup-value="75"
                                                >
                                                    75
                                                </div>
                                            </div>
                                            <div class="fw-bold fs-6 text-gray-400">Projects</div>
                                        </div>
                                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                            <div class="d-flex align-items-center">
                                                <span class="svg-icon svg-icon-3 svg-icon-success me-2">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="24"
                                                        height="24"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                    >
                                                        <rect
                                                            opacity="0.5"
                                                            x="13"
                                                            y="6"
                                                            width="13"
                                                            height="2"
                                                            rx="1"
                                                            transform="rotate(90 13 6)"
                                                            fill="black"
                                                        ></rect>
                                                        <path
                                                            d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                                                            fill="black"
                                                        ></path>
                                                    </svg>
                                                </span>
                                                <div
                                                    class="fs-2 fw-bolder counted"
                                                    data-kt-countup="true"
                                                    data-kt-countup-value="60"
                                                    data-kt-countup-prefix="%"
                                                >
                                                    %60
                                                </div>
                                            </div>
                                            <div class="fw-bold fs-6 text-gray-400">
                                                Success Rate
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center w-200px w-sm-300px flex-column mt-3">
                                    {/* Right side data */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                        <li class="nav-item mt-2">
                            <Link
                                class="nav-link text-active-primary ms-0 me-10 py-5 active"
                                to="/profile"
                            >
                                Overview
                            </Link>
                        </li>
                        <li class="nav-item mt-2">
                            <Link
                                class="nav-link text-active-primary ms-0 me-10 py-5"
                                to="/profile/settings"
                            >
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div class="card-header cursor-pointer">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Profile Details</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Full Name</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">Max Smith</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Designation</label>
                        <div class="col-lg-8 fv-row">
                            <span class="fw-bold text-gray-800 fs-6">--</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">
                            Contact Phone
                            <i
                                class="fas fa-exclamation-circle ms-1 fs-7"
                                data-bs-toggle="tooltip"
                                title=""
                                data-bs-original-title="Phone number must be active"
                                aria-label="Phone number must be active"
                            ></i>
                        </label>
                        <div class="col-lg-8 d-flex align-items-center">
                            <span class="fw-bolder fs-6 text-gray-800 me-2">
                                044 3276 454 935
                            </span>
                            <span class="badge badge-success">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gy-5 gx-xl-10">
                <div class="col-xl-12">
                    <div class="card card-xl-stretch mb-xl-10">
                        <div class="card-header align-items-center border-0 mt-4">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="fw-bolder mb-2 text-dark">Activities</span>
                                <span class="text-muted fw-bold fs-7">890,344 Sales</span>
                            </h3>
                            <div class="card-toolbar">
                                <button
                                    type="button"
                                    class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
                                    data-kt-menu-trigger="click"
                                    data-kt-menu-placement="bottom-end"
                                >
                                    <span class="svg-icon svg-icon-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 24 24"
                                        >
                                            <g
                                                stroke="none"
                                                stroke-width="1"
                                                fill="none"
                                                fill-rule="evenodd"
                                            >
                                                <rect
                                                    x="5"
                                                    y="5"
                                                    width="5"
                                                    height="5"
                                                    rx="1"
                                                    fill="#000000"
                                                ></rect>
                                                <rect
                                                    x="14"
                                                    y="5"
                                                    width="5"
                                                    height="5"
                                                    rx="1"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                ></rect>
                                                <rect
                                                    x="5"
                                                    y="14"
                                                    width="5"
                                                    height="5"
                                                    rx="1"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                ></rect>
                                                <rect
                                                    x="14"
                                                    y="14"
                                                    width="5"
                                                    height="5"
                                                    rx="1"
                                                    fill="#000000"
                                                    opacity="0.3"
                                                ></rect>
                                            </g>
                                        </svg>
                                    </span>
                                </button>
                                <div
                                    class="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                                    data-kt-menu="true"
                                    id="kt_menu_61bc33e60572a"
                                >
                                    <div class="px-7 py-5">
                                        <div class="fs-5 text-dark fw-bolder">
                                            Filter Options
                                        </div>
                                    </div>
                                    <div class="separator border-gray-200"></div>
                                    <div class="px-7 py-5">
                                        <div class="mb-10">
                                            <label class="form-label fw-bold">Status:</label>
                                            <div>
                                                <select
                                                    class="form-select form-select-solid select2-hidden-accessible"
                                                    data-kt-select2="true"
                                                    data-placeholder="Select option"
                                                    data-dropdown-parent="#kt_menu_61bc33e60572a"
                                                    data-allow-clear="true"
                                                    data-select2-id="select2-data-16-lx7h"
                                                    tabindex="-1"
                                                    aria-hidden="true"
                                                >
                                                    <option data-select2-id="select2-data-18-s23n"></option>
                                                    <option value="1">Approved</option>
                                                    <option value="2">Pending</option>
                                                    <option value="2">In Process</option>
                                                    <option value="2">Rejected</option>
                                                </select>
                                                <span
                                                    class="select2 select2-container select2-container--bootstrap5"
                                                    dir="ltr"
                                                    data-select2-id="select2-data-17-hzxo"
                                                    style={{ width: "100%" }}
                                                >
                                                    <span class="selection">
                                                        <span
                                                            class="select2-selection select2-selection--single form-select form-select-solid"
                                                            role="combobox"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                            tabindex="0"
                                                            aria-disabled="false"
                                                            aria-labelledby="select2-5mpy-container"
                                                            aria-controls="select2-5mpy-container"
                                                        >
                                                            <span
                                                                class="select2-selection__rendered"
                                                                id="select2-5mpy-container"
                                                                role="textbox"
                                                                aria-readonly="true"
                                                                title="Select option"
                                                            >
                                                                <span class="select2-selection__placeholder">
                                                                    Select option
                                                                </span>
                                                            </span>
                                                            <span
                                                                class="select2-selection__arrow"
                                                                role="presentation"
                                                            >
                                                                <b role="presentation"></b>
                                                            </span>
                                                        </span>
                                                    </span>
                                                    <span
                                                        class="dropdown-wrapper"
                                                        aria-hidden="true"
                                                    ></span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mb-10">
                                            <label class="form-label fw-bold">Member Type:</label>
                                            <div class="d-flex">
                                                <label class="form-check form-check-sm form-check-custom form-check-solid me-5">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value="1"
                                                    />
                                                    <span class="form-check-label">Author</span>
                                                </label>
                                                <label class="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input
                                                        class="form-check-input"
                                                        type="checkbox"
                                                        value="2"
                                                    />
                                                    <span class="form-check-label">Customer</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="mb-10">
                                            <label class="form-label fw-bold">
                                                Notifications:
                                            </label>
                                            <div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                                <input
                                                    class="form-check-input"
                                                    type="checkbox"
                                                    value=""
                                                    name="notifications"
                                                />
                                                <label class="form-check-label">Enabled</label>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-end">
                                            <button
                                                type="reset"
                                                class="btn btn-sm btn-light btn-active-light-primary me-2"
                                                data-kt-menu-dismiss="true"
                                            >
                                                Reset
                                            </button>
                                            <button
                                                type="submit"
                                                class="btn btn-sm btn-primary"
                                                data-kt-menu-dismiss="true"
                                            >
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body pt-5">
                            <div class="timeline-label">
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        08:42
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-warning fs-1"></i>
                                    </div>
                                    <div class="fw-mormal timeline-content text-muted ps-3">
                                        Outlines keep you honest. And keep structure
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        10:00
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-success fs-1"></i>
                                    </div>
                                    <div class="timeline-content d-flex">
                                        <span class="fw-bolder text-gray-800 ps-3">
                                            AEOL meeting
                                        </span>
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        14:37
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-danger fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-bolder text-gray-800 ps-3">
                                        Make deposit
                                        <a href="!#" class="text-primary">
                                            USD 700
                                        </a>
                                        . to ESL
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        16:50
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-primary fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-mormal text-muted ps-3">
                                        Indulging in poorly driving and keep structure keep
                                        great
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        21:03
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-danger fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-bold text-gray-800 ps-3">
                                        New order placed
                                        <a href="!#" class="text-primary">
                                            #XF-2356
                                        </a>
                                        .
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        16:50
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-primary fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-mormal text-muted ps-3">
                                        Indulging in poorly driving and keep structure keep
                                        great
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        21:03
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-danger fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-bold text-gray-800 ps-3">
                                        New order placed
                                        <a href="!#" class="text-primary">
                                            #XF-2356
                                        </a>
                                        .
                                    </div>
                                </div>
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">
                                        10:30
                                    </div>
                                    <div class="timeline-badge">
                                        <i class="fa fa-genderless text-success fs-1"></i>
                                    </div>
                                    <div class="timeline-content fw-mormal text-muted ps-3">
                                        Finance KPI Mobile app launch preparion meeting
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
