import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-center flex-column-fluid p-10">
        <img
          src="assets/media/illustrations/sketchy-1/18.png"
          alt=""
          className="mw-100 mb-10 h-lg-450px"
        />

        <h1 className="fw-bold mb-10" style={{ color: " #A3A3C7" }}>
          Seems there is nothing here
        </h1>

        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
