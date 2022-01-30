import React, { useEffect, useState } from "react";
import Modal from "components/utils/Modal";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css";
import PartStockService from "services/PartStockService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";
import WareHouseService from "services/WareHouseService";

const AddPartStock = ({ open, onCloseModal, onCreated }) => {
  let { id } = useParams();
  const [warehouses, setWarehouses] = useState([])
  const [units] = useState([
    { label: 'Piece', value: 'piece' },
    { label: 'Millimetre', value: 'millimetre' },
    { label: 'Centimetre', value: 'centimetre' },
    { label: 'Metre', value: 'metre' },
    { label: 'Feet', value: 'feet' },
    { label: 'Inch', value: 'inch' },
    { label: 'Yard', value: 'yard' }
  ])
  const [data, setData] = useState({
    machine_id: '',
    machine_model_id: '',
    machine_heading_id: '',
    name: '',
    part_number: '',
    description: ''
  })
  const [block, setBlock] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const handleSelect = (option, conf) => {
    const value = option.value;
    const name = conf.name;
    setBlock(false)

    setData({
      ...data, [name]: value
    })
  }

  const handleDateSelect = (value, name) => {
    setData({
      ...data, [name]: new Date(value)
    })
  }

  const createPartAlias = async () => {
    setBlock(true)
    await PartStockService.create(id, data);
    onCreated();
    onCloseModal();
    setBlock(false)
  }

  const getWarehouses = async () => {
    setBlock(false)
    let data = await WareHouseService.getAll()
    data = data.map(itm => ({ label: itm.name, value: itm.id })) //Parse the data as per the select requires
    setWarehouses(data);
    setBlock(false)
  };

  useEffect(() => {
    if (open) //Prevent preload data while modal is hidden
      getWarehouses();
    setBlock(false)
  }, [open]);

  return (
    <div>
      <Modal
        open={open}
        onCloseModal={onCloseModal}
        title={<>Add Part Stock</>}
        body={
          <>
            <div className="form-group">
              <label className="required form-label">Warehouse</label>
              <Select options={warehouses} onChange={handleSelect} name="warehouse_id" />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="warehouse_id"></div>
            </div>

            <div className="form-group mt-5 row">
              <div className="col-md-6">
                <label className="required form-label">Units</label>
                <Select options={units} onChange={handleSelect} name="unit" />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="unit"></div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Unit Value</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Unit Value"
                  name="unit_value"
                  id="unit_value"
                  onChange={handleChange}
                  value={data.unit_value ?? ''}
                  step="any"
                />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="unit_value"></div>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Yen Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Yen Price"
                name="yen_price"
                id="yen_price"
                onChange={handleChange}
                value={data.yen_price ?? ''}
                step="any"
              />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="yen_price"></div>
            </div>

            <div className="form-group">
              <label className="form-label">Formula Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Formula Price"
                name="formula_price"
                id="formula_price"
                onChange={handleChange}
                value={data.formula_price ?? ''}
                step="any"
              />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="formula_price"></div>
            </div>

            <div className="form-group">
              <label className="form-label">Selling Price</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter Selling Price"
                name="selling_price"
                id="selling_price"
                onChange={handleChange}
                value={data.selling_price ?? ''}
                step="any"
              />
              <div className="fv-plugins-message-container invalid-feedback" htmlFor="selling_price"></div>
            </div>

            <div className="form-group mt-5 row">
              <div className="col-md-6">
                <label className="form-label">Arrival Date</label>
                <DatePicker className="form-control" placeholderText="Shipment Date" selected={data.shipment_date} onChange={(date) => handleDateSelect(date, 'shipment_date')} />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="shipment_date"></div>
              </div>

              <div className="col-md-6">
                <label className="form-label">Shipment Invoice No.</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Shipment Invoice No."
                  name="shipment_invoice_no"
                  id="shipment_invoice_no"
                  onChange={handleChange}
                  value={data.shipment_invoice_no ?? ''}
                />
                <div className="fv-plugins-message-container invalid-feedback" htmlFor="nashipment_invoice_nome"></div>
              </div>
            </div>

            <button
              disabled={block}
              className="btn btn-primary mr-2 mt-5"
              style={{ marginRight: "1rem" }}
              onClick={() => { createPartAlias() }}
            >
              Submit
            </button>
            <button
              className="btn btn-secondary  mt-5 "
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </>
        }
      />
    </div>
  );
};

export default AddPartStock;
