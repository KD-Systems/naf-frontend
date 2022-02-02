import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams, useNavigate } from "react-router-dom";
import ContractService from 'services/ContractService';
import MachineModels from "./machines/Index";

const ShowContract = () => {
  const [tab, setTab] = useState("machines");
  let { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const getContract = async () => {
    setData(await ContractService.get(id));
  };

  useEffect(() => {
    if (id) {
      getContract();
    }
  }, [id]);
  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <div className="d-flex flex-column flex-lg-row">
            <div className="flex-column flex-lg-row-auto w-lg-250px w-xl-350px mb-10">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body">
                Contract
                  <div className="separator"></div>

                  <div className="pb-5 fs-6">
                    <div className="fw-bolder mt-5">{data?.is_foc ? 'Installation' : 'Contract'} Date</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        <Moment format='YYYY-MM-DD'>
                          {data.start_date}
                        </Moment>
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Expriation Date</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        <Moment format='YYYY-MM-DD'>
                          {data.end_date}
                        </Moment>
                        {data.has_expired ?
                          <div className="badge badge-light-danger">
                            Expired
                          </div> : ''
                        }
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Status</div>
                    <div
                      className={
                        data?.status
                          ? "badge badge-light-success"
                          : "badge badge-light-danger"
                      }
                    >
                      {data?.status ? "active" : "inactive"}
                    </div>

                    <div className="fw-bolder mt-5">FOC</div>
                    <div
                      className={
                        data?.is_foc
                          ? "badge badge-light-warning"
                          : "badge badge-light-info"
                      }
                    >
                      {data?.is_foc ? "Yes" : "No"}
                    </div>

                    <div className="fw-bolder mt-5">Root Machine Model</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.machine?.name ?? '--'}
                      </span>
                    </div>

                    <div className="fw-bolder mt-5">Notes</div>
                    <div className="text-gray-600">
                      <span className="text-gray-600 text-hover-primary">
                        {data.notes}
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
                    className={`nav-link text-active-primary pb-4 ${tab === "machines" ? "active" : ""
                      }`}
                    data-bs-toggle="tab"
                    href="#machines"
                    onClick={() => setTab("machines")}
                  >
                    Machine Models ({data.machine?.name ?? '--'})
                  </a>
                </li>
              </ul>

              <div className="tab-content" id="machines">
                <div className="tab-content">
                  <MachineModels tab={tab} models={data.machine_models} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShowContract;
