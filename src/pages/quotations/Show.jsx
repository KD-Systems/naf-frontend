import React, { useState, useEffect }  from 'react'
import { useParams, useNavigate, Link } from "react-router-dom";
import Moment from "react-moment";
import QuotationService from 'services/QuotationService';
import InvoiceService from 'services/InvoiceService';
const ShowQuotation = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [quotation, setQuotation] = useState({});
    const [block,setBlock]=useState(false);

    const getQuotation = async () => {
        let res = await QuotationService.get(id);
        setQuotation(res);
    };

    const storeInvoice = async()=>{
      setBlock(true)
    await InvoiceService.create(quotation);
    setBlock(false)
    // navigate("/panel/quotations");
    }

  useEffect(() => {
    if (id)
    getQuotation()
  }, [id]);
  return (
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
              <div className="fw-bolder mt-5">Company</div>
              <div className="text-gray-600">
                  {quotation?.company?.name}
                </div>

              <div className="fw-bolder mt-5">Machines</div>
              <div className="text-gray-600">
                {quotation?.requisition?.machines?.map((item, index) => (
                  <span key={index} >{item?.machine_model?.name}{'\n'}</span>
                ))}
              </div>



              <div className="fw-bolder mt-5">Expected Delivery</div>
              <div className="text-gray-600">
                <Moment format="D MMMM YYYY">
                  {quotation?.requisition?.expected_delivery}
                </Moment>
              </div>

              <div className="fw-bolder mt-5">Priority</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.priority?.capitalize()}
                </div>

              <div className="fw-bolder mt-5">Type</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.type?.replaceAll('_', ' ')?.capitalize()}
                  </div>

              <div className="fw-bolder mt-5">Updated At</div>
              <div className="text-gray-600">
                <Moment format="D MMMM YYYY">
                  {quotation?.requisition?.updated_at ?? '--'}
                </Moment>
              </div>

              <div className="fw-bolder mt-5">Ref Number</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.ref_number ?? '--'}
            </div>

              <div className="fw-bolder mt-5">Reason Of Trouble</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.reason_of_trouble ?? '--'}
                  </div>

              <div className="fw-bolder mt-5">Solutions</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.solutions ?? '--'}
                  </div>

              <div className="fw-bolder mt-5">Remarks</div>
              <div className="text-gray-600">
                  {quotation?.requisition?.remarks ?? '--'}
                  </div>
            </div>
            <div className="card-header">
              <div className="card-title">
                <h3 className="card-label">
                  <button
                    className="btn btn-sm btn-dark "
                    style={{ marginRight: "0.75rem" }}
                    onClick={() => navigate('print')}
                  >
                    Print
                  </button>
                </h3>
                <h3 className="card-label">
                  <button
                    className="btn btn-sm btn-dark "
                    style={{ marginRight: "0.1rem" }}
                    // onClick={() => navigate(`/panel/quotations/${requisition?.id}/create`)}
                    onClick={() => {
                      storeInvoice();
                    }}
                  >
                     Generate Invoice
                  </button>
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-9">
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
                          <th className="min-w-120px">Unit Value</th>
                          <th className="min-w-120px">Total Value</th>
                        </tr>
                      </thead>

                      <tbody>
                        {quotation?.part_items?.map((item, index) => (
                          <tr key={index}>
                            <td className="">
                              <Link
                                to={'/panel/parts/' + item?.part?.id}
                                className="text-dark fw-bolder text-hover-primary"
                              >
                                {item?.part?.aliases[0].name}
                              </Link>
                            </td>
                            <td className=" fw-bolder mb-1 fs-6">
                              <span>{item?.part?.aliases[0].part_number}</span>
                            </td>
                            <td className=" fw-bolder mb-1 fs-6"><span>{item?.quantity}</span></td>
                            <td className=" fw-bolder mb-1 fs-6"><span>{item?.unit_value} Tk.</span></td>
                            <td className=" fw-bolder mb-1 fs-6"><span>{item?.total_value} Tk.</span></td>

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
    </div>
  </div>
  )
}

export default ShowQuotation