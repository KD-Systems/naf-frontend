import Modal from "components/utils/Modal";
import moment from "moment";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import { toast } from "react-toastify";
import AdvanceService from "services/AdvanceService";
import InvoiceService from "services/InvoiceService";
const CreateInvoicePayment = ({ open, onCloseModal, invoice, due }) => {
  const [advance, setAdvance] = useState(0);
  const [file, setFile] = useState("");

  const [data, setData] = useState({ 
    invoice_id: "",
    payment_mode: "",
    payment_date: "",
    amount: null,
    remarks: "",
    transaction_details: "",
    file: file,
  });

  const [block, setBlock] = useState(false);

  const handleChange = (e) => {
    const { name } = e.target;
    setData({ ...data, [name]: e.target.value });
  };

  const handleSelect = (option, conf) => {
    let value = option.value;
    if (Array.isArray(option))
      value = option.map((dt) => {
        return dt.value;
      });

    const name = conf.name;
    setBlock(false);

    setData({
      ...data,
      [name]: value,
    });
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

  useEffect(async () => {
    const res = await AdvanceService.getAll({ id: invoice?.company?.id });
    var total = 0;
    res.forEach((element) => {
      total = element.transaction_type
        ? parseInt(total) + parseInt(element.amount)
        : parseInt(total) - parseInt(element.amount);
    });
    setAdvance(total);
    setData({
      ...data,
      invoice_id: invoice?.id,
      payment_mode: invoice?.payment_mode,
    });
  }, [open]);

  const addPayment = async () => {
    if (data?.amount > due) {
      toast.error("Amount should not be grater then Due amount!");
      setData({
        ...data,
        amount: due,
      });
    } else if (data?.payment_mode == "advance" && data?.amount > advance) {
      toast.error("Insufficient Advance amount!");
      setData({
        ...data,
        amount: advance,
      });
    } else {
      setBlock(true);
    let formData = new FormData(document.getElementById("create-payment"));
      await InvoiceService.addPayment(formData);
      setBlock(false);
      onCloseModal();
      setData({
        invoice_id: "",
        payment_mode: "",
        payment_date: "",
        amount: null,
        transaction_details: "",
        file: "",
        remarks: "",
      });
      getPaymentHistories();
    }
  };

  const payments = [
    { value: "cash", label: "Cash" },
    { value: "bank", label: "Bank" },
    { value: "check", label: "Check" },
    { value: "card", label: "Card" },
    { value: "advance", label: "Advance" },
  ];

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={
          <>
            <div>Add Payment</div>
            <label className="form-label">Total Due Amount: {due}tk</label>
          </>
        }
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
                      htmlFor="payment_date"
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="required form-label">File</label>
                <input
                  type="file"
                  className="form-control"
                  name="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="file"
                ></div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="required form-label">Amount</label>
                <input
                  type="number"
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

              <div className="col-lg-12">
                <div className="mb-5">
                  <label className="required form-label">Payment Mode</label>
                  <Select
                    options={payments}
                    name="payment_mode"
                    onChange={handleSelect}
                  />
                  <div
                    className="fv-plugins-message-container invalid-feedback"
                    htmlFor="payment_mode"
                  ></div>
                  {data?.payment_mode == "advance" && (
                    <label className="form-label">
                      Advance Remaining: {advance}tk
                    </label>
                  )}
                </div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="required form-label">Transaction Details</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Transaction Details"
                  name="transaction_details"
                  id="transaction_details"
                  value={data.transaction_details}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="transaction_details"
                ></div>
              </div>

              <div className="mb-5 fv-row fv-plugins-icon-container">
                <label className="form-label">Remarks</label>
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter Remarks"
                  name="remarks"
                  id="remarks"
                  value={data.remarks}
                  onChange={handleChange}
                />
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="remarks"
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
