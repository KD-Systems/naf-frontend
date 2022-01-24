import React from "react";
import { Link } from "react-router-dom";
import TopCard from "../../components/profile/TopCard";

import { useDispatch, useSelector } from "react-redux";
const AccountSettings = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div id="kt_content_container" className="container-xxl">
      <TopCard />

      <div className="card mb-5 mb-xl-10">
        <div
          className="card-header border-0 cursor-pointer"
          role="button"
          data-bs-toggle="collapse"
          data-bs-target="#kt_account_profile_details"
          aria-expanded="true"
          aria-controls="kt_account_profile_details"
        >
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Profile Details</h3>
          </div>
        </div>

        <div id="kt_account_settings_profile_details" className="collapse show">
          <form
            id="kt_account_profile_details_form"
            className="form fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate="novalidate"
          >
            <div className="card-body border-top p-9">
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-bold fs-6">
                  Avatar
                </label>
                <div className="col-lg-8">
                  <div
                    className="image-input image-input-outline"
                    data-kt-image-input="true"
                    // style={{ backgroundImage: `url(${user?.user.avatar})` }}
                  >
                    <div
                      className="image-input-wrapper w-125px h-125px"
                      style={{ backgroundImage: `url(${user?.user.avatar})` }}
                    ></div>

                    <label
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="change"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Change avatar"
                    >
                      <i className="bi bi-pencil-fill fs-7"></i>
                      <input
                        type="file"
                        name="avatar"
                        accept=".png, .jpg, .jpeg"
                      />
                      <input type="hidden" name="avatar_remove" />
                    </label>

                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="cancel"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Cancel avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>

                    <span
                      className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                      data-kt-image-input-action="remove"
                      data-bs-toggle="tooltip"
                      title=""
                      data-bs-original-title="Remove avatar"
                    >
                      <i className="bi bi-x fs-2"></i>
                    </span>
                  </div>
                  <div className="form-text">
                    Allowed file types: png, jpg, jpeg.
                  </div>
                </div>
              </div>

              <div className="row mb-6">
                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                  Full Name
                </label>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 fv-row fv-plugins-icon-container">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                        placeholder="Name"
                        defaultValue={user?.user?.name}
                      />
                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div>

                    {/* <div className="col-lg-6 fv-row fv-plugins-icon-container">
                      <input
                        type="text"
                        name="lname"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Last name"
                        defaultValue="Smith"
                      />
                      <div className="fv-plugins-message-container invalid-feedback"></div>
                    </div> */}
                  </div>
                </div>
              </div>

            

              <div className="row mb-6">
                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                  Email
                </label>
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="text"
                    name="company"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Company name"
                    // defaultValue="safil@nafgroup.com"
                    defaultValue={user?.user?.email}
                  />
                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>
              </div>


              <div className="row mb-6">
                <label className="col-lg-4 col-form-label required fw-bold fs-6">
                  Password
                </label>
                <div className="col-lg-8 fv-row fv-plugins-icon-container">
                  <input
                    type="password"
                    name="company"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="password"
                    // defaultValue="safil@nafgroup.com"
                    defaultValue={user?.user?.password}
                  />
                  <div className="fv-plugins-message-container invalid-feedback"></div>
                </div>
              </div>

              {/* <div className="row mb-0">
                <label className="col-lg-4 col-form-label fw-bold fs-6">
                  Allow Notification
                </label>
                <div className="col-lg-8 d-flex align-items-center">
                  <div className="form-check form-check-solid form-switch fv-row">
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      id="allowmarketing"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="allowmarketing"
                    ></label>
                  </div>
                </div>
              </div> */}
            </div>

            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <Link
                to="/panel/profile"
                type="reset"
                className="btn btn-light btn-active-light-primary me-2"
              >
                Discard
              </Link>
              <button
                type="submit"
                className="btn btn-primary"
                id="kt_account_profile_details_submit"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
