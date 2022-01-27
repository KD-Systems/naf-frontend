import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CompanyService from "services/CompanyService";
import CompanyInfo from "./sections/Info";
import CompanyUsers from "./users/Index";
import Moment from "react-moment";

const ShowCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  const [active, setActive] = useState("users");

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
          <CompanyInfo company={company} />

          <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4 active"
                  data-bs-toggle="tab"
                  href="#users"
                  onClick={() => {
                    setActive("users");
                  }}
                >
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#contracts"
                  onClick={() => {
                    setActive("contracts");
                  }}
                >
                  Contracts
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-active-primary pb-4"
                  data-bs-toggle="tab"
                  href="#machines"
                  onClick={() => {
                    setActive("machines");
                  }}
                >
                  Machines
                </a>
              </li>
            </ul>

            <div className="tab-content">
              {/* Tabs start from here */}
              <CompanyUsers active={active} companyId={company.id} />

              <div className="tab-pane fade" id="contracts" role="tab-panel">
                <div className="d-flex flex-column gap-7 gap-lg-10">
                  <div className="card card-flush py-4">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Contracts</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            <th className="min-w-150px">Machine</th>
                            <th className="min-w-150px">Machine Model</th>
                            <th className="min-w-150px">Start Date</th>
                            <th className="min-w-150px">End Date</th>
                            <th className="min-w-120px">Status</th>
                          </tr>
                        </thead>

                        <tbody>
                          {company?.contracts?.map((item, index) => (
                            <tr key="index">
                              <td>{item?.machine?.name}</td>
                              <td>{item?.machine_model?.name}</td>
                              <td>
                                {" "}
                                <Moment format="YYYY-MM-DD">
                                  {item.start_date}
                                </Moment>
                              </td>
                              <td>
                                <Moment format="YYYY-MM-DD">
                                  {item.end_date}
                                </Moment>
                              </td>
                              <td className={
                              item.status == 1
                                ? "badge badge-light-success"
                                : "badge badge-light-danger"
                            }>
                                {item?.status == 1 ? "Active" : "InActive"}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs end from here */}

              <div className="tab-pane fade" id="machines" role="tab-panel">
                <div className="d-flex flex-column gap-7 gap-lg-10">
                  <div className="card card-flush py-4">
                    <div className="card-header">
                      <div className="card-title">
                        <h2>Machines</h2>
                      </div>
                    </div>
                    <div className="card-body pt-0">
                      <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            <th className="min-w-150px">Machine</th>
                            <th className="min-w-150px">Machine Model</th>
                            <th className="min-w-150px">Mfg Number</th>
                            <th className="min-w-150px">Space</th>
                           
                          </tr>
                        </thead>

                        <tbody>
                          {company?.contracts?.map((item, index) => (
                            <tr key="index">
                              <td>{item?.machine?.name}</td>
                              <td>{item?.machine_model?.name}</td>
                              <td>
                                {" "}
                             
                                  {item?.machine_model?.mfg_number}
                              
                              </td>
                              <td>
                            
                                  {item?.machine_model?.space}
                               
                              </td>
                    
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
