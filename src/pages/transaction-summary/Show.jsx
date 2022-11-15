import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoiceService from "services/InvoiceService";
const ShowInvoice = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [paymentHistories, setPaymentHistories] = useState([]);

  const [block, setBlock] = useState(false);
  const [active, setActive] = useState("part_items"); // * tab active or not
  const [tab, setTab] = useState("part_items");
  const [open, setOpen] = useState(false); //* open modal
  const getInvoice = async () => {
    let res = await InvoiceService.get(id);
    setInvoice(res);
    if (res?.part_items?.length == 0) {
      setTab("payment_histories");
    }
    setTotal(
      res?.previous_due ??
        res?.part_items?.reduce(
          (partialSum, a) => parseInt(partialSum) + parseInt(a.total_value),
          0
        )
    );
  };

  useEffect(() => {
    invoice?.part_items?.length == 0 && setActive("payment_histories");
  }, [invoice]);

  const getPaymentHistories = async () => {
    let res = await InvoiceService.getPaymentHistories(id);
    setPaymentHistories(res.data);
    setTotalPayment(
      res?.data?.reduce(
        (partialSum, a) => parseInt(partialSum) + parseInt(a.amount),
        0
      )
    );
  };
  const onCloseModal = () => {
    setOpen(false);
    // setOpenEditModal(false);
  };

  useEffect(() => {
    if (!open) {
      getPaymentHistories();
    }
  }, [open]);

  useEffect(() => {
    if (id) getInvoice();
    getPaymentHistories();
  }, [id]);
  return (
    <>
      <div className="d-flex flex-column-fluid">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                <div className="tab-content">
                  {/* Tabs start from here */}
                  <div className="d-flex flex-column gap-7 gap-lg-10">
                    <div className="card card-flush py-4">
                      <div className="card-body pt-0">
                        <div className="card-title">
                          <h3 className="card-label">
                            <button
                              className="btn btn-sm btn-dark "
                              style={{ marginRight: "0.75rem" }}
                              onClick={() => navigate(-1)}
                            >
                              <i className="fa fa-arrow-left"></i>Back
                            </button>
                            Payment Histories
                          </h3>
                        </div>
                        <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                          <thead>
                            <tr className="fw-bolder text-muted">
                              <th className="min-w-80px">Invoice Id</th>
                              <th className="min-w-120px">payment Mode</th>
                              <th className="min-w-120px">Payment Date</th>
                              <th className="min-w-120px">Amount</th>
                              <th className="min-w-150x">Action</th>
                            </tr>
                          </thead>

                          <tbody>
                            {paymentHistories?.map((item, index) => (
                              <tr key={index}>
                                <td>{item?.invoice?.invoice_number}</td>
                                <td>{item.payment_mode}</td>

                                <td>
                                  <Moment format="YYYY-MM-DD">
                                    {item.payment_date}
                                  </Moment>
                                </td>
                                <td>{Math.floor(item?.amount)}Tk.</td>

                                <td>
                                  <span className="text-end">
                                    <Link
                                      to={
                                        `/panel/invoices/` +
                                        item?.invoice?.id +
                                        `/payment-histories/` +
                                        item.id
                                      }
                                      className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                                    >
                                      <i className="fa fa-eye"></i>
                                    </Link>
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
        </div>
      </div>
    </>
  );
};

export default ShowInvoice;
