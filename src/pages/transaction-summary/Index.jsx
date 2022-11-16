import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeliverNoteService from "services/DeliverNoteService";
import InvoiceService from "services/InvoiceService";
import TransactionSummery from "services/TransactionSummery";
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

  const filterData = (data) => {    
    setFilter({
      ...filter,
      ...data
    })

    getTransactionSummary(data)
  }

  const getTransactionSummary = async (filters) => {
    setInvoices(await TransactionSummery.getAll(filters));
    setLoading(false);
  };

  let navigate = useNavigate();

  const exportSales = async (filters) => {
    setLoading(true);
    let data = await TransactionSummery.transcExport(filters);
    window.location.href = data;
    setLoading(false);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.invoice_number,
      sortable: true,
      field: "id",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <Link
              to={"/panel/invoices/" + row?.id}
              className="text-dark fw-bolder text-hover-primary"
            >
              {row?.invoice_number}
            </Link>
          </div>
        </div>
      ),
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
      name: "Type",
      selector: (row) => row?.type?.replaceAll("_", " ")?.capitalize(),
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
      selector: (row) => row?.due,
      sortable: true,
      field: "role",
      format: (row) => <div className="mt-2">{row?.due ? row?.due : 0}</div>,
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
              {
                name: "Export",
                callback: () => {
                  exportSales(filter);
                },
                permission: null,
              },
            ]}
            grandtotal={{
              total_amount: invoices?.total_amount,
              total_paid: invoices?.total_paid,
              total_due: invoices?.total_due,
            }}
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
          filterData(data);
        }}
      />
    </>
  );
};

export default Invoices;
