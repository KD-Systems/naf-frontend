
  import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
const ShowDeliveryNotes = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [deliveryNote, setDeliveryNote] = useState({});
  const [total, setTotal] = useState(0);

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
              </div>
            </div> 
            {/* div ends here */}

            
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
