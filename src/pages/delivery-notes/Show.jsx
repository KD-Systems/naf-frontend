import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
const ShowDeliveryNotes = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [deliveryNote, setDeliveryNote] = useState({});
  const [total, setTotal] = useState(0);
  const [active, setActive] = useState("part_items"); // * tab active or not

  const getDeliveryNotes = async () => {
    let res = await DeliverNoteService.get(id);
    setDeliveryNote(res);
    let content = document.getElementById("content").innerHTML; 
    document.body.innerHTML = content;
    window.print();
  };
  useEffect(() => {
    if (id) getDeliveryNotes();
  }, [id]);
  return (
    <>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="card card-custom">
                <div className="card-header">
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
                  <div className="fw-bolder mt-5">Delivery Note Number</div>
                  <div className="text-gray-600">{deliveryNote?.dn_number }</div>

                  <div className="fw-bolder mt-5">Invoice Number</div>
                  <div className="text-gray-600">
                    {deliveryNote?.invoice?.invoice_number?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Company Name</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.name?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Company Group</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.company_group?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Machine Type</div>
                  <div className="text-gray-600">
                    {deliveryNote?.company?.machine_types?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Priority</div>
                  <div className="text-gray-600">
                    {deliveryNote?.requisition?.priority?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Type</div>
                  <div className="text-gray-600">
                    {deliveryNote?.requisition?.type?? "--"}
                  </div>

                  <div className="fw-bolder mt-5">Remarks </div>
                  <div className="text-gray-600">
                    {deliveryNote?.remarks ?? "--"}
                  </div>

                  
                </div>

                <div className="card-header">
                <div className="card-title">
                  <h3 className="card-label">
                    <Link
                      className="btn btn-sm btn-dark "
                      to={"/panel/delivery-notes/" + deliveryNote.id + "/print"}
                      style={{ marginRight: "0.75rem" }}
                      target="_blank"
                    >
                      Print
                    </Link>
                  </h3>
                </div>
              </div>

              </div>
            </div> 
            {/* div ends here */}

            
            <div className="col-xl-9">
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-n2">
                  <li className="nav-item">
                    <a
                      className="nav-link text-active-primary pb-4 active"
                      data-bs-toggle="tab"
                      href="#part_items"
                      onClick={() => {
                        setActive("part_items"); 
                      }}
                    >
                      Part Items
                    </a>
                  </li>
                </ul>

                <div className="tab-content">
                  {/* Tabs start from here */}
                 
                  <div className="tab-pane fade active show" id="part_items" role="tab-panel">
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
                                      <th className="min-w-120px">Total </th>
                                    </tr>
                                  </thead>

                                  <tbody>
                                    {deliveryNote?.part_items?.map((item, index) => (
                                      <tr key={index}>
                                        <td className="">
                                          <Link
                                            to={"/panel/parts/" + item?.part?.id}
                                            className="text-dark fw-bolder text-hover-primary"
                                          >
                                            {item?.part?.aliases[0].name}
                                          </Link>
                                        </td>
                                        <td className=" fw-bolder mb-1 fs-6">
                                          <span>
                                            {item?.part?.aliases[0].part_number}
                                          </span>
                                        </td>
                                  

                                        <td>
                                          <span>{item.quantity}</span>
                                        </td>
                                        

                                        <td className=" fw-bolder mb-1 fs-6">
                                          <span>
                                            {deliveryNote?.requisition?.type != 'claim_report'?parseInt(item.total_value):0} TK.
                                            
                                          </span>
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
                  

                  {/* Tabs end here */}
                </div>
              </div>
            </div>



            
          </div>
        </div>
      </div>

      {/* <InvoiceCreatePayment
        open={open}
        onCloseModal={onCloseModal}
        invoice={invoice}
      /> */}
    </>
  );
};

export default ShowDeliveryNotes;
