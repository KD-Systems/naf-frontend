import Table from "components/utils/Table";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClientInvoiceService from "services/clientServices/ClientInvoiceService";
import Moment from "react-moment";

const ClientInvoices = () => {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.invoice_number,
      sortable: true,
      field: "id",
    },

    {
      name: "Company",
      selector: (row) => row?.company?.name,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <Link
              to={"/panel/companies/" + row?.company?.id}
              className="text-dark fw-bolder text-hover-primary"
            >
              {row?.company?.name}
            </Link>
          </div>
        </div>
      ),
    },

    {
      name: "Requisition Type",
      selector: (row) => row?.type?.replaceAll("_", " ")?.capitalize(),
      sortable: true,
      field: "id",
    },
    {
      name: "Part Quantity",
      selector: (row) => row?.part_items?.reduce((partialSum,a)=>partialSum + a.quantity ,0),
      format: (row) => (
        <div className="mt-2">
          {row?.part_items?.reduce((partialSum,a)=>partialSum + a.quantity ,0)} 
        </div>
      ),
      sortable: true,
      field: "expected_delivery",
    },
    {
      name: "Grand Total",
      selector: (row) => row?.grand_total,
      format: (row) => (
            <div className="mt-2">{row?.previous_due ?? row?.grand_total} tk</div>
          ),
      sortable: true,
      field: "grand_total",
    },

    {
      name: "Paid",
      selector: (row) => row?.totalPaid,
      sortable: true,
      field: "total_due",
      format: (row) => (
        <div className="mt-2">
          {row?.totalPaid ? parseInt(row?.totalPaid) : 0} tk
        </div>
      ),
    },

    {
      name: "DN number",
      selector: (row) => row?.deliveryNote?.dn_number,
      sortable: true,
      field: "role",
      format: (row) => (
        <div className='mt-2'>
          {row?.deliveryNote?.dn_number ? (
            row?.deliveryNote?.dn_number
          ): "No delivery note yet"}
         
        </div>
      ),
    },

    {
      name: "RP Number",
      selector: (row) => row?.return_part_tracking_no,
      sortable: true,
      field: "return_part_tracking_no",
      format: (row) => (
        <div className="mt-2">
          {row?.return_part_tracking_no ? row?.return_part_tracking_no : "N/A"}
        </div>
      ),
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
      selector: (row) => row.status, 
      format: (row) => (
        <>
        <span className="text-end">
        <Link
            to={"/panel/client/invoices/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
     
        </span>
          <span className="text-end">
          <Link
              to={"/panel/client/invoices/" + row.id + "/print"}
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              target="_blank"
            >
              <i className="fa fa-print"></i>
            </Link>
            
          </span>
        </>
      ),
    },
  ];

  const getInvoices = async (filters) => {
    setInvoices(await ClientInvoiceService.getAll(filters));   
    setLoading(false);
  };

  let navigate = useNavigate();
  return (
    <>
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="Quotations"
          buttonName="Add Invoice"
          isLoading={loading}
          data={invoices}
          columns={columns}
          onFilter={getInvoices}
          buttonPermission="invoices_create"
        />
      </div>
    </div>
    </>
  );
};

export default ClientInvoices;
