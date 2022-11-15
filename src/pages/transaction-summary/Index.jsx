import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeliverNoteService from "services/DeliverNoteService";
import InvoiceService from "services/InvoiceService";
import Filter from "./Filter";
const Invoices = () => {
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState(false);
  const [block, setBlock] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const filterdata = (data) => {
    setFilter(false);
    getTransactionSummary(data);
  };

  const getTransactionSummary = async (filters) => {
    setInvoices(await InvoiceService.getAll(filters));
    setLoading(false);
  };

  let navigate = useNavigate();

  const storeDeliveryNotes = async (data) => {
    setBlock(true);
    await DeliverNoteService.create(data);
    setBlock(false);
  };

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
      selector: (row) =>
        row?.quotation?.requisition?.type?.replaceAll("_", " ")?.capitalize(),
      sortable: true,
      field: "id",
    },

    {
      name: "Total",
      selector: (row) => row?.previous_due,
      sortable: true,
      field: "total_due",
      format: (row) => (
        <div className="mt-2">{row?.previous_due ?? row?.totalAmount} tk</div>
      ),
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
      name: "Due",
      selector: (row) => row?.totalPaid,
      sortable: true,
      field: "role",
      format: (row) => (
        <div className="mt-2">
          {row?.previous_due
            ? "N/A"
            : row?.deliveryNote?.dn_number
            ? row?.deliveryNote?.dn_number
            : "No delivery note yet"}
        </div>
      ),
    },

    {
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <>
          <span className="text-end">
            <PermissionAbility permission="invoices_show">
              <Link
                to={"/panel/transaction-summary/" + row.id}
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              >
                <i className="fa fa-eye"></i>
              </Link>
            </PermissionAbility>
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="By Invoice ID"            
            onClickButton={onOpenModal}
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
            data={invoices}
            columns={columns}
            onFilter={getTransactionSummary}       
          />
        </div>
      </div>
      <Filter
        enable={filter}
        onChange={(data) => {
          filterdata(data);
        }}
      />
    </>
  );
};

export default Invoices;
