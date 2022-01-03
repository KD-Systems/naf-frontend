import React from 'react'

const NavBar = () => {
    return (
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
            <div className="d-flex align-items-stretch" id="kt_header_nav">
                <div className="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true" data-kt-swapper-mode="prepend" data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                    <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch" id="#kt_header_menu" data-kt-menu="true">
                        <div className="menu-item me-lg-1">
                            <span className="menu-title">Reserved for future</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-stretch flex-shrink-0">
                <div className="d-flex align-items-stretch flex-shrink-0">
                    <div className="d-flex align-items-stretch ms-1 ms-lg-3">
                        <div id="kt_header_search" className="d-flex align-items-stretch" data-kt-search-keypress="true" data-kt-search-min-length="2" data-kt-search-enter="enter" data-kt-search-layout="menu" data-kt-menu-trigger="auto" data-kt-menu-overflow="false" data-kt-menu-permanent="true" data-kt-menu-placement="bottom-end">
                            <div className="d-flex align-items-center" data-kt-search-element="toggle" id="search-toggle">
                                <div className="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px">
                                    <span className="svg-icon svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                            <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div data-kt-search-element="content" className="menu menu-sub menu-sub-dropdown p-7 w-325px w-md-375px">
                                <div data-kt-search-element="wrapper">
                                    <form data-kt-search-element="form" className="w-100 position-relative mb-3" autoComplete="off">
                                        <span className="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                            </svg>
                                        </span>
                                        <input type="text" className="form-control form-control-flush ps-10" name="search" defaultValue="" placeholder="Search..." data-kt-search-element="input" />
                                        <span className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-1" data-kt-search-element="spinner">
                                            <span className="spinner-border h-15px w-15px align-middle text-gray-400"></span>
                                        </span>
                                        <span className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none" data-kt-search-element="clear">
                                            <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                                </svg>
                                            </span>
                                        </span>
                                        <div className="position-absolute top-50 end-0 translate-middle-y" data-kt-search-element="toolbar">
                                            <div data-kt-search-element="preferences-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary me-1" data-bs-toggle="tooltip" title="Show search preferences">
                                                <span className="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z" fill="black" />
                                                        <path d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z" fill="black" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div data-kt-search-element="advanced-options-form-show" className="btn btn-icon w-20px btn-sm btn-active-color-primary" data-bs-toggle="tooltip" title="Show more search options">
                                                <span className="svg-icon svg-icon-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="black" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="separator border-gray-200 mb-6"></div>
                                    <div data-kt-search-element="results" className="d-none">
                                        <div className="scroll-y mh-200px mh-lg-350px">
                                            <h3 className="fs-5 text-muted m-0 pb-5" data-kt-search-element="category-title">Users</h3>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <img src="assets/media/avatars/150-1.jpg" alt="" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Karina Clark</span>
                                                    <span className="fs-7 fw-bold text-muted">Marketing Manager</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <img src="assets/media/avatars/150-3.jpg" alt="" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Olivia Bold</span>
                                                    <span className="fs-7 fw-bold text-muted">Software Engineer</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <img src="assets/media/avatars/150-8.jpg" alt="" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Ana Clark</span>
                                                    <span className="fs-7 fw-bold text-muted">UI/UX Designer</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <img src="assets/media/avatars/150-11.jpg" alt="" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Nick Pitola</span>
                                                    <span className="fs-7 fw-bold text-muted">Art Director</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <img src="assets/media/avatars/150-12.jpg" alt="" />
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Edward Kulnic</span>
                                                    <span className="fs-7 fw-bold text-muted">System Administrator</span>
                                                </div>
                                            </a>
                                            <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Customers</h3>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/volicity-9.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Company Rbranding</span>
                                                    <span className="fs-7 fw-bold text-muted">UI Design</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tvit.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Company Re-branding</span>
                                                    <span className="fs-7 fw-bold text-muted">Web Development</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <img className="w-20px h-20px" src="assets/media/svg/misc/infography.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Business Analytics App</span>
                                                    <span className="fs-7 fw-bold text-muted">Administration</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/leaf.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">EcoLeaf App Launch</span>
                                                    <span className="fs-7 fw-bold text-muted">Marketing</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <img className="w-20px h-20px" src="assets/media/svg/brand-logos/tower.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column justify-content-start fw-bold">
                                                    <span className="fs-6 fw-bold">Tower Group Website</span>
                                                    <span className="fs-7 fw-bold text-muted">Google Adwords</span>
                                                </div>
                                            </a>
                                            <h3 className="fs-5 text-muted m-0 pt-5 pb-5" data-kt-search-element="category-title">Projects</h3>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="black" />
                                                                <rect x="7" y="17" width="6" height="2" rx="1" fill="black" />
                                                                <rect x="7" y="12" width="10" height="2" rx="1" fill="black" />
                                                                <rect x="7" y="7" width="6" height="2" rx="1" fill="black" />
                                                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="fs-6 fw-bold">Si-Fi Project by AU Themes</span>
                                                    <span className="fs-7 fw-bold text-muted">#45670</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
                                                                <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
                                                                <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
                                                                <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="fs-6 fw-bold">Shopix Mobile App Planning</span>
                                                    <span className="fs-7 fw-bold text-muted">#45690</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                                                <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                                                                <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="fs-6 fw-bold">Finance Monitoring SAAS Discussion</span>
                                                    <span className="fs-7 fw-bold text-muted">#21090</span>
                                                </div>
                                            </a>
                                            <a href="!#" className="d-flex text-dark text-hover-primary align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                                                <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <span className="fs-6 fw-bold">Dashboard Analitics Launch</span>
                                                    <span className="fs-7 fw-bold text-muted">#34560</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="mb-4" data-kt-search-element="main">
                                        <div className="d-flex flex-stack fw-bold mb-4">
                                            <span className="text-muted fs-6 me-2">Recently Searched:</span>
                                        </div>
                                        <div className="scroll-y mh-200px mh-lg-325px">
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z" fill="black" />
                                                                <path opacity="0.3" d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z" fill="black" />
                                                                <path opacity="0.3" d="M15 17H9V20H15V17Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">BoomApp by Keenthemes</a>
                                                    <span className="fs-7 text-muted fw-bold">#45789</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z" fill="black" />
                                                                <path d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"Kept API Project Meeting</a>
                                                    <span className="fs-7 text-muted fw-bold">#84050</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="black" />
                                                                <path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"KPI Monitoring App Launch</a>
                                                    <span className="fs-7 text-muted fw-bold">#84250</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="black" />
                                                                <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Project Reference FAQ</a>
                                                    <span className="fs-7 text-muted fw-bold">#67945</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="black" />
                                                                <path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"FitPro App Development</a>
                                                    <span className="fs-7 text-muted fw-bold">#84250</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="black" />
                                                                <path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">Shopix Mobile App</a>
                                                    <span className="fs-7 text-muted fw-bold">#45690</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-5">
                                                <div className="symbol symbol-40px me-4">
                                                    <span className="symbol-label bg-light">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M20 8L12.5 5L5 14V19H20V8Z" fill="black" />
                                                                <path d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bold">"Landing UI Design" Launch</a>
                                                    <span className="fs-7 text-muted fw-bold">#24005</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-kt-search-element="empty" className="text-center d-none">
                                        <div className="pt-10 pb-10">
                                            <span className="svg-icon svg-icon-4x opacity-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="black" />
                                                    <path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="black" />
                                                    <rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="black" />
                                                    <path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="black" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="pb-15 fw-bold">
                                            <h3 className="text-gray-600 fs-5 mb-2">No result found</h3>
                                            <div className="text-muted fs-7">Please try again with a different query</div>
                                        </div>
                                    </div>
                                </div>
                                <form data-kt-search-element="advanced-options-form" className="pt-1 d-none">
                                    <h3 className="fw-bold text-dark mb-7">Advanced Search</h3>
                                    <div className="mb-5">
                                        <input type="text" className="form-control form-control-sm form-control-solid" placeholder="Contains the word" name="query" />
                                    </div>
                                    <div className="mb-5">
                                        <div className="nav-group nav-group-fluid">
                                            <label>
                                                <input type="radio" className="btn-check" name="type" defaultValue="has" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">All</span>
                                            </label>
                                            <label>
                                                <input type="radio" className="btn-check" name="type" defaultValue="users" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Users</span>
                                            </label>
                                            <label>
                                                <input type="radio" className="btn-check" name="type" defaultValue="orders" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Orders</span>
                                            </label>
                                            <label>
                                                <input type="radio" className="btn-check" name="type" defaultValue="projects" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Projects</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <input type="text" name="assignedto" className="form-control form-control-sm form-control-solid" placeholder="Assigned to" defaultValue="" />
                                    </div>
                                    <div className="mb-5">
                                        <input type="text" name="collaborators" className="form-control form-control-sm form-control-solid" placeholder="Collaborators" defaultValue="" />
                                    </div>
                                    <div className="mb-5">
                                        <div className="nav-group nav-group-fluid">
                                            <label>
                                                <input type="radio" className="btn-check" name="attachment" defaultValue="has" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">Has attachment</span>
                                            </label>
                                            <label>
                                                <input type="radio" className="btn-check" name="attachment" defaultValue="any" />
                                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">Any</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <select name="timezone" aria-label="Select a Timezone" data-control="select2" data-placeholder="date_period" className="form-select form-select-sm form-select-solid">
                                            <option defaultValue="next">Within the next</option>
                                            <option defaultValue="last">Within the last</option>
                                            <option defaultValue="between">Between</option>
                                            <option defaultValue="on">On</option>
                                        </select>
                                    </div>
                                    <div className="row mb-8">
                                        <div className="col-6">
                                            <input type="number" name="date_number" className="form-control form-control-sm form-control-solid" placeholder="Lenght" defaultValue="" />
                                        </div>
                                        <div className="col-6">
                                            <select name="date_typer" aria-label="Select a Timezone" data-control="select2" data-placeholder="Period" className="form-select form-select-sm form-select-solid">
                                                <option defaultValue="days">Days</option>
                                                <option defaultValue="weeks">Weeks</option>
                                                <option defaultValue="months">Months</option>
                                                <option defaultValue="years">Years</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <button type="reset" className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="advanced-options-form-cancel">Cancel</button>
                                        <a href="../../demo1/dist/pages/search/horizontal.html" className="btn btn-sm fw-bolder btn-primary" data-kt-search-element="advanced-options-form-search">Search</a>
                                    </div>
                                </form>
                                <form data-kt-search-element="preferences" className="pt-1 d-none">
                                    <h3 className="fw-bold text-dark mb-7">Search Preferences</h3>
                                    <div className="pb-4 border-bottom">
                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Projects</span>
                                            <input className="form-check-input" type="checkbox" defaultValue="1" />
                                        </label>
                                    </div>
                                    <div className="py-4 border-bottom">
                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Targets</span>
                                            <input className="form-check-input" type="checkbox" defaultValue="1" />
                                        </label>
                                    </div>
                                    <div className="py-4 border-bottom">
                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Affiliate Programs</span>
                                            <input className="form-check-input" type="checkbox" defaultValue="1" />
                                        </label>
                                    </div>
                                    <div className="py-4 border-bottom">
                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Referrals</span>
                                            <input className="form-check-input" type="checkbox" defaultValue="1" />
                                        </label>
                                    </div>
                                    <div className="py-4 border-bottom">
                                        <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                                            <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">Users</span>
                                            <input className="form-check-input" type="checkbox" defaultValue="1" />
                                        </label>
                                    </div>
                                    <div className="d-flex justify-content-end pt-7">
                                        <button type="reset" className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2" data-kt-search-element="preferences-dismiss">Cancel</button>
                                        <button type="submit" className="btn btn-sm fw-bolder btn-primary">Save Changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-1 ms-lg-3">
                        <div className="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <span className="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z" fill="black" />
                                    <path d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z" fill="black" />
                                    <path opacity="0.3" d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z" fill="black" />
                                    <path opacity="0.3" d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z" fill="black" />
                                </svg>
                            </span>
                        </div>
                        <div className="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
                            <div className="d-flex flex-column bgi-no-repeat rounded-top" style={{ "backgroundImage": "url('assets/media/misc/pattern-1.jpg')" }}>
                                <h3 className="text-white fw-bold px-9 mt-10 mb-6">Notifications
                                    <span className="fs-8 opacity-75 ps-3">24 reports</span></h3>
                                <ul className="nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9">
                                    <li className="nav-item">
                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_1">Alerts</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4 active" data-bs-toggle="tab" href="#kt_topbar_notifications_2">Updates</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-white opacity-75 opacity-state-100 pb-4" data-bs-toggle="tab" href="#kt_topbar_notifications_3">Logs</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade" id="kt_topbar_notifications_1" role="tabpanel">
                                    <div className="scroll-y mh-325px my-5 px-8">
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-primary">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M11 6.5C11 9 9 11 6.5 11C4 11 2 9 2 6.5C2 4 4 2 6.5 2C9 2 11 4 11 6.5ZM17.5 2C15 2 13 4 13 6.5C13 9 15 11 17.5 11C20 11 22 9 22 6.5C22 4 20 2 17.5 2ZM6.5 13C4 13 2 15 2 17.5C2 20 4 22 6.5 22C9 22 11 20 11 17.5C11 15 9 13 6.5 13ZM17.5 13C15 13 13 15 13 17.5C13 20 15 22 17.5 22C20 22 22 20 22 17.5C22 15 20 13 17.5 13Z" fill="black" />
                                                                <path d="M17.5 16C17.5 16 17.4 16 17.5 16L16.7 15.3C16.1 14.7 15.7 13.9 15.6 13.1C15.5 12.4 15.5 11.6 15.6 10.8C15.7 9.99999 16.1 9.19998 16.7 8.59998L17.4 7.90002H17.5C18.3 7.90002 19 7.20002 19 6.40002C19 5.60002 18.3 4.90002 17.5 4.90002C16.7 4.90002 16 5.60002 16 6.40002V6.5L15.3 7.20001C14.7 7.80001 13.9 8.19999 13.1 8.29999C12.4 8.39999 11.6 8.39999 10.8 8.29999C9.99999 8.19999 9.20001 7.80001 8.60001 7.20001L7.89999 6.5V6.40002C7.89999 5.60002 7.19999 4.90002 6.39999 4.90002C5.59999 4.90002 4.89999 5.60002 4.89999 6.40002C4.89999 7.20002 5.59999 7.90002 6.39999 7.90002H6.5L7.20001 8.59998C7.80001 9.19998 8.19999 9.99999 8.29999 10.8C8.39999 11.5 8.39999 12.3 8.29999 13.1C8.19999 13.9 7.80001 14.7 7.20001 15.3L6.5 16H6.39999C5.59999 16 4.89999 16.7 4.89999 17.5C4.89999 18.3 5.59999 19 6.39999 19C7.19999 19 7.89999 18.3 7.89999 17.5V17.4L8.60001 16.7C9.20001 16.1 9.99999 15.7 10.8 15.6C11.5 15.5 12.3 15.5 13.1 15.6C13.9 15.7 14.7 16.1 15.3 16.7L16 17.4V17.5C16 18.3 16.7 19 17.5 19C18.3 19 19 18.3 19 17.5C19 16.7 18.3 16 17.5 16Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Alice</a>
                                                    <div className="text-gray-400 fs-7">Phase 1 development</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">1 hr</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-danger">
                                                        <span className="svg-icon svg-icon-2 svg-icon-danger">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                                <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                                                                <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">HR Confidential</a>
                                                    <div className="text-gray-400 fs-7">Confidential staff documents</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">2 hrs</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-warning">
                                                        <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
                                                                <path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Company HR</a>
                                                    <div className="text-gray-400 fs-7">Corporeate staff profiles</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">5 hrs</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-success">
                                                        <span className="svg-icon svg-icon-2 svg-icon-success">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M5 15C3.3 15 2 13.7 2 12C2 10.3 3.3 9 5 9H5.10001C5.00001 8.7 5 8.3 5 8C5 5.2 7.2 3 10 3C11.9 3 13.5 4 14.3 5.5C14.8 5.2 15.4 5 16 5C17.7 5 19 6.3 19 8C19 8.4 18.9 8.7 18.8 9C18.9 9 18.9 9 19 9C20.7 9 22 10.3 22 12C22 13.7 20.7 15 19 15H5ZM5 12.6H13L9.7 9.29999C9.3 8.89999 8.7 8.89999 8.3 9.29999L5 12.6Z" fill="black" />
                                                                <path d="M17 17.4V12C17 11.4 16.6 11 16 11C15.4 11 15 11.4 15 12V17.4H17Z" fill="black" />
                                                                <path opacity="0.3" d="M12 17.4H20L16.7 20.7C16.3 21.1 15.7 21.1 15.3 20.7L12 17.4Z" fill="black" />
                                                                <path d="M8 12.6V18C8 18.6 8.4 19 9 19C9.6 19 10 18.6 10 18V12.6H8Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Redux</a>
                                                    <div className="text-gray-400 fs-7">New frontend admin theme</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">2 days</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-primary">
                                                        <span className="svg-icon svg-icon-2 svg-icon-primary">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M6 22H4V3C4 2.4 4.4 2 5 2C5.6 2 6 2.4 6 3V22Z" fill="black" />
                                                                <path d="M18 14H4V4H18C18.8 4 19.2 4.9 18.7 5.5L16 9L18.8 12.5C19.3 13.1 18.8 14 18 14Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Project Breafing</a>
                                                    <div className="text-gray-400 fs-7">Product launch status update</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">21 Jan</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-info">
                                                        <span className="svg-icon svg-icon-2 svg-icon-info">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="black" />
                                                                <path d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Banner Assets</a>
                                                    <div className="text-gray-400 fs-7">Collection of banner images</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">21 Jan</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center">
                                                <div className="symbol symbol-35px me-4">
                                                    <span className="symbol-label bg-light-warning">
                                                        <span className="svg-icon svg-icon-2 svg-icon-warning">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                                                <path opacity="0.3" d="M8.9 21L7.19999 22.6999C6.79999 23.0999 6.2 23.0999 5.8 22.6999L4.1 21H8.9ZM4 16.0999L2.3 17.8C1.9 18.2 1.9 18.7999 2.3 19.1999L4 20.9V16.0999ZM19.3 9.1999L15.8 5.6999C15.4 5.2999 14.8 5.2999 14.4 5.6999L9 11.0999V21L19.3 10.6999C19.7 10.2999 19.7 9.5999 19.3 9.1999Z" fill="black" />
                                                                <path d="M21 15V20C21 20.6 20.6 21 20 21H11.8L18.8 14H20C20.6 14 21 14.4 21 15ZM10 21V4C10 3.4 9.6 3 9 3H4C3.4 3 3 3.4 3 4V21C3 21.6 3.4 22 4 22H9C9.6 22 10 21.6 10 21ZM7.5 18.5C7.5 19.1 7.1 19.5 6.5 19.5C5.9 19.5 5.5 19.1 5.5 18.5C5.5 17.9 5.9 17.5 6.5 17.5C7.1 17.5 7.5 17.9 7.5 18.5Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="mb-0 me-2">
                                                    <a href="!#" className="fs-6 text-gray-800 text-hover-primary fw-bolder">Icon Assets</a>
                                                    <div className="text-gray-400 fs-7">Collection of SVG icons</div>
                                                </div>
                                            </div>
                                            <span className="badge badge-light fs-8">20 March</span>
                                        </div>
                                    </div>
                                    <div className="py-3 text-center border-top">
                                        <a href="../../demo1/dist/pages/profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                            <span className="svg-icon svg-icon-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="tab-pane fade show active" id="kt_topbar_notifications_2" role="tabpanel">
                                    <div className="d-flex flex-column px-9">
                                        <div className="pt-10 pb-0">
                                            <h3 className="text-dark text-center fw-bolder">Get Pro Access</h3>
                                            <div className="text-center text-gray-600 fw-bold pt-1">Outlines keep you honest. They stoping you from amazing poorly about drive</div>
                                            <div className="text-center mt-5 mb-9">
                                                <a href="!#" className="btn btn-sm btn-primary px-6" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Upgrade</a>
                                            </div>
                                        </div>
                                        <div className="text-center px-4">
                                            <img className="mw-100 mh-200px" alt="image" src="assets/media/illustrations/sketchy-1/1.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="kt_topbar_notifications_3" role="tabpanel">
                                    <div className="scroll-y mh-325px my-5 px-8">
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">New order</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Just now</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">New customer</a>
                                            </div>
                                            <span className="badge badge-light fs-8">2 hrs</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Payment process</a>
                                            </div>
                                            <span className="badge badge-light fs-8">5 hrs</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Search query</a>
                                            </div>
                                            <span className="badge badge-light fs-8">2 days</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">API connection</a>
                                            </div>
                                            <span className="badge badge-light fs-8">1 week</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-success me-4">200 OK</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Database restore</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Mar 5</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">System update</a>
                                            </div>
                                            <span className="badge badge-light fs-8">May 15</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Server OS update</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Apr 3</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-warning me-4">300 WRN</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">API rollback</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Jun 30</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Refund process</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Jul 10</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Withdrawal process</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Sep 10</span>
                                        </div>
                                        <div className="d-flex flex-stack py-4">
                                            <div className="d-flex align-items-center me-2">
                                                <span className="w-70px badge badge-light-danger me-4">500 ERR</span>
                                                <a href="!#" className="text-gray-800 text-hover-primary fw-bold">Mail tasks</a>
                                            </div>
                                            <span className="badge badge-light fs-8">Dec 10</span>
                                        </div>
                                    </div>
                                    <div className="py-3 text-center border-top">
                                        <a href="../../demo1/dist/pages/profile/activity.html" className="btn btn-color-gray-600 btn-active-color-primary">View All
                                            <span className="svg-icon svg-icon-5">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                                    <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-1 ms-lg-3">
                        <div className="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px" id="kt_drawer_chat_toggle">
                            <span className="svg-icon svg-icon-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
                                    <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                                    <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
                                </svg>
                            </span>
                            <span className="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
                        </div>
                    </div>
                    <div className="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                        <div className="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                            <img src="assets/media/avatars/150-26.jpg" alt="user" />
                        </div>
                        <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px" data-kt-menu="true">
                            <div className="menu-item px-3">
                                <div className="menu-content d-flex align-items-center px-3">
                                    <div className="symbol symbol-50px me-5">
                                        <img alt="Logo" src="assets/media/avatars/150-26.jpg" />
                                    </div>
                                    <div className="d-flex flex-column">
                                        <div className="fw-bolder d-flex align-items-center fs-5">Max Smith
                                            <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span></div>
                                        <a href="!#" className="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                    </div>
                                </div>
                            </div>
                            <div className="separator my-2"></div>
                            <div className="menu-item px-5 my-1">
                                <a href="!#" className="menu-link px-5">My Profile</a>
                            </div>
                            <div className="menu-item px-5 my-1">
                                <a href="!#" className="menu-link px-5">Account Settings</a>
                            </div>
                            <div className="menu-item px-5">
                                <a href="!#" className="menu-link px-5">Sign Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
