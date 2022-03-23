import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Moment from "react-moment";
import RequisitionService from "../../services/RequisitionService";
const ShowRequisition = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [requisition, setRequisition] = useState({});
  const [partItems, setPartItems] = useState([]);
  const getRequisition = async () => {
    setRequisition(await RequisitionService.get(id));
  };


  useEffect(() => {
    if (id) {
      getRequisition();
     
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
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Company:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.company?.name}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Machine:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.machines?.map((item, index) => (
                        <span key={index}>{item?.machine_model?.name}</span>
                      ))}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Engineer:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.engineer?.name}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">
                    Expected Delivery:
                  </label>
                  <div className="col-8">
                    <span className="form-control-plaintext">
                      <span className="label label-inline label-danger label-bold">
                        <Moment format="D MMMM YYYY">
                          {requisition?.expected_delivery}
                        </Moment>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Priority:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.priority}
                    </span>
                  </div>
                </div>

                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Type:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.type?.replaceAll("_", " ").capitalize()}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Updated At:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      <Moment format="D MMMM YYYY">
                        {requisition?.updated_at}
                      </Moment>
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Ref Number:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.ref_number}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">
                    Reason Of Trouble:
                  </label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.reason_of_trouble}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Solutions:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.solutions}
                    </span>
                  </div>
                </div>
                <div className="form-group row my-2">
                  <label className="col-4 col-form-label">Remarks:</label>
                  <div className="col-8">
                    <span className="form-control-plaintext font-weight-bolder">
                      {requisition?.remarks}
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
                    <h3 className="card-label">Part Item List</h3>
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
                            <th className="min-w-50px">Part Name</th>
                            <th className="min-w-120px">Part Number</th>
                            <th className="min-w-120px">Quantity</th>
                            <th className="min-w-120px">Unit Value</th>
                            <th className="min-w-120px">Total Value</th>
                          </tr>
                        </thead>

                        <tbody>
                          {requisition?.part_items?.map((item, index) => (
                            <tr key={index}>
                              <td></td>
                              <td className="">
                                <span>{item?.part?.aliases[0].name}</span>
                              </td>

                              <td className=" fw-bolder  d-block mb-1 fs-6">
                              <span>{item?.part?.aliases[0].part_number}</span>
                              </td>
                              <td className=" fw-bolder  d-block mb-1 fs-6"><span>{item?.quantity}</span></td>
                              <td className=" fw-bolder  d-block mb-1 fs-6"><span>{item?.unit_value}</span></td>
                              <td className=" fw-bolder  d-block mb-1 fs-6"><span>{item?.total_value} Tk.</span></td>
                            
                            </tr>
                          ))}
                          {/* {requisition?.part_items?.map((item,index)=>(
                          <tr>
                          <span key="index">{item?.part?.aliases?.map((it,index)=>(
                              <>  <td>{it?.name}</td>
                              <td>{it?.part_number}</td></>
                            
                          ))}</span>
                          </tr>
                      ))} */}
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

export default ShowRequisition;
