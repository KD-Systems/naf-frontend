import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import CompanyService from "../../services/CompanyService";

const CreateCompany = ({ open, onCloseModal, onCreate }) => {
  // Set the selected image to preview
  const setImage = async (e) => {
    let logoShow = document.getElementById("logo");
    let fr = new FileReader();
    fr.readAsDataURL(e.target.files[0]);

    fr.addEventListener("load", function () {
      logoShow.style.backgroundImage = "url(" + this.result + ")";
    });
  };

  //Store data
  const createCompany = async () => {
    let formData = new FormData(document.getElementById("update-company"));
    await CompanyService.create(formData);
    onCreate();
    onCloseModal();
  };

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Company</>}
        body={
          <>
            <form id="update-company">
              <div className="mb-10 fv-row fv-plugins-icon-container text-center">
                <div
                  className="mx-auto image-input image-input-outline image-input-changed"
                  data-kt-image-input="true"
                >
                  <div
                    id="logo"
                    className="image-input-wrapper w-125px h-125px"
                    style={{
                      backgroundImage:
                        "url(/assets/media/svg/files/blank-image.svg)",
                    }}
                  ></div>
                  <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    data-bs-original-title="Change avatar"
                  >
                    <i className="bi bi-pencil-fill fs-7"></i>
                    <input
                      type="file"
                      name="logo"
                      accept=".png, .jpg, .jpeg"
                      onChange={setImage}
                    />
                  </label>
                </div>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="required form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Company Name"
                  name="name"
                  id="name"
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="form-label">Company Slug</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Company Slug"
                  name="slug"
                  id="slug"
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="form-label">Description</label>
                <textarea
                  rows="3"
                  type="text"
                  className="form-control"
                  placeholder="Enter Description"
                  name="description"
                  id="description"
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={createCompany}
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary  mt-5 "
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </form>
          </>
        }
      />
    </div>
  );
};

export default CreateCompany;
