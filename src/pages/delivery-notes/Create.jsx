import React, { useState, useEffect }  from 'react'
import { useNavigate } from "react-router-dom";
import Modal from "../../components/utils/Modal";
import InvoiceService from "../../services/InvoiceService";
import Select from "react-select";
import DeliverNoteService from 'services/DeliverNoteService';
const CreateDeliveryNote = ({ open, onCloseModal, getDeliverNotes }) => {
    const [block, setBlock] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [invoice, setInvoice] = useState({}); //get invoice details
    const [invoiceId, setInvoiceId] = useState("");

    const navigate = useNavigate();

    const getInvoice = async () => {
        if (invoiceId) {
          let res = await InvoiceService.get(invoiceId);
          setInvoice(res);
        }
      };

      const getInvoices = async () => {
        let data = await InvoiceService.getAll();
        data = data?.data?.map((itm) => ({
          label: itm?.invoice_number,
          value: itm?.id,
        })); //Parse the data as per the select requires
        setInvoices(data);
      };

      const handleSelect = (option, conf) => {
        const value = option.value;
        setInvoiceId(value);
      };

      const createDeliveryNote = async (e) => {
        e.preventDefault();
        if (invoiceId) {
          setBlock(true);
          await DeliverNoteService.create(invoice);
          setBlock(false);
          navigate("/panel/delivery-notes");
          getDeliverNotes()
        }
        onCloseModal();
      };



  useEffect(() => {
    if (open) {
        getInvoices();
    }
  }, [open]);

  useEffect(() => {
    getInvoice();
  }, [invoiceId]);
    
  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Create Delivery Note</>}
        body={
          <>
            <form id="create-employee">
              <div className="form-group mt-5">
                <label className="required form-label">Invoice</label>
                <Select
                  options={invoices}
                  onChange={handleSelect}
                  name="invoice_id"
                  maxMenuHeight={250}

                />

                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="requisition"
                ></div>
                <div
                  className="fv-plugins-message-container invalid-feedback"
                  htmlFor="requisition"
                ></div>
              </div>

              <button
                className="btn btn-primary mr-2 mt-5"
                style={{ marginRight: "1rem" }}
                onClick={createDeliveryNote}
              >
                Create
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
  )
}

export default CreateDeliveryNote