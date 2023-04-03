import React from "react";
import Table from "components/utils/Table";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReturnPartService from "services/ReturnPartSevice";
import Moment from "react-moment";
import PermissionAbility from "helpers/PermissionAbility";
import Confirmation from "components/utils/Confirmation";


const ReturnPart = () => {
  const [block, setBlock] = useState(false);
  const [loading, setLoading] = useState(true);
  const [returnPart, setReturnpart] = useState(null);
  const [filter, setFilter] = useState(false);
  const [invoiceId, setInvoiceId] = useState({});
  const [confirmDelete, setConfirmDelete] = useState(false);



  const getReturnPart = async () => {
    let res = await ReturnPartService.getAll();
    setReturnpart(res)
    setLoading(false);
  };

  const deleteData = async(invoiceId) => {
    await ReturnPartService.remove(invoiceId);
    getReturnPart();
    setLoading(false);
  };


  const columns = [
    {
      name: "Id",
      selector: (row) => row?.id,
      sortable: true,
      field: "id",
    },

    {
        name: "Invoice Number",
        selector: (row) => row?.invoice_number,
        sortable: true,
        field: "invoice_number",
      },

      {
        name: "Tracking Number",
        selector: (row) => row?.tracking_number,
        sortable: true,
        field: "tracking_number",
      },

      {
        name: "Type",
        selector: (row) => row?.type,
        sortable: true,
        field: "type",
      },

    {
      name: "Created At",
      selector: (row) => row?.created_at,
      sortable: true,
      field: "created_at",
      format: (row) => (
        <div className="mt-2">
          <Moment format="D MMMM YYYY">{row?.created_at}</Moment>
        </div>
      ),
    },

    {
        name: "Action",
        selector: (row) => row?.tracking_number,
        format: (row) => (
          <span className="text-end">
            <PermissionAbility permission="return_part_show">
              <Link
                to={"/panel/invoices/" + row.invoice_id}
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              >
                <i className="fa fa-eye"></i>
              </Link>
            </PermissionAbility>
            <PermissionAbility permission="return_part_delete">
            <Link
                to="#"
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                onClick={() => {
                  setInvoiceId(row.id);
                  setConfirmDelete(true);
                }}
              >
                <i className="fa fa-trash"></i>
              </Link>
            </PermissionAbility>
          </span>
        ),
      },
  ];

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Return Part"
            callbackButtons={[
              {
                name: "Filter",
                callback: () => {
                  setFilter(!filter);
                },
                permission: null,
              },
            ]}
            isLoading={loading}
            data={returnPart}
            columns={columns}
            onFilter={getReturnPart}
          />
        </div>
      </div>
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteData(invoiceId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </>
  );
};

export default ReturnPart;
