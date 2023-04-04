import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PermissionAbility from "helpers/PermissionAbility";

const InvoicePartItems = ({ tab, active, invoice }) => {
  const { id } = useParams();
  return (
    <div
      className={`tab-pane fade ${tab == "part_items" ? "active show" : ""}`}
      id="part_items"
      role="tabpanel"
    >
      <div className="d-flex flex-column gacompanyIdgap-lg-10">
        <div className="card card-custom gutter-b">
          <div className="card-header card-header-tabs-line">
            <div className="card-toolbar">
              <div className="card-title">
                <h3 className="card-label">Part Items</h3>
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
                        <th className="min-w-50px">Part Name</th>
                        <th className="min-w-120px">Part Number</th>
                        <th className="min-w-120px">Quantity</th>
                        <th className="min-w-120px">Unit </th>
                        <th className="min-w-120px">Total </th>
                      </tr>
                    </thead>

                    <tbody>
                      {invoice?.part_items?.map((item, index) => (
                        <tr key={index}>
                          <td className="">
                            <Link
                              to={"/panel/parts/" + item?.part?.id}
                              className="text-dark fw-bolder text-hover-primary"
                            >
                              {item?.part?.aliases[0].name}{" "}
                              <span className="text-primary">
                                {item?.part?.is_foc == true ? "Foc" : "Non foc"}
                              </span>
                            </Link>
                          </td>
                          <td className=" fw-bolder mb-1 fs-6">
                            <span>{item?.part?.aliases[0].part_number}</span>
                          </td>

                          <td>
                            <span>{item.quantity}</span>
                          </td>
                          <td className=" fw-bolder mb-1 fs-6">
                            <span>{item?.unit_value}</span>
                          </td>

                          <td className=" fw-bolder mb-1 fs-6">
                            <span>
                              {invoice?.requisition?.type != "claim_report"
                                ? parseInt(item.total_value)
                                : 0}{" "}
                              TK.
                            </span>
                          </td>
                        </tr>
                      ))}
                      {invoice?.requisition?.type == "purchase_request" && (
                        <>
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td colSpan={2}></td>
                            <td>Sub-total</td>
                            <td></td>
                            <td>{invoice?.sub_total}</td>
                            <td></td>
                          </tr>
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td colSpan={2}></td>
                            <td className="align-center justify-content-center">
                              Vat({invoice?.vat}%)
                            </td>
                            <td></td>
                            <td>
                              {(invoice?.sub_total * invoice?.vat) / 100 ?? "0"}
                            </td>
                            <td></td>
                          </tr>
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td colSpan={2}></td>
                            <td className="align-center justify-content-center">
                              Discount({invoice?.discount}%)
                            </td>
                            <td></td>
                            <td className="text-danger">
                              {(invoice?.sub_total * invoice?.discount) / 100 ??
                                "0"}
                            </td>
                            <td></td>
                          </tr>
                          {invoice?.return_part?.return_part_items?.length > 0 && (
                            <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td colSpan={2}></td>
                            <td className="align-center justify-content-center">
                                Return part amount
                            </td>
                            <td></td>
                            <td className="text-danger">
                              {invoice?.grand_total - invoice?.return_part?.grand_total ??
                                "0"}
                            </td>
                            <td></td>
                          </tr>
                          )}
                          <tr className="fw-bolder text-gray-700 fs-5 text-end">
                            <td colSpan={2}></td>
                            <td>Grand Total</td>
                            <td></td>
                            <td>{invoice?.grand_total}</td>
                            <td></td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {invoice?.return_part?.return_part_items?.length > 0 && (
        <div className="d-flex flex-column gacompanyIdgap-lg-10 mt-3">
          <div className="card card-custom gutter-b">
            <div className="card-header card-header-tabs-line">
              <div className="card-toolbar">
                <div className="card-title">
                  <h3 className="card-label">Return Part Items <span>({invoice?.return_part?.type})</span></h3>
                </div>
              </div>
              <div className="align-items-center">
                <span className="text-end">
                  <PermissionAbility permission="return_invoices_print">
                    <Link
                      to={"/panel/return-invoices/" + invoice.id + "/print"}
                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 mt-5"
                      target="_blank"
                    >
                      <i className="fa fa-print"></i>
                    </Link>
                  </PermissionAbility>
                </span>
              </div>
            </div>

            <div className="card-body px-0">
              <div className="card mb-5 mb-xl-8">
                <div className="card-body py-3">
                  <div className="table-responsive">
                    <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                      <thead>
                        <tr className="fw-bolder text-muted">
                          <th className="min-w-50px">Part Name</th>
                          <th className="min-w-120px">Part Number</th>
                          <th className="min-w-120px">Quantity</th>
                          <th className="min-w-120px">Unit Price</th>
                          <th className="min-w-120px">Total</th>
                        </tr>
                      </thead>

                      <tbody>
                        {invoice?.return_part?.return_part_items?.map(
                          (item, index) => (
                            <tr key={index}>
                              <td className="">
                                <Link
                                  to={"/panel/parts/" + item?.part_id}
                                  className="text-dark fw-bolder text-hover-primary"
                                >
                                  {item?.alias?.name}{" "}
                                  <span className="text-primary"></span>
                                </Link>
                              </td>
                              <td className=" fw-bolder mb-1 fs-6">
                                <span>{item?.alias.part_number}</span>
                              </td>

                              <td>
                                <span>{item.quantity}</span>
                              </td>
                              <td className=" fw-bolder mb-1 fs-6">
                                <span>{item?.unit_price}</span>
                              </td>

                              <td className=" fw-bolder mb-1 fs-6">
                                <span>
                                  {item.quantity * item?.unit_price + " "}
                                  TK.
                                </span>
                              </td>
                            </tr>
                            
                          )
                        )}
                        <tr className="fw-bolder text-gray-700 fs-5">
                            <td colSpan={2}></td>
                            <td>Grand Total(Incuding others)</td>
                            <td></td>
                            <td>{invoice?.return_part?.grand_total}</td>
                            <td></td>
                          </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InvoicePartItems;
