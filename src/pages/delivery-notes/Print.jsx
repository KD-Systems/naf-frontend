import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
import Barcode from "react-barcode";
const PrintDeliveryNotes = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [deliveryNote, setDeliveryNote] = useState({});
  const [total, setTotal] = useState(0);

  const getDeliveryNotes = async () => {
    let res = await DeliverNoteService.get(id);
    setDeliveryNote(res);
    
    let content = document.getElementById("content").innerHTML;
    document.body.innerHTML = content;
    setTimeout(() => {
      window.print();
    }, 500);
  };
  useEffect(() => {
    if (id) getDeliveryNotes();
  }, [id]);
  return (
    <div className="post" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-4">
                <table>
                  <tbody>
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
                          Tajima Complex, Amloki bagan, Akran, Birulia, Savar, Dhaka.
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
                            src={deliveryNote?.company?.logo_url}
                            style={{ width: "5rem", marginLeft: "2rem" }}
                          />
                        </Link>
                      </div>
                    </td>


                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mb-10">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td className="text-left"></td>
                      <td className="text-center">
                        <h3>DELIVERY NOTE</h3>
                        <p className="text-muted">#{deliveryNote?.dn_number}</p>
                        <span>
                        <Barcode 
                            value={deliveryNote?.dn_number}
                            height= "50"
                            format= "CODE128"
                            className="w-100"
                            />
                            </span>
                      </td>
                      <td className="text-end"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="">
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <h6>
                          <strong>Company Name:</strong>
                          <span className="text-muted">
                            {deliveryNote?.company?.name}
                          </span>
                        </h6>

                        <h6>
                        <strong>Issued By: </strong>
                        <span className="text-muted">
                          {deliveryNote?.created_by}
                        </span>
                      </h6>
                      </td>
                      <td style={{ marginLeft: "120px" }} width="30%"></td>

                      <td style={{ marginLeft: "120px" }}>
                        <h6>
                          <strong>Delivery Date: </strong>
                          <span className="text-muted">
                            <Moment format="D MMMM YYYY">
                              {deliveryNote?.deliver_date}
                            </Moment>
                          </span>
                        </h6>

                        <h6>
                          <strong>Invoice No: </strong>
                          <span className="text-muted">
                            #{deliveryNote?.invoice?.invoice_number}
                          </span>
                        </h6>

                        <h6>
                          <strong>Approved by: </strong><br/>
                          <span className="text-muted">
                            <span>Tajima Nawaz, Director,Naf Group</span><br/>
                            <span>Email:tajima@nafgroup.org</span><br/>
                            <span>Contact No: 01719753294</span><br/>
                          </span>
                        </h6>
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* 
            <div className="mt-5">
              <h6>
                <strong>Machine Model: </strong>
                <span className="text-muted">git
                  {invoice?.requisition?.machines?.map((item, index) => (
                    <span key={index}>{item?.machine_model?.name} </span>
                  ))}
                </span>
              </h6>
            </div> */}

            

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
                          {deliveryNote?.part_items?.map((item, idx) => {
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

                <hr/>

                <div className="d-flex justify-content-between flex-column flex-md-row">
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
              </div>

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
                      <p>67 Nayapaltan, Dhaka-1000</p>
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
                      <p>+8802-9349934</p>
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

export default PrintDeliveryNotes;
