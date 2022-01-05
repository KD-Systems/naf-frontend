import React from "react";
import { Link,useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate()

  const goBack = ()=>{
    navigate("/")
    // window.history.go(-1);
    // // window.location.reload((navigate(-2))); 
    
  }
  return (
    <div className="d-flex flex-column flex-root">
      <div className="d-flex flex-column flex-center flex-column-fluid p-10">
        <img
          src="assets/media/illustrations/sketchy-1/18.png"
          alt="404"
          className="mw-100 mb-10 h-lg-450px"
        />

        <h1 className="fw-bold mb-10" style={{ color: " #A3A3C7" }}>
          Seems there is nothing here
        </h1>

        <a
          onClick={goBack}
          href="!#"
          className="btn btn-primary"
        >
          Return to Previous Page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
