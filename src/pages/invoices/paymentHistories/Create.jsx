import React, { useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import DatePicker from "react-datepicker";
import moment from "moment";
import InvoiceService from "services/InvoiceService";
const CreateInvoicePayment = ({ open, onCloseModal, invoice }) => {
  const [data, setData] = useState({
    invoice_id: "",
    payment_mode: "",
    payment_date: "",
    amount: null,
  });



  const [block, setBlock] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    setData({ ...data, [name]: e.target.value });
  };

  const getPaymentHistories = async (filters) => {
    await InvoiceService.getPaymentHistories(filters);
  };

  const handleDateSelect = (value, name) => {
    setData({
      ...data,
      ...{
        [name]: new Date(value),
        [name + "_format"]: moment(value).format("YYYY-MM-DD"),
      },
    });
    setBlock(false);
  };

  useEffect(()=>{
    setData({ ...data, invoice_id: invoice?.id,payment_mode:invoice?.payment_mode });
  },[open])

  const addPayment = async () => {
    setBlock(true);
    await InvoiceService.addPayment(data);
    setBlock(false);
    onCloseModal();
    getPaymentHistories();
  };

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Payment</>}
        body={
          <>
            <form id="create-payment">
              <div>
              <input
                  type="hidden"
                  className="form-control"
                  placeholder="Enter invoice Id"
                  name="invoice_id"
                  id="invoice_id"
                  value={invoice?.id}
                  onChange={handleChange}
                />
                <label className="required form-label">Payment Date</label>
                <div className="mb-5">
                  <div className="form-group ">
                    <DatePicker
                      className="form-control"
                      name="payment_date"
                      selected={data.payment_date}
                      onChange={(date) =>
                        handleDateSelect(date, "payment_date")
                      }
                    />
                    <input
                      type="hidden"
                      name="expected_delivery"
                      id="expected_delivery"
                      value={data.expected_delivery}
                    />
                    <div
                      className="fv-plugins-message-container invalid-feedback"
                      htmlFor="expected_delivery"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="required form-label">Amount</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Amount"
                  name="amount"
                  id="amount"
                  value={data.amount}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="amount"
                ></div>
              </div>

              <button
                type="reset"
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={addPayment}
              >
                Submit
              </button>
              <button
                type="reset"
                className="btn btn-secondary  mt-5 "
                onClick={onCloseModal}
              >
                Cancel
              </button>
            </form>
          </>
        }
      />
    </div>
  );
};

export default CreateInvoicePayment;
