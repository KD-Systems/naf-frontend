import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import ClientRequisitionService from "services/clientServices/ClientRequisitionService";
const PrintRequisition = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [requisition, setRequisition] = useState({});
  const getRequisition = async () => {
    let res = await ClientRequisitionService.get(id);
    setRequisition(res);
    let content = document.getElementById("content").innerHTML;
    document.body.innerHTML = content;
    setTimeout(() => {
      window.print();
    }, 500);
  };
  useEffect(() => {
    if (id) getRequisition();
  }, [id]);

  return (
    <div className="post" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-10">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-19">
                <table>
                  <tr>
                    <td>
                      <div className="">
                        <Link to="#">
                          <img
                            alt="Logo"
                            src="/assets/media/logos/naf3.jpeg"
                            style={{ width: "5rem" }}
                          />
                        </Link>
                      </div>
                    </td>
                    <td>
                    <div
                        className="text-sm-center fw-bold fs-4 text-muted "
                        style={{ textAlign: "center", marginLeft: "6rem" }}
                      >
                        <h1>Stitch & Color Technology</h1>
                        <p className="text-sm">
                          <small>
                            Factory address: Tajima Complex , Amloki bagan , Akran , Birulia , Savar , Dhaka.
                          </small>
                          <br />
                          <small>
                            Tel: 44564, Email: nafgroup@dhaka.net, Web: www.nafgroup.org 
                          </small>
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="text-sm-end fw-bold fs-4 text-muted "
                      style={{ textAlign: "center", marginLeft: "3rem" }}>
                        <div></div>
                        <Link to="#">
                          <img
                            alt="Logo"
                            src={requisition?.company?.logo_url}
                            style={{ width: "5rem", marginLeft: "2rem" }}
                          />
                        </Link>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>

              <div className="">
                <table width="100%">
                  <tr>
                    <td>
                      <h6>
                        <strong>Company Name:</strong>
                        <span className="text-muted">
                          {requisition?.company?.name}
                        </span>
                      </h6>

                      <h6>
                        <strong>Company Email: </strong>
                        <span className="text-muted">
                          {requisition?.company?.email}
                        </span>
                      </h6>

                      <h6>
                        <strong>Issued By: </strong>
                        <span className="text-muted">
                          {requisition?.created_by}
                        </span>
                      </h6>
                    </td>
                    <td style={{marginLeft:"120px"}} width="30%"></td>
                  

                    <td style={{marginLeft:"120px"}}>
                      
                      <h6>
                        <strong>Date: </strong>
                        <span className="text-muted">
                          <Moment format="D MMMM YYYY">
                            {requisition?.created_at}
                          </Moment>
                        </span>
                      </h6>
                      <h6>
                        <strong>Phone: </strong><br/>
                        <span className="text-muted">
                          01719753294
                        </span><br/>
                        <span className="text-muted">
                          01719753294
                        </span>
                      </h6>
                    </td>
                  </tr>
                </table>

                <div className="mt-5">
                  <h6>
                    <strong>Machine Model: </strong>
                    <span className="text-muted">
                      {requisition?.machines?.map((item, index) => (
                        <span key={index} className="badge badge-light-info ">
                        {item?.model?.name}{" "}
                      </span>
                      ))}
                    </span>
                  </h6>
                </div>
                {/* Machine Problems */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-5 mb-8">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Machine Problem Details
                    </h6>
                    <p className="">{requisition?.machine_problems}</p>
                  </div>
                </div>
                {/* Solutions */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-4 mb-8">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Solutions/Counter Measure
                    </h6>
                    <p className="">{requisition?.solutions}</p>
                  </div>
                </div>
                {/* Reason Of Trouble */}
                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-4 mb-8">
                    <h6 className="" style={{ textDecoration: "underline" }}>
                      Reasons Of trouble
                    </h6>
                    <p className="">{requisition?.reason_of_trouble}</p>
                  </div>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-2">
                    <div className="table-responsive ">
                      <table className="table">
                        <thead className="m-20">
                          <tr className="fs-6 fw-bolder text-dark text-uppercase">
                            <th className="text-center">
                              <div className="p-1" style={{ backgroundColor: "#FD7E14", color: "#fff" }} > SL.No </div>
                            </th>
                            <th className="text-start w-50 ">
                              <div className="p-1" style={{ backgroundColor: "#009EF7", color: "#fff" }} > Part Name </div>
                            </th>
                            <th className="text-center">
                              <div className="p-1" style={{ backgroundColor: "#FD7E14", color: "#fff" }} > Number </div>
                            </th>
                            <th className="text-center">
                              <div className="p-1" style={{ backgroundColor: "#FD7E14", color: "#fff" }} > Quantity </div>
                            </th>
                            <th className="text-center">
                              <div className="p-1" style={{ backgroundColor: "#009EF7", color: "#fff"}} > Remarks </div>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          {requisition?.part_items?.map((item, idx) => {
                            return (
                              <tr className="text-dark border-bottom border-1 border-dark" key={idx} >
                                <td className=" text-center">{idx + 1}</td>
                                <td className="text-start"> <h6>{item?.part?.aliases[0].name}</h6></td>
                                <td><div>{item?.part?.aliases[0].part_number}</div></td>
                                <td className="text-center">{item?.quantity}</td>
                                <td className=" text-center"> {item?.remarks ? item?.remarks : '--'} </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="flex-grow-1 pt-2">
                  <div className="table-responsive ">
                    <p>
                      Terms & conditions :<br />
                      Brand : Tajima <br />
                      Origin: Japan
                      <br />
                      Payment mode: Cash or cheque have to be paid before parts
                      delivery <br />
                      validity:This quotation is valid for 07 days . Price might
                      vary after validity period expired. <br />
                      <br />
                      Feel free to contact us, if you need any further
                      clarification/information or comments related to this
                      Mail.
                      <br />
                      <br />
                      Thanks & Best Regards
                      <br />
                      <br />
                      Safil Nawaz Chowdhury
                      <br />
                      Deputy Managing Director
                      <br />
                      NAF GROUP (Stitch & Color Technology)
                      <br />
                      Mail ID: safil@nafgroup.org
                      <br />
                      01919331919
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="fixed-bottom mb-10 text-center border-top border-1 border-dark mt-3">
                <div className="d-flex flex-row justify-content-evenly">
                <div className="d-flex flex-row">
                    <div className="m-2 p-2 border border-1 rounded-circle border-dark">
                      <span>
                        <img
                          src="https://img.icons8.com/ios/344/city-buildings.png"
                          style={{ height: 35, weight: 35 }}
                        />
                      </span>
                    </div>
                    <div className="pt-2 text-start">
                      <h4>Central Office</h4>
                      <span>Tajima Complex, Amloki bagan,</span><br/><span> Akran, Birulia, Savar, Dhaka.</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="m-2 p-2 border border-1 rounded-circle border-dark">
                      <span>
                        <img
                          src="https://img.icons8.com/ios/344/phone-disconnected.png"
                          style={{ height: 35, weight: 35 }}
                        />
                      </span>
                    </div>
                    <div className="pt-2 text-start">
                      <h4>Call Center</h4>
                      <span>01909045764</span><br/><span>01719753294</span><br/><span>01783424112</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className="m-2 p-2 border border-1 rounded-circle border-dark">
                      <span>
                        <img
                          src="https://img.icons8.com//344/question-mark--v1.png"
                          style={{ height: 35, weight: 35 }}
                        />
                      </span>
                    </div>
                    <div className="pt-2 text-start">
                      <h4>Help Support</h4>
                      <p>info@nafgroup.org</p>
                    </div>
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

export default PrintRequisition;
