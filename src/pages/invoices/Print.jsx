import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoiceService from "services/InvoiceService";

const PrintInvoice = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [total, setTotal] = useState(0);

  const getInvoice = async () => {
    let res = await InvoiceService.get(id);
    setInvoice(res);
    setTotal(
      res?.part_items?.reduce(
        (sum, partItem) => sum + parseFloat(partItem.total_value),
        0
      )
    );
    let content = document.getElementById("content").innerHTML;
    document.body.innerHTML = content;
    window.print();
    navigate("/panel/invoices/" + id);
  };

  useEffect(() => {
    if (id) getInvoice();
  }, [id]);
  return (
    <div className="post" id="content">
      <div className="container-xxl">
        <div className="card" style={{backgroundColor:'#f5f8fa'}}>
          <div className="card-body">
            <div className="mw-lg-950px mx-auto w-100" >
              <div className="mb-4">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="border border-1 border-dark text-center p-3">
                          <Link to="#">
                            <img
                              alt="Logo"
                              src="/assets/media/logos/naf3.jpeg"
                              style={{ width: "6rem" }}
                            />
                          </Link>
                          <h3 className="mt-2">Stitch & Color Technology</h3>
                          <p>
                          Tajima Complex , Amloki bagan , Akran , Birulia , Savar , Dhaka.
                            <br /> Dhaka-1230 <br />
                            Bangladesh
                          </p>
                        </div>
                      </td>
                      <td>
                        <div className="px-5">
                          <div style={{ fontSize: 36 }}>INVOICE</div>
                          <div className="d-flex justify-content-between">
                            <div className="">
                              <div className="py-2">
                                <h5>Date:</h5>
                                <p>
                                  <Moment format="D MMMM YYYY">
                                    {invoice?.invoice_date}
                                  </Moment>
                                </p>
                              </div>
                              <div>
                                <h5>Invoice to:</h5>
                                <h2>{invoice?.company?.name}</h2>
                              </div>
                              
                            </div>
                            <div className="px-5">
                              <div>
                                <h5>Invoice No: {invoice?.invoice_number}</h5>
                              </div>
                              <div>
                                <h5>Approved by :</h5>
                                <span>Tajima Nawaz, Director,Naf Group</span><br/> 
                                <span>Email:tajima@nafgroup.org</span><br/>
                              </div>
                              <div>
                                <h5>Payment Mode: <span>{invoice?.payment_mode?.replaceAll("_", " ")?.capitalize()}</span></h5>
                                <h5>Issued By: <span>{invoice?.created_by?.replaceAll("_", " ")?.capitalize()}</span></h5>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="d-flex justify-content-between flex-column flex-md-row">
                <div className="flex-grow-1 pt-8">
                  <div className="table-responsive ">
                    <table className="table">
                      <thead className="m-20">
                        <tr className="fs-6 fw-bolder text-dark text-uppercase">
                          <th className="text-center">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#FD7E14",
                                color: "#fff",
                              }}
                            >
                              SL.No
                            </div>
                          </th>
                          <th className="text-start w-50 ">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#009EF7",
                                color: "#fff",
                              }}
                            >
                              Part Name
                            </div>
                          </th>
                          <th className="text-center">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#FD7E14",
                                color: "#fff",
                              }}
                            >
                              Qty
                            </div>
                          </th>
                          <th className="text-center">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#FD7E14",
                                color: "#fff",
                              }}
                            >
                              Price
                            </div>
                          </th>
                          <th className="text-center">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#009EF7",
                                color: "#fff",
                              }}
                            >
                              Total
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {invoice?.part_items?.map((item, idx) => {
                          return (
                            <tr
                              className="text-dark border-bottom border-1 border-dark"
                              key={idx}
                            >
                              <td className=" text-center">{idx + 1}</td>
                              <td className="text-start">
                                <h6>{item?.part?.aliases[0].name}</h6>
                                <div>{item?.part?.aliases[0].part_number}</div>
                              </td>
                              <td className="text-center">{item?.quantity}</td>
                              <td className=" text-center">
                                {item?.unit_value}
                              </td>
                              <td className="text-center">
                                {item?.total_value}
                              </td>
                            </tr>
                          );
                        })}

                        <tr>
                          <td className=" text-center"></td>
                          <td className="text-start"></td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <h4>Sub-Total</h4>
                          </td>
                          <td className="text-center">
                            <h4>{total} TK.</h4>
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center"></td>
                          <td className="text-start"></td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <h4>VAT ({invoice?.vat})%</h4>
                          </td>
                          <td className="text-center border-1 border-dark">
                            <h4>
                              {Math.round(total*invoice.vat/100) ?? 0} TK.
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td className=" text-center"></td>
                          <td className="text-start"></td>
                          <td className="text-center"></td>
                          <td className="text-center">
                            <h4>Discount ({invoice?.discount})%</h4>
                          </td>
                          <td className="text-center border-bottom border-1 border-dark">
                            <h4>
                              {Math.round(total*invoice.discount/100) ?? 0} TK.
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td></td>
                          <td className="text-center" colSpan={2}>
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#FD7E14",
                                color: "#fff",
                                fontSize: 16,
                              }}
                            >
                              Total
                            </div>
                          </td>
                          <td className="text-center">
                            <div
                              className="p-1"
                              style={{
                                backgroundColor: "#FD7E14",
                                color: "#fff",
                                fontSize: 16,
                              }}
                            >
                              {invoice?.grand_total}
                              TK.
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between flex-row flex-md-row">
                <div className="flex-grow-1 pt-2">
                  <div className="table-responsive fs-9">
                    <p>
                      Terms & conditions :<br />
                      Brand : Tajima <br />
                      Origin: Japan
                      <br />
                      {invoice?.requisition?.type == "purchase_request" && (
                        <>
                            Payment mode: {invoice?.requisition?.payment_mode}
                        </>
                      )}
                      <br />
                      Feel free to contact us, if you need any further
                      clarification/information or comments related to this
                      Mail.
                      <br />
                      <br />
                      Thanks & Best Regards
                      <br />
                      <br />
                      <span className="d-flex justify-content-between">
                        <span>
                          Safil Nawaz Chowdhury
                          <br />
                          Deputy Managing Director
                          <br />
                          NAF GROUP (Stitch & Color Technology)
                          <br />
                          Mail ID: safil@nafgroup.org
                        </span>
                        <span>
                          Prepared by
                          <br />
                          <br />
                          <br />
                          -------------
                        </span>
                        <span>
                          Approved by
                          <br />
                          <br />
                          <br />
                          -------------
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="fixed-bottom mb-10 text-center border-top border-1 border-dark">
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
  );
};

export default PrintInvoice;
