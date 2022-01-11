import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyService from "../../services/CompanyService";

const ShowCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});

  const getCompany = async () => {
    setCompany(await CompanyService.get(id));
  };

  useEffect(() => {
    getCompany();
  }, [id]);

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div className="form d-flex flex-column flex-lg-row gap-7 gap-lg-10 fv-plugins-bootstrap5 fv-plugins-framework">
          <div class="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px">
            <div class="card card-flush py-4">
              <div class="card-header">
                <div class="card-title">
                  <h2>{}</h2>
                </div>
              </div>
              <div className="card-body text-center pt-0">
                <div
                  className="image-input image-input-empty image-input-outline mb-3"
                  data-kt-image-input="true"
                >
                  <div
                    className="image-input-wrapper w-150px h-150px"
                    style={{
                      backgroundImage:
                        "url(assets/media//stock/ecommerce/78.gif)",
                    }}
                  ></div>
                  <label
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="change"
                    data-bs-toggle="tooltip"
                    title
                    data-bs-original-title="Change avatar"
                  >
                    <i className="bi bi-pencil-fill fs-7" />
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
                    title
                    data-bs-original-title="Cancel avatar"
                  >
                    <i className="bi bi-x fs-2" />
                  </span>
                  <span
                    className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                    data-kt-image-input-action="remove"
                    data-bs-toggle="tooltip"
                    title
                    data-bs-original-title="Remove avatar"
                  >
                    <i className="bi bi-x fs-2" />
                  </span>
                </div>
                <div className="text-muted fs-7">
                  Set the product thumbnail image. Only *.png, *.jpg and *.jpeg
                  image files are accepted
                </div>
              </div>
            </div>
          </div>

          <div class="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <ul class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary pb-4 active"
                  data-bs-toggle="tab"
                  href="#users"
                >
                  Users
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#contracts"
                >
                  Contracts
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#kt_ecommerce_add_product_reviews"
                >
                  Machines
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Tabs start from here */}
              <div
                class="tab-pane fade active show"
                id="users"
                role="tab-panel"
              >
                <div class="d-flex flex-column gap-7 gap-lg-10">
                  <div class="card card-flush py-4">
                    <div class="card-header">
                      <div class="card-title">
                        <h2>General</h2>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        <label className="required form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="product_name"
                          className="form-control mb-2"
                          placeholder="Product name"
                          defaultValue="Sample product"
                        />
                        <div className="text-muted fs-7">
                          A product name is required and recommended to be
                          unique.
                        </div>
                        <div className="fv-plugins-message-container invalid-feedback" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade active show"
                id="contracts"
                role="tab-panel"
              >
                <div class="d-flex flex-column gap-7 gap-lg-10">
                  <div class="card card-flush py-4">
                    <div class="card-header">
                      <div class="card-title">
                        <h2>General</h2>
                      </div>
                    </div>
                    <div class="card-body pt-0">
                      <div className="mb-10 fv-row fv-plugins-icon-container">
                        <label className="required form-label">
                          Product Name
                        </label>
                        <input
                          type="text"
                          name="product_name"
                          className="form-control mb-2"
                          placeholder="Product name"
                          defaultValue="Sample product"
                        />
                        <div className="text-muted fs-7">
                          A product name is required and recommended to be
                          unique.
                        </div>
                        <div className="fv-plugins-message-container invalid-feedback" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs end from here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCompany;
