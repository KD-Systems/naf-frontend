import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  //Replace the classes of body for the page
  let body = document.getElementsByTagName('body');
  body[0].setAttribute('class', 'bg-body');


  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div
          className="d-flex flex-column flex-lg-row-auto w-xl-600px positon-xl-relative"
          style={{ backgroundColor: "#F2C98A", height: '100vh' }}
        >
          <div className="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-600px scroll-y">
            <div className="d-flex flex-row-fluid flex-column text-center p-10 pt-lg-20">
              <Link to="#" className="py-9 mb-5">
                <img
                  alt="Logo"
                  src="assets/media/logos/logo-2.svg"
                  className="h-60px"
                />
              </Link>

              <h1
                className="fw-bolder fs-2qx pb-5 pb-md-10"
                style={{ color: "#986923" }}
              >
                Welcome to Metronic
              </h1>

              <p className="fw-bold fs-2" style={{ color: "#986923" }}>
                Discover Amazing Metronic
                <br />
                with great build tools
              </p>
            </div>

            <div
              className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px"
              style={{
                backgroundImage:
                  "url(assets/media/illustrations/sketchy-1/13.png",
              }}
            ></div>
          </div>
        </div>

        <div className="d-flex flex-column flex-lg-row-fluid py-10">
          <div className="d-flex flex-center flex-column flex-column-fluid">
            <div className="w-lg-500px p-10 p-lg-15 mx-auto">
              <form
                className="form w-100"
                noValidate="novalidate"
                action="/dashboard"
              >
                <div className="text-center mb-10">
                  <h1 className="text-dark mb-3">Sign In to the Panel</h1>
                </div>

                <div className="fv-row mb-10">
                  <label className="form-label fs-6 fw-bolder text-dark">
                    Email
                  </label>

                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="text"
                    autoComplete="off"
                  />
                </div>

                <div className="fv-row mb-10">
                  <div className="d-flex flex-stack mb-2">
                    <label className="form-label fw-bolder text-dark fs-6 mb-0">
                      Password
                    </label>

                    <a
                      href="../../demo1/dist/authentication/layouts/aside/password-reset.html"
                      className="link-primary fs-6 fw-bolder"
                    >
                      Forgot Password ?
                    </a>
                  </div>

                  <input
                    className="form-control form-control-lg form-control-solid"
                    type="password"
                    autoComplete="off"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    id="kt_sign_in_submit"
                    className="btn btn-lg btn-primary w-100 mb-5"
                  >
                    <span className="indicator-label">Continue</span>
                    <span className="indicator-progress">
                      Please wait...
                      <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                  </button>

                  <div className="text-center text-muted text-uppercase fw-bolder mb-5">
                    or
                  </div>

                  <a
                    href="!#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                  >
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/google-icon.svg"
                      className="h-20px me-3"
                    />
                    Continue with Google
                  </a>

                  <a
                    href="!#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100 mb-5"
                  >
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/facebook-4.svg"
                      className="h-20px me-3"
                    />
                    Continue with Facebook
                  </a>

                  <a
                    href="!#"
                    className="btn btn-flex flex-center btn-light btn-lg w-100"
                  >
                    <img
                      alt="Logo"
                      src="assets/media/svg/brand-logos/apple-black.svg"
                      className="h-20px me-3"
                    />
                    Continue with Apple
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
            <div className="d-flex flex-center fw-bold fs-6">
              <Link
                to="#"
                className="text-muted text-hover-primary px-2"
                target="_blank"
              >
                About
              </Link>
              <Link
                to="#"
                className="text-muted text-hover-primary px-2"
                target="_blank"
              >
                Support
              </Link>
              <Link
                to="#"
                className="text-muted text-hover-primary px-2"
                target="_blank"
              >
                Purchase
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
