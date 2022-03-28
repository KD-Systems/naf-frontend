import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import RequisitionService from "../../services/RequisitionService";
const PrintRequisition = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [requisition, setRequisition] = useState({});
  const getRequisition = async () => {
    let res = await RequisitionService.get(id);
    setRequisition(res);
  };
  useEffect(() => {
    if (id) getRequisition();
  }, [id]);
  return (
    <div className="post d-flex flex-column-fluid" id="kt_post">
      <div id="kt_content_container" className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="d-flex justify-content-between flex-column flex-sm-row mb-19">
                <div className="text-left">
                  {" "}
                  <Link to="#">
                    <img
                      alt="Logo"
                      src="/assets/media/logos/naf3.jpeg"
                      style={{ width: "50%" }}
                    />
                  </Link>
                </div>

                <div className="text-sm-center fw-bold fs-4 text-muted ">
                  <h1>Naf Overseas(PVT.) Ltd.</h1>
                  <p className="text-sm">
                    <small>Head Office:Naya paltan,Dhaka,Bangladesh</small>
                  </p>
                  <p className="text-sm" style={{ lineHeight: "0" }}>
                    <small>
                      Tel:44564,Fax:sddsf,Email:asd@gmail.com,Web:example.com
                    </small>
                  </p>
                </div>

                <div className="text-sm-end">
                  <div className="text-sm-end fw-bold fs-4 text-muted ">
                    <div></div>
                    <Link to="#">
                      <img
                        alt="Logo"
                        src="/assets/media/logos/tajima.png"
                        style={{ width: "35%" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="border-bottom pb-12">
                <div className="row">
                  <div className="col-sm-6">
                    <h6>
                      <strong>Company Name: </strong>
                      <span className="text-muted">
                        {requisition?.company?.name}
                      </span>
                    </h6>
                    <h6>
                      <strong>Group of Company: </strong>
                      <span className="text-muted">
                        {requisition?.company?.company_group}
                      </span>
                    </h6>
                  </div>
                  <div className="col-sm-6 text-sm-end">
                    {" "}
                    <h6>
                      <strong>Engineer Name: </strong>
                      <span className="text-muted">
                        {requisition?.engineer?.name}
                      </span>
                    </h6>
                    <h6>
                      <strong>Email: </strong>
                      <span className="text-muted">
                        {requisition?.engineer?.email}
                      </span>
                    </h6>
                  </div>
                </div>

                <div className="mt-5">
                  <h6>
                    <strong>Machine Model: </strong>
                    <span className="text-muted">
                      {requisition?.machines?.map((item, index) => (
                        <span key={index}>{item?.machine_model?.name}</span>
                      ))}
                    </span>
                  </h6>
                </div>
                {/* Machine Problems */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Machine Problem Details
                    </h6>
                    <p className="">{requisition?.machine_problems}</p>
                  </div>
                </div>
                {/* Solutions */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-4 mb-13">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Solutions/Counter Measure
                    </h6>
                    <p className="">{requisition?.solutions}</p>
                  </div>
                </div>
                {/* Reason Of Trouble */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-4 mb-13">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Reasons Of trouble
                    </h6>
                    <p className="">{requisition?.reason_of_trouble}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <div className="table-responsive border-bottom mb-14">
                      <table className="table">
                        <thead>
                          <tr className="border-bottom fs-6 fw-bolder text-muted text-uppercase">
                            <th className="min-w-175px pb-9">SL.No</th>
                            <th className="min-w-70px pb-9 text-end">
                              Parts Name
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Parts Number
                            </th>
                            <th className="min-w-100px pe-lg-6 pb-9 text-end">
                              Quantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td className="d-flex align-items-center pt-11">
                              <i className="fa fa-genderless text-danger fs-1 me-2"></i>
                              Creative Design
                            </td>
                            <td className="pt-11">80</td>
                            <td className="pt-11">$40.00</td>
                            <td className="pt-11 fs-5 pe-lg-6 text-dark fw-boldest">
                              $3200.00
                            </td>
                          </tr>
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td className="d-flex align-items-center">
                              <i className="fa fa-genderless text-success fs-1 me-2"></i>
                              Logo Design
                            </td>
                            <td>120</td>
                            <td>$40.00</td>
                            <td className="fs-5 text-dark fw-boldest pe-lg-6">
                              $4800.00
                            </td>
                          </tr>
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td className="d-flex align-items-center pb-10">
                              <i className="fa fa-genderless text-primary fs-1 me-2"></i>
                              Web Development
                            </td>
                            <td>210</td>
                            <td>$60.00</td>
                            <td className="fs-5 text-dark fw-boldest pe-lg-6">
                              $12600.00
                            </td>
                          </tr> */}
                          {requisition?.part_items?.map((item, index) => (
                            <tr className="fw-bolder text-gray-700 fs-5 text-end">
                              <td className="d-flex align-items-center pb-10">
                                {item?.id}
                              </td>
                              <td>{item?.part?.aliases[0].name}</td>
                              <td>{item?.part?.aliases[0].part_number}</td>
                              <td className="fs-5 text-dark fw-boldest pe-lg-6">
                                {item?.quantity}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="d-flex flex-column mw-md-300px w-100">
                      <div className="fw-bold fs-5 mb-3 text-dark00">
                        BANK TRANSFER
                      </div>

                      <div className="d-flex flex-stack text-gray-800 mb-3 fs-6">
                        <div className="fw-bold pe-5">Account Name:</div>

                        <div className="text-end fw-norma">Barclays UK</div>
                      </div>

                      <div className="d-flex flex-stack text-gray-800 mb-3 fs-6">
                        <div className="fw-bold pe-5">Account Number:</div>

                        <div className="text-end fw-norma">1234567890934</div>
                      </div>

                      <div className="d-flex flex-stack text-gray-800 fs-6">
                        <div className="fw-bold pe-5">Code:</div>

                        <div className="text-end fw-norma">BARC0032UK</div>
                      </div>
                    </div>
                  </div>

                  <div className="border-end d-none d-md-block mh-450px mx-9"></div>

                  <div className="text-end pt-10">
                    <div className="fs-3 fw-bolder text-muted mb-3">
                      TOTAL AMOUNT
                    </div>
                    <div className="fs-xl-2x fs-2 fw-boldest">$20,600.00</div>
                    <div className="text-muted fw-bold">Taxes included</div>

                    <div className="border-bottom w-100 my-7 my-lg-16"></div>

                    <div className="text-gray-600 fs-6 fw-bold mb-3">
                      INVOICE TO.
                    </div>
                    <div className="fs-6 text-gray-800 fw-bold mb-8">
                      Iris Watson.
                      <br />
                      Fredrick Nebraska 20620
                    </div>

                    <div className="text-gray-600 fs-6 fw-bold mb-3">
                      INVOICE NO.
                    </div>
                    <div className="fs-6 text-gray-800 fw-bold mb-8">56758</div>

                    <div className="text-gray-600 fs-6 fw-bold mb-3">DATE</div>
                    <div className="fs-6 text-gray-800 fw-bold">
                      12 May, 2020
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-stack flex-wrap mt-lg-20 pt-13">
                <div className="my-1 me-5">
                  <button
                    type="button"
                    className="btn btn-success my-1 me-12"
                    onClick="window.print();"
                  >
                    Print Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintRequisition;
