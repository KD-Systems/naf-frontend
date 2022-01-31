import React from "react";

const ShowPermission = () => {
  return (
    <>
      <div className="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" className="container-xxl">
          <div
            className="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10"
            // style="background-size: auto calc(100% + 10rem); background-position-x: 100%; background-image: url('assets/media/illustrations/sketchy-1/4.png')"
            style={{
                backgroundSize:"auto calc(100% + 10rem)",
                backgoruntPositionX:"100%",
                backgrountImage:"url('assets/media/illustrations/sketchy-1/4.png')"
            }}
          >
            <div className="card-header pt-10">
              <div className="d-flex align-items-center">
                <div className="symbol symbol-circle me-5">
                  <div className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
                    <span className="svg-icon svg-icon-2x svg-icon-primary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17.302 11.35L12.002 20.55H21.202C21.802 20.55 22.202 19.85 21.902 19.35L17.302 11.35Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M12.002 20.55H2.802C2.202 20.55 1.80202 19.85 2.10202 19.35L6.70203 11.45L12.002 20.55ZM11.302 3.45L6.70203 11.35H17.302L12.702 3.45C12.402 2.85 11.602 2.85 11.302 3.45Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                <div className="d-flex flex-column">
                  <h2 className="mb-1">Settings</h2>
                  <div className="text-muted fw-bolder">
                    <a href="#">Keenthemes</a>
                    <span className="mx-3">|</span>
                    <a href="#">File Manager</a>
                    <span className="mx-3">|</span>2.6 GB
                    <span className="mx-3">|</span>758 items
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body pb-0">
              <div className="d-flex overflow-auto h-55px">
                <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bold flex-nowrap">
                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary me-6"
                      href="../../demo1/dist/apps/file-manager/folders.html"
                    >
                      Files
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary me-6 active"
                      href="../../demo1/dist/apps/file-manager/settings.html"
                    >
                      Settings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card card-flush">
            <div className="card-header pt-8">
              <div className="card-title">
                <h2>Preferences</h2>
              </div>
            </div>

            <div className="card-body">
              <form className="form" id="kt_file_manager_settings">
                <div className="fv-row row mb-15">
                  <div className="col-md-3 d-flex align-items-center">
                    <label className="fs-6 fw-bold">Language</label>
                  </div>

                  <div className="col-md-9">
                    <select
                      name="language"
                      aria-label="Select a Language"
                      data-control="select2"
                      data-placeholder="Select a Language..."
                      className="form-select mb-2"
                    >
                      <option></option>
                      <option value="id">Bahasa Indonesia - Indonesian</option>
                      <option value="msa">Bahasa Melayu - Malay</option>
                      <option value="ca">Català - Catalan</option>
                      <option value="cs">Čeština - Czech</option>
                      <option value="da">Dansk - Danish</option>
                      <option value="de">Deutsch - German</option>
                      <option value="en">English</option>
                      <option value="en-gb">
                        English UK - British English
                      </option>
                      <option value="es">Español - Spanish</option>
                      <option value="fil">Filipino</option>
                      <option value="fr">Français - French</option>
                      <option value="ga">Gaeilge - Irish (beta)</option>
                      <option value="gl">Galego - Galician (beta)</option>
                      <option value="hr">Hrvatski - Croatian</option>
                      <option value="it">Italiano - Italian</option>
                      <option value="hu">Magyar - Hungarian</option>
                      <option value="nl">Nederlands - Dutch</option>
                      <option value="no">Norsk - Norwegian</option>
                      <option value="pl">Polski - Polish</option>
                      <option value="pt">Português - Portuguese</option>
                      <option value="ro">Română - Romanian</option>
                      <option value="sk">Slovenčina - Slovak</option>
                      <option value="fi">Suomi - Finnish</option>
                      <option value="sv">Svenska - Swedish</option>
                      <option value="vi">Tiếng Việt - Vietnamese</option>
                      <option value="tr">Türkçe - Turkish</option>
                      <option value="el">Ελληνικά - Greek</option>
                      <option value="bg">Български език - Bulgarian</option>
                      <option value="ru">Русский - Russian</option>
                      <option value="sr">Српски - Serbian</option>
                      <option value="uk">Українська мова - Ukrainian</option>
                      <option value="he">עִבְרִית - Hebrew</option>
                      <option value="ur">اردو - Urdu (beta)</option>
                      <option value="ar">العربية - Arabic</option>
                      <option value="fa">فارسی - Persian</option>
                      <option value="mr">मराठी - Marathi</option>
                      <option value="hi">हिन्दी - Hindi</option>
                      <option value="bn">বাংলা - Bangla</option>
                      <option value="gu">ગુજરાતી - Gujarati</option>
                      <option value="ta">தமிழ் - Tamil</option>
                      <option value="kn">ಕನ್ನಡ - Kannada</option>
                      <option value="th">ภาษาไทย - Thai</option>
                      <option value="ko">한국어 - Korean</option>
                      <option value="ja">日本語 - Japanese</option>
                      <option value="zh-cn">
                        简体中文 - Simplified Chinese
                      </option>
                      <option value="zh-tw">
                        繁體中文 - Traditional Chinese
                      </option>
                    </select>
                  </div>
                </div>

                <div className="fv-row row mb-15">
                  <div className="col-md-3">
                    <label className="fs-6 fw-bold mt-2">Date Format</label>
                    <div className="text-muted fs-7">
                      For more info on moment() date formats, please
                      <a
                        href="https://momentjs.com/docs/#/displaying/format/"
                        target="_blank"
                      >
                        click here
                      </a>
                      .
                    </div>
                  </div>

                  <div className="col-md-9">
                    <select
                      name="dateformat"
                      aria-label="Select a date format"
                      data-hide-search="true"
                      data-control="select2"
                      data-placeholder="Select a date format..."
                      className="form-select mb-2"
                    >
                      <option></option>
                      <option value="1">10 Sep 2021, 10:15 AM</option>
                      <option value="2">10/09/2021, 10:15 AM</option>
                      <option value="3">09-10-2021</option>
                      <option value="4">Sunday, September 10th 2010</option>
                    </select>
                  </div>
                </div>

                <div className="fv-row row mb-15">
                  <div className="col-md-3 d-flex align-items-center">
                    <label className="fs-6 fw-bold">Automatic time zone</label>
                  </div>

                  <div className="col-md-9">
                    <div className="form-check form-switch form-check-custom form-check-solid me-10">
                      <input
                        className="form-check-input h-30px w-50px"
                        name="autotimezone"
                        type="checkbox"
                        value=""
                        id="autotimezone"
                      />
                      <label className="form-check-label" for="autotimezone">
                        GMT +10:00
                      </label>
                    </div>
                  </div>
                </div>

                <div className="fv-row row mb-15">
                  <div className="col-md-3">
                    <label className="fs-6 fw-bold mt-2">
                      Folder Compression
                    </label>
                    <div className="text-muted fs-7">
                      Default file compression type when downloading folders
                    </div>
                  </div>

                  <div className="col-md-9">
                    <select
                      name="compression"
                      aria-label="Select a Compressions type"
                      data-control="select2"
                      data-hide-search="true"
                      data-placeholder="Select a Compressions type..."
                      className="form-select mb-2"
                    >
                      <option></option>
                      <option value="1">*.zip</option>
                      <option value="2">*.7z</option>
                      <option value="3">*.rar</option>
                      <option value="4">*.tar.gz</option>
                    </select>
                  </div>
                </div>

                <div className="fv-row row mb-15">
                  <div className="col-md-3">
                    <label className="fs-6 fw-bold">Sharing Permissions</label>
                  </div>

                  <div className="col-md-9">
                    <label className="fs-6 fw-bold mb-3">Organisation</label>

                    <div className="d-flex">
                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                        <input
                          className="form-check-input h-30px w-50px"
                          name="org_read"
                          type="checkbox"
                          value=""
                          id="org_read"
                          checked="checked"
                        />
                        <label className="form-check-label" for="org_read">
                          Read
                        </label>
                      </div>

                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                        <input
                          className="form-check-input h-30px w-50px"
                          name="org_write"
                          type="checkbox"
                          value=""
                          id="org_write"
                          checked="checked"
                        />
                        <label className="form-check-label" for="org_write">
                          Write
                        </label>
                      </div>
                    </div>

                    <div className="separator mt-6 mb-5"></div>

                    <label className="fs-6 fw-bold mb-3">Public</label>

                    <div className="d-flex">
                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                        <input
                          className="form-check-input h-30px w-50px"
                          name="public_read"
                          type="checkbox"
                          value=""
                          id="public_read"
                          checked="checked"
                        />
                        <label className="form-check-label" for="public_read">
                          Read
                        </label>
                      </div>

                      <div className="form-check form-switch form-check-custom form-check-solid me-10">
                        <input
                          className="form-check-input h-30px w-50px"
                          name="public_write"
                          type="checkbox"
                          value=""
                          id="public_write"
                        />
                        <label className="form-check-label" for="public_write">
                          Write
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mt-12">
                  <div className="col-md-9 offset-md-3">
                    <button type="button" className="btn btn-light me-3">
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="btn btn-primary"
                      id="kt_file_manager_settings_submit"
                    >
                      <span className="indicator-label">Save</span>
                      <span className="indicator-progress">
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPermission;
