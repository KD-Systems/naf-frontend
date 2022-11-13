import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import DueRequisition from "./create/DueRequisitions";
import NewRequisition from "./create/NewRequisition";

const RequisitionCreate = () => {
  const [active, setActive] = useState("requisitions");

  return (
    <>
      <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
        <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2 d-flex justify-content-center">
          <li className="nav-item">
            <a
              className="nav-link text-active-primary pb-4 active"
              data-bs-toggle="tab"
              href="#requisitions"
              onClick={() => {
                setActive("requisitions");
              }}
            >
              Requisitions
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-active-primary pb-4"
              data-bs-toggle="tab"
              href="#company_due"
              onClick={() => {
                setActive("company_due");
              }}
            >
              Company Due
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Tabs start from here */}

          {active == "requisitions" ? (
            <div className="card card-xl-stretch mb-xl-10">
              <NewRequisition />
            </div>
          ) : (
            <div className="card card-xl-stretch mb-xl-10">
              <DueRequisition />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RequisitionCreate;
