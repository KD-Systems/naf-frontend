import React, { useEffect, useState } from "react";
import Modal from "../../components/utils/Modal";
import CompanyService from "../../services/CompanyService";

const EditCompany = ({ open, companyId, onCloseModal, onUpdate }) => {
    const [company, setCompany] = useState({});

    // Set the selected image to preview
    const setImage = async (e) => {
        let logoShow = document.getElementById("logo");
        let fr = new FileReader();
        fr.readAsDataURL(e.target.files[0]);

        fr.addEventListener("load", function () {
            logoShow.style.backgroundImage = "url(" + this.result + ")";
        });
    };

    const getCompany = async () => {
        setCompany(await CompanyService.get(companyId));
    };

    const updateCompany = async () => {
        let formData = new FormData(document.getElementById("update-company"));
        formData.append("_method", "PUT");
        await CompanyService.update(companyId, formData);
        onUpdate();
        onCloseModal();
    };

    // change data
    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        let tempdata = { ...company }
        tempdata[name] = value

        setCompany(tempdata)
    }

    useEffect(() => {
        if (companyId) {
            getCompany();
        }
    }, [companyId]);

    return (
        <div>
            <Modal
                open={open}
                onCloseModal={onCloseModal}
                title={<>Edit Company</>}
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
                                                "url(" +
                                                (company.logo ??
                                                    "/assets/media/svg/files/blank-image.svg") +
                                                ")",
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
                                            id="logo"
                                            name="logo"
                                            onChange={(e) => {
                                                setImage(e);
                                                handleChange(e);
                                            }}
                                            accept=".png, .jpg, .jpeg"
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
                                    value={company.name ?? ""}
                                    onChange={handleChange}
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
                                    value={company.slug ?? ""}
                                    onChange={handleChange}
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
                                    value={company.description ?? ""}
                                    onChange={handleChange}
                                />
                                <div className="fv-plugins-message-container invalid-feedback"></div>
                            </div>

                            <button
                                type="reset"
                                className="btn btn-primary mr-2 mt-5"
                                style={{ marginRight: "1rem" }}
                                onClick={updateCompany}
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

export default EditCompany;
