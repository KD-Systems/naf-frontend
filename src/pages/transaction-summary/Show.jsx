import { useEffect, useState } from "react";
import Moment from "react-moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import InvoiceService from "services/InvoiceService";
import TransactionSummery from "services/TransactionSummery";
import Filter from "./Filter2";
const ShowInvoice = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [invoice, setInvoice] = useState({});
  const [total, setTotal] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [trancDetails, setTrancDetails] = useState([]);

  const [filter, setFilter] = useState(false);

  const [block, setBlock] = useState(false);
  const [active, setActive] = useState("part_items"); // * tab active or not
  const [tab, setTab] = useState("part_items");
  const [open, setOpen] = useState(false);

  const getTransactionDetails = async (data) => {
    let res = await TransactionSummery.getTransactionDetails(id, data);
    setTrancDetails(res.data);
  };
  const onCloseModal = () => {
    setOpen(false);
  };

  const onClickFilter = () => {
    setFilter(!filter);
  };

  useEffect(() => {
    if (!open) {
      getTransactionDetails();
    }
  }, [open]);

  useEffect(() => {
    if (id) getTransactionDetails();
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
                        <div className="card-title d-flex justify-content-between">
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
                          <button
                            className="btn btn-light-primary btn-md ml-5"
                            onClick={onClickFilter}
                          >
                            Filter
                          </button>
                        </div>
                        <table className="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                          <thead>
                            <tr className="fw-bolder text-muted">
                              <th className="min-w-80px">Invoice Id</th>
                              <th className="min-w-120px">payment Mode</th>
                              <th className="min-w-120px">Payment Date</th>
                              <th className="min-w-120px">Amount</th>
                              {/* <th className="min-w-150x">Action</th> */}
                            </tr>
                          </thead>

                          <tbody>
                            {trancDetails.length
                              ? trancDetails?.map((item, index) => (
                                  <tr key={index}>
                                    <td>{item?.invoice_number}</td>
                                    <td>{item.payment_mode}</td>

                                    <td>
                                      <Moment format="YYYY-MM-DD">
                                        {item.payment_date}
                                      </Moment>
                                    </td>
                                    <td>{Math.floor(item?.amount)}Tk.</td>
                                  </tr>
                                ))
                              : "No data Found"}
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
        <Filter
          enable={filter}
          onChange={(data) => {
            getTransactionDetails(data);
          }}
        />
      </div>
    </>
  );
};

export default ShowInvoice;
