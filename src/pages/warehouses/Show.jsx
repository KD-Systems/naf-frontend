import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import WareHouseService from "services/WareHouseService";
import Moment from "react-moment";
const WareHouseShow = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [warehouse, setWareHouse] = useState({});

  const getWareHouse = async () => {
    setWareHouse(await WareHouseService.get(id));
  };

  useEffect(() => {
    if (id) {
      getWareHouse();
    }
  }, [id]);
  return (
    <div className="d-flex flex-column-fluid">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="card card-custom">
              <div className="card-header h-auto py-4">
                <div className="card-title">
                  <h3 className="card-label">
                    <button
                      className="btn btn-sm btn-dark "
                      style={{ marginRight: "0.75rem" }}
                      onClick={() => navigate(-1)}
                    >
                      <i className="fa fa-arrow-left"></i>Back
                    </button>
                    Details
                  </h3>
                </div>
              </div>

              <div className="card-body py-4">
                {/* <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Id:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {warehouse.id}
                    </span>
                  </div>
                </div> */}
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Name:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {warehouse.name}
                    </span>
                  </div>
                </div>
 
       
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Description:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {warehouse.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card card-custom gutter-b">
              <div className="card-header card-header-tabs-line">
                <div className="card-toolbar">
                  {" "}
                  <div className="card-title">
                    <h3 className="card-label">Parts List</h3>
                  </div>
                </div>
              </div>

              <div className="card-body px-0">
                <div className="card mb-5 mb-xl-8">
                  <div className="card-body py-3">
                    <div className="table-responsive">
                      <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                        <thead>
                          <tr className="fw-bolder text-muted">
                            <th className="w-25px"></th>
                            <th className="min-w-120px">Name</th>
                            <th className="min-w-180px">Machine</th>
                          </tr>
                        </thead>

                        <tbody>
                          {warehouse?.parts?.map((item, index) => (
                            <tr key={index}>
                              <td></td>

                              <td className=" fw-bolder  d-block mb-1 fs-6">
                                {item?.aliases[0]?.name}
                              </td>

                              <td>
                                {item?.aliases?.map((it, index) => (
                                  <Link
                                    to={`/panel/machines/${it?.machine?.id}`}
                                    className="text-dark fw-bolder text-hover-primary d-block mb-1"
                                    key={index}
                                  >
                                    {it?.machine?.name}
                                  </Link>
                                ))}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseShow;
