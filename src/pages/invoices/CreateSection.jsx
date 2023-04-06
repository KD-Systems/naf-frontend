import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import QuotationService from "../../services/QuotationService";
import { Link, useParams } from "react-router-dom";
import Moment from "react-moment";
import InvoiceService from "services/InvoiceService";

const CreateInvoice = () => {
  let { quotationId } = useParams();
  const navigate = useNavigate();
  const [block, setBlock] = useState(false);
  const [quotation, setQuotation] = useState({}); //get quotation details
  const [list, setList] = useState([]);
  const [data, setData] = useState(null);

  const getQuotation = async () => {
    if (quotationId) {
      let res = await QuotationService.get(quotationId);
      setQuotation(res);
    }
  };

  useEffect(() => {
    setList(quotation?.part_items);
    setData({
      quotation_id: quotation?.id,
      company: quotation?.company,
      requisition: quotation?.requisition,
      type: quotation?.requisition?.type,
      vat: quotation?.vat,
      discount: quotation?.discount,
    });
  }, [quotation]);

  //calculation for total and grand total
  useEffect(() => {
    let totalAmount = 0;
    list?.forEach((item) => {
      totalAmount =
        parseInt(totalAmount) +
        parseInt(item?.quantity) * parseInt(item?.unit_value);
    });
    let GrandTotal = parseInt(
      totalAmount * (1 + (data?.vat - data?.discount) / 100)
    );
    setData({
      ...data,
      part_items: list,
      grand_total: GrandTotal,
      sub_total: totalAmount,
    });
  }, [list]);

  const removeItem = (id) => {
    const newList = list.filter((item) => item?.id !== id);
    if (newList?.length > 0) {
      setList(newList);
    } else {
      console.log("cant remove");
    }
  };

  const storeInvoice = async () => {
    setBlock(true);
    await InvoiceService.create(data);
    setBlock(false);
    navigate("/panel/invoices");
  };

  useEffect(() => {
    getQuotation();
  }, [quotationId]);

  return (
    <div className="post d-flex flex-column-fluid" id="content">
      <div className="container-xxl">
        <div className="card">
          <div className="card-body py-20">
            <div className="mw-lg-950px mx-auto w-100">
              <div className="mb-19">
                <div className="row">
                  <div className="col-sm-3">
                    <Link to="#">
                      <img
                        alt="Logo"
                        src="/assets/media/logos/naf3.jpeg"
                        style={{ width: "5rem" }}
                      />
                    </Link>
                  </div>
                  <div className="col-sm-6">
                    <div
                      className="text-sm-center fw-bold fs-4 text-muted "
                      style={{ textAlign: "center", marginLeft: "2rem" }}
                    >
                      <h1>Naf Overseas(PVT.) Ltd.</h1>
                      <p className="text-sm">
                        <small>Head Office:Naya paltan,Dhaka,Bangladesh</small>
                        <br />
                        <small>
                          Tel:44564,Fax:123456,Email:Example@gmail.com,Web:example.com
                        </small>
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-3 text-sm-end">
                    <Link to="#">
                      <img
                        alt="Logo"
                        src="/assets/media/logos/tajima.png"
                        style={{ width: "5rem", marginLeft: "2rem" }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-sm-12 mt-5">
                  <div className="text-sm-center">
                    <h1 className="text-uppercase">Invoice</h1>
                  </div>
                </div>
              </div>

              <div className="">
                <table width="100%">
                  <tr>
                    <td>
                      <h6>
                        <strong>Company Name:</strong>
                        <span className="text-muted">
                          {quotation?.company?.name}
                        </span>
                      </h6>

                      <h6>
                        <strong>Group of Company: </strong>
                        <span className="text-muted">
                          {quotation?.company?.company_group}
                        </span>
                      </h6>
                    </td>
                    <td style={{ marginLeft: "120px" }} width="30%"></td>

                    <td style={{ marginLeft: "120px" }}>
                      <h6>
                        <strong>Date: </strong>
                        <span className="text-muted">
                          <Moment format="D MMMM YYYY">
                            {quotation?.created_at}
                          </Moment>
                        </span>
                      </h6>
                      {/* <h6>
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
                      </h6> */}
                    </td>
                  </tr>
                </table>

                <div className="mt-5">
                  {/* <h6>
                    <strong>Machine Model: </strong>
                    <span className="text-muted">
                      {requisition?.machines?.map((item, index) => (
                        <span key={index}>{item?.model?.name}</span>
                      ))}
                    </span>
                  </h6> */}
                </div>

                <div className="d-flex justify-content-between flex-column flex-md-row">
                  <div className="flex-grow-1 pt-8 mb-13">
                    <div className="table-responsive ">
                      <table className="table">
                        <thead>
                          <tr className="fs-6 fw-bolder text-dark text-uppercase">
                            <th className="min-w-75px pb-9">SL.No</th>
                            <th className="min-w-70px pb-9 text-end">
                              Parts Name
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Parts Number
                            </th>
                            <th className="min-w-80px pb-9 text-end">
                              Qutantity
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list?.map((item, index) => (
                            <tr
                              className="fw-bolder text-gray-700 fs-5 text-end"
                              key={index}
                            >
                              <td className="d-flex align-items-center pb-10">
                                {index + 1}
                              </td>
                              <td>{item?.part?.aliases[0]?.name}</td>
                              <td>{item?.part?.aliases[0]?.part_number}</td>
                              <td>{item?.quantity}</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-sm btn-icon btn-danger"
                                  data-kt-element="remove-item"
                                  onClick={() => removeItem(item?.id)}
                                >
                                  <i className="fa fa-trash"></i>
                                </button>
                              </td>
                            </tr>
                            
                          ))}
                          {data?.type == "purchase_request" && (
                            <>
                              <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                <td colSpan={2}></td>
                                <td>Sub-total</td>
                                <td></td>
                                <td>{data?.sub_total}</td>
                                <td></td>
                              </tr>
                              <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                <td colSpan={2}></td>
                                <td className="align-center justify-content-center">
                                  Vat({data?.vat}%)
                                </td>
                                <td></td>
                                <td>{(data?.sub_total * data?.vat) / 100}</td>
                                <td></td>
                              </tr>
                              <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                <td colSpan={2}></td>
                                <td>Discount({data?.discount}%)</td>
                                <td></td>
                                <td>
                                  {(data?.sub_total * data?.discount) / 100}
                                </td>
                                <td></td>
                              </tr>
                              <tr className="fw-bolder text-gray-700 fs-5 text-end">
                                <td colSpan={2}></td>
                                <td>Grand Total</td>
                                <td></td>
                                <td>{data?.grand_total}</td>
                                <td></td>
                              </tr>
                            </>
                          )}
                        </tbody>
                      </table>
                      <div className="separator separator-dashed"></div>
                      <button
                        className="btn btn-primary mt-5"
                        onClick={() => {
                          storeInvoice();
                        }}
                      >
                        Submit
                      </button>
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

export default CreateInvoice;
