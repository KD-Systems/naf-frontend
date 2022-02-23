import { Chart, registerables } from 'chart.js'

import { Activities } from "components/utils/Activities";
import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams, useNavigate } from "react-router-dom";
import PartService from "services/PartService";
import PartAliases from "./aliases/Index";
import PartStocks from "./stocks/Index";

const ShowPart = () => {
  Chart.register(...registerables)

  let { id } = useParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState('stocks');
  const [data, setData] = useState({
    aliases: []
  });

  const getPart = async () => {
    setData(await PartService.get(id));
  };

  useEffect(() => {
    if (id)
      getPart();
  }, [id]);
  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body">
                  <h3 className="card-label">
                    <button
                      className="btn btn-sm btn-dark "
                      style={{ marginRight: "0.75rem" }}
                      onClick={() => navigate(-1)}
                    >
                      <i className="fa fa-arrow-left"></i> Back
                    </button>
                    Part Details
                  </h3>

                  <div className="separator"></div>

                  <div className="pb-5 fs-6">

                    {/* <div className="card h-100">
                      <div className="card-body p-9">
                        <div className="fs-2hx fw-bolder">237</div>
                        <div className="fs-4 fw-bold text-gray-400 mb-7">Current Projects</div>
                        <div className="d-flex flex-wrap">
                          <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
                            <canvas id="stock-stats"></canvas>
                          </div>
                          <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                              <div className="bullet bg-primary me-3"></div>
                              <div className="text-gray-400">Active</div>
                              <div className="ms-auto fw-bolder text-gray-700">30</div>
                            </div>
                            <div className="d-flex fs-6 fw-bold align-items-center mb-3">
                              <div className="bullet bg-success me-3"></div>
                              <div className="text-gray-400">Completed</div>
                              <div className="ms-auto fw-bolder text-gray-700">45</div>
                            </div>
                            <div className="d-flex fs-6 fw-bold align-items-center">
                              <div className="bullet bg-gray-300 me-3"></div>
                              <div className="text-gray-400">Yet to start</div>
                              <div className="ms-auto fw-bolder text-gray-700">25</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}


                    <div className="fw-bolder mt-5">Common Name</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.aliases[0]?.name}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Description</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.remarks}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Remarks</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.remarks}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Last Update</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        <Moment format='YYYY-MM-DD'>
                          {data.updated_at}
                        </Moment>
                      </span>
                    </div>

                  </div>
                </div>
              </div>

            </div>

            <div className="flex-lg-row-fluid ms-lg-15">
              <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${tab == "stocks" ? "active" : ""
                      }`}
                    data-bs-toggle="tab"
                    href="#stocks"
                    onClick={() => setTab("stocks")}
                  >
                    Stocks
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${tab == "aliases" ? "active" : ""
                      }`}
                    data-bs-toggle="tab"
                    href="#aliases"
                    onClick={() => setTab("aliases")}
                  >
                    Aliases
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link text-active-primary pb-4 ${tab == "activities" ? "active" : ""
                      }`}
                    data-bs-toggle="tab"
                    href="#activities"
                    onClick={() => setTab("activities")}
                  >
                    Activities
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <PartAliases tab={tab} models={data.models} onChange={() => getPart} />
                <PartStocks tab={tab} models={data.models} onChange={() => getPart} part={data} />
                <Activities logName="parts" modelId={id} tab={tab} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShowPart;
