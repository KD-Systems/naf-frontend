import React, { Fragment, useState, useEffect } from "react";
import Moment from "react-moment";
import { useParams, Link } from "react-router-dom";
import ClientService from "services/ClientService";
const Contracts = () => {
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const [data, setData] = useState(null);

  const getClientContracts = async () => {
    setData(await ClientService.getContract(id));
    setLoading(false);
  };

  useEffect(() => {
    if (id) getClientContracts();
  }, [id]);

  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div className="card mb-5 mb-xl-8">
          <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label fw-bolder fs-3 mb-1">Contracts</span>
            </h3>
          </div>

          <div className="card-body py-3">
            <div className="table-responsive">
              <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                <thead>
                  <tr className="fw-bolder text-muted">
                    <th className="min-w-120px">Machine</th>
                    <th className="min-w-50px">Contract Type</th>
                    <th className="min-w-80px">Contract Status</th>
                    <th className="min-w-80px">Expiration Date</th>
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td>
                        <i className="fas fa-cog fa-spin"></i> Loading...
                      </td>
                    </tr>
                  ) : null}

                  <tr>
                    <td>
                      {data?.machines?.map((item, index) => (
                        <div className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">
                          <span
                            //    to={`/panel/companies/machines/${item?.id}`}
                            // to="#"
                            key={index}
                          >
                            {item?.machine?.name}
                          </span>
                        </div>
                      ))}
                    </td>

                    <td>
                      {" "}
                      {data?.contracts?.map((item, index) => (
                        <div className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">
                          <span
                            className={
                              item?.is_foc
                                ? "badge badge-light-warning"
                                : "badge badge-light-info"
                            }
                          >
                            {item?.is_foc ? "FOC" : "PAID"}
                          </span>
                        </div>
                      ))}
                    </td>
                    <td>
                    {data?.contracts?.map((item, index) => (
                        <div className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">
                          <span
                        className={
                          item?.status
                            ? "badge badge-light-success"
                            : "badge badge-light-danger"
                        }
                      >
                        {item?.status ? "active" : "inactive"}
                      </span>
                        </div>
                      ))}
                     
                    </td>
                    <td>

                    {data?.contracts?.map((item, index) => (
                        <div className="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">
                                <span className="text-gray-600 text-hover-primary">
                        <Moment format="YYYY-MM-DD">{item?.end_date}</Moment>
                        {item?.has_expired ? (
                          <div className="badge badge-light-danger">
                            Expired
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                        </div>
                      ))}
       
                     
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;
