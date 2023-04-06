import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/utils/Modal";
import InvoiceService from "../../../services/InvoiceService";
import Select from "react-select";

const ReturnPart = ({ open, onCloseModal, getInvoices, invoice }) => {
  // const [advanced, setAdvanced] = useState(false);
  // const [refund, setRefund] = useState(false);
  const [type, setType] = useState({});
  const [remarks, SetRemarks] = useState();
  const [partItems, setPartItems] = useState([]);
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]);
  const [grandTotal, setGrandTotal] = useState({});
  const [total, setTotal] = useState({});
  const navigate = useNavigate();

  const addData = (itm) => {
    setItems([...items, itm]);
  };

  const types = [
    { label: "Advance", value: "advance" },
    { label: "Refund", value: "refund" },
  ];

  const handleSelect = (input) => {
    const data = invoice?.part_items?.find(
      (item) => item.part_id == input.value
    );

    addData({
      id: data?.part?.id,
      name: data?.part?.aliases[0]?.name,
      number: data?.part?.aliases[0]?.part_number,
      qnty: data?.quantity,
      unit_value: data?.unit_value,
      total_value: data?.total_value,
    });

    const part = partItems?.filter((item) => {
      return item?.value != input?.value;
    });
    setPartItems(part);
  };

  const handleTypeSelect = (option, action) => {
    const value = option.value;
    const name = action.name;

    setType(value);
  };

  const removeItem = (data) => {
    const part = [...partItems];
    part.push({ value: data?.id, label: data?.name });
    setPartItems(part);

    const item = items?.filter((item) => item?.id != data?.id);

    setItems(item);
  };

  useEffect(() => {
    let totalAmount = 0;
    items?.forEach((item) => {
      totalAmount =
        parseInt(totalAmount) +
        parseInt(item?.qnty) * parseInt(item?.unit_value);
    });
    setTotal(totalAmount);
    let GrandTotal = parseInt(
      totalAmount * (1 + (invoice?.vat - invoice?.discount) / 100)
    );
    setGrandTotal(GrandTotal);
  }, [items]);

  const handleOnClose = () => {
    setPartItems(
      invoice?.part_items
        ?.map((item) => item.part)
        .map((item) => item.aliases)
        .map((a) => a[0])
        .map((part) => ({ value: part.part_id, label: part.name }))
    );
    setItems([]);
    // setAdvanced(false);
    // setRefund(false);
    SetRemarks();
    onCloseModal();
  };

  const handleDecrement = (item) => {
    if (item.qnty > 1) {
      const allItems = [...items];
      const index = allItems.indexOf(item);
      allItems[index] = { ...item };
      allItems[index].qnty--;
      setItems(allItems);
    }
  };

  const handleSubmit = async () => {
    try {
      InvoiceService.returnParts({
        invoice_id: data?.invoice_id,
        company_id: data?.company_id,
        items,
        grand_total: grandTotal,
        type: type,
        // type: advanced ? "advance" : "refund",
        remarks,
      });
      setItems([]);
      setData({});
      onCloseModal();
      getInvoices();
      // setAdvanced(false);
      // setRefund(false);
      SetRemarks();
      navigate("/panel/return-part");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = invoice?.part_items
      ?.map((item) => item.part)
      .map((item) => item.aliases)
      .map((a) => a[0])
      .map((part) => ({ value: part.part_id, label: part.name }));

    setPartItems(data);
    setData({
      ...data,
      invoice_id: invoice?.id,
      company_id: invoice?.company?.id,
    });
  }, [invoice]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={handleOnClose}
        size="xl"
        title={<>Return Invoice</>}
        body={
          <>
            <>
              <form id="create-return-part">
                {partItems && (
                  <div className="form-group">
                    <label className="required form-label">Part Name</label>
                    <Select
                      options={partItems}
                      onChange={handleSelect}
                      name="partId"
                    />
                    <div
                      className="fv-plugins-message-container invalid-feedback"
                      htmlFor="part_id"
                    ></div>
                  </div>
                )}

                {items.length > 0 && (
                  <>
                    <div className="d-flex flex-column flex-lg-row">
                      <div className="flex-lg-row-fluid mb-lg-0 me-lg-7 me-xl-10">
                        <div className="card">
                          <div className="card-body">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="table-responsive">
                                  <table
                                    className="table"
                                    data-kt-element="items"
                                  >
                                    <thead>
                                      <tr className="border-bottom fs-7 fw-bolder text-gray-700 text-uppercase">
                                        <th>Name</th>
                                        <th>Number</th>
                                        <th>QTY</th>
                                        <th>Unit Price</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                      </tr>
                                    </thead>

                                    <tbody>
                                      {items.map((item, index) => {
                                        return (
                                          <>
                                            <tr key={index + 1}>
                                              <td className="w-25">
                                                {item?.name}
                                              </td>
                                              <td className="w-25">
                                                {item?.number}
                                              </td>

                                              <td className="w-25">
                                                <div className="input-group input-group-sm ">
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    aria-label="Small"
                                                    aria-describedby="inputGroup-sizing-sm"
                                                    min="1"
                                                    onChange={(e) =>
                                                      e.target.value
                                                    }
                                                    value={item?.qnty}
                                                    name="quantity[]"
                                                  />

                                                  <div className="input-group-prepend">
                                                    <span
                                                      className="input-group-text"
                                                      onClick={() =>
                                                        handleDecrement(item)
                                                      }
                                                      style={{
                                                        cursor: "pointer",
                                                      }}
                                                    >
                                                      <i className="fas fa-minus"></i>
                                                    </span>
                                                  </div>
                                                </div>
                                              </td>
                                              <td className="w-25">
                                                {item?.unit_value}
                                              </td>
                                              <td className="w-25">
                                                {item?.qnty * item?.unit_value}
                                              </td>
                                              <td className="w-25">
                                                <button
                                                  type="button"
                                                  className="btn btn-sm btn-icon btn-danger"
                                                  data-kt-element="remove-item"
                                                  onClick={() =>
                                                    removeItem(item)
                                                  }
                                                >
                                                  <i className="fa fa-trash"></i>
                                                </button>
                                              </td>
                                            </tr>
                                          </>
                                        );
                                      })}
                                      <tr>
                                        <td colSpan={3}></td>
                                        <td>
                                          <h3>Grand Total</h3>
                                        </td>
                                        <td>
                                          <h3>{grandTotal}</h3>
                                        </td>
                                        <td></td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="col-lg-4">
                                <label className="required form-label fw-bold">
                                  Type:
                                </label>
                                <Select
                                  options={types}
                                  onChange={(option, action) =>
                                    handleTypeSelect(option, action)
                                  }
                                  name="type"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="row mb-5">
                      <div className="col-md-6">
                        <input
                          id="isAdvanced"
                          type="checkbox"
                          checked={advanced}
                          required={true}
                          onChange={() => {                            
                            setRefund(false)
                            setAdvanced(true)
                          }
                          }
                        />

                        <label htmlFor="isAdvanced" className="p-5">
                          Advanced
                        </label>
                      </div>
                      <div className="col-md-6">
                        <input
                          id="isRefund"
                          type="checkbox"
                          checked={refund}
                          onChange={() =>{
                             setRefund(true)
                             setAdvanced(false)
                            }}
                        />

                        <label htmlFor="isRefund" className="p-5">
                          Refund
                        </label>
                      </div>
                      <div className="col-lg-8">
                        <label className="form-label fs-6 fw-bolder text-gray-700">
                          Remarks
                        </label>
                        <textarea
                          name="remarks"
                          className="form-control form-control-solid"
                          rows="5"
                          onChange={(e) => SetRemarks(e.target.value)}
                        ></textarea>
                      </div>
                    </div> */}

                    <button
                      type="button"
                      className="btn btn-primary mr-2 mt-5 float-end"
                      style={{ marginRight: "1rem" }}
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </>
                )}

                <button
                  type="button"
                  className="btn btn-secondary mt-5"
                  onClick={onCloseModal}
                >
                  Cancel
                </button>
              </form>
            </>
          </>
        }
      />
    </div>
  );
};

export default ReturnPart;
