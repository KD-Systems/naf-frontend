import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import InvoiceService from "services/InvoiceService";
const PrintInvoice = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [total, setTotal] = useState(0);


  const getInvoice = async () => {
    let res = await InvoiceService.get(id);
    setInvoice(res);
    let content = document.getElementById("content").innerHTML;
    document.body.innerHTML = content;
    setTimeout(() => {
      window.print();
    }, 500);
  };


  useEffect(() => {
    if (id) getInvoice();
  }, [id]);
  return (
    <div className="post" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
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
                        <h1>Naf Overseas(PVT.) Ltd.</h1>
                        <p className="text-sm">
                          <small>
                            Head Office:Naya paltan,Dhaka,Bangladesh
                          </small>
                          <br />
                          <small>
                            Tel:44564,Fax:sddsf,Email:asd@gmail.com,Web:example.com
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
                            src={invoice?.company?.logo_url}
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
                      <td className="text-left" ></td>
                      <td className="text-center" ><h3>INVOICE</h3><p className="text-muted">#{invoice?.invoice_number}</p></td>
                      <td className="text-end" ></td>
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
                          {invoice?.company?.name}
                        </span>
                      </h6>

                      <h6>
                        <strong>Group of Company: </strong>
                        <span className="text-muted">
                          {invoice?.company?.company_group}
                        </span>
                      </h6>
                    </td>
                    <td style={{ marginLeft: "120px" }} width="30%"></td>

                    <td style={{ marginLeft: "120px" }}>
                      <h6>
                        <strong>Invoice Date: </strong>
                        <span className="text-muted">
                          <Moment format="D MMMM YYYY">
                            {invoice?.invoice_date}
                          </Moment>
                        </span>
                      </h6>
                    </td>
                  </tr>
                  </tbody>
                </table>

                <div className="mt-5">
                  <h6>
                    <strong>Machine Model: </strong>
                    <span className="text-muted">
                      {invoice?.requisition?.machines?.map((item, index) => (
                        <span key={index}>{item?.machine_model?.name} </span>
                      ))}
                    </span>
                  </h6>
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8">
                    <div className="table-responsive ">
                      <div className="border-bottom pb-12">
                        <table className="table">
                          <thead>
                            <tr className="fs-6 fw-bolder text-dark text-uppercase">
                              <th className="min-w-15px pb-9">SL.No</th>
                              <th className="min-w-70px pb-9 text-end">
                                Parts Name
                              </th>
                              <th className="min-w-80px pb-9 text-end">
                                Parts Number
                              </th>
                              <th className="min-w-100px pe-lg-6 pb-9 text-end">
                                Quantity
                              </th>
                              <th className="min-w-100px pe-lg-6 pb-9 text-end">
                                Unit Price
                              </th>
                              <th className="min-w-100px pe-lg-6 pb-9 text-end">
                                Total Price
                              </th>
                            </tr>
                          </thead>

                          <tbody>
                            {invoice?.part_items?.map((item, index) => (
                              <tr
                                className="fw-bolder text-gray-700 fs-5 text-end"
                                key={index}
                              >
                                <td className="d-flex align-items-center pb-10">
                                  {index + 1}
                                </td>
                                <td>{item?.part?.aliases[0].name}</td>
                                <td>{item?.part?.aliases[0].part_number}</td>
                                <td className="fs-5 text-dark fw-boldest pe-lg-6">
                                  {item?.quantity}
                                </td>
                                <td className="fs-5 text-dark fw-boldest pe-lg-6">
                                  {item?.unit_value}
                                </td>
                                <td className="fs-5 text-dark fw-boldest pe-lg-6">
                                  {item?.total_value}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div className="fs-5 text-dark fw-boldest pe-lg-6 text-end">
                        
                        TOTAL:  
                        <span className="text-muted">   {
                          invoice?.part_items?.reduce((sum,partItem) => sum + parseFloat(partItem.total_value),0)
                        } TK.</span>
                     
                        
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

export default PrintInvoice;
