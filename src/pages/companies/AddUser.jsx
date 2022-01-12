import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import CompanyService from "../../services/CompanyService";

const AddUser = ({ open, onCloseModal, onCreate, companyId }) => {
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
  const storeUser = async () => {
    let formData = new FormData(document.getElementById("update-company"));
    await CompanyService.addUser(companyId, formData);
    onCreate();
    onCloseModal();
  };

  const [data, setData] = useState({
    name: "", email: "", password: "", phone: "", avatar: ""
  })

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setData({
      ...data, [name]: value
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add User</>}
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
                      name="avatar"
                      accept=".png, .jpg, .jpeg"
                      onChange={(e) => { setImage(e); handleChange(e) }}
                      value={data.avatar}
                    />
                  </label>
                </div>
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="required form-label">Name</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Name"
                  name="name"
                  id="name"
                  value={data.name}
                  onChange={handleChange}
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="form-label required">Email</label>
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter Email"
                  name="email"
                  id="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="form-label required">Password</label>
                <input
                  type="password"
                  className="form-control mb-2"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <div className="mb-10 fv-row fv-plugins-icon-container">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Phone"
                  name="phone"
                  id="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
                <div className="fv-plugins-message-container invalid-feedback"></div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={storeUser}
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

export default AddUser;
