import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DeliverNoteService from "services/DeliverNoteService";
import InvoiceService from "services/InvoiceService";
import CreateInvoice from "./Create";
import InvoiceFilter from "./InvoiceFilter";
import ReturnPart from "./return-parts/returnPart";
import Confirmation from "components/utils/Confirmation";
import Moment from "react-moment";

const Invoices = () => {
  const [invoiceId, setInvoiceId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [invoices, setInvoices] = useState([]);
  const [filter, setFilter] = useState(false);
  const [block, setBlock] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [type, setType] = useState(null);

  const [openReturnModal, setOpenReturnModal] = useState(false);

  const [invoice, setInvoice] = useState(null);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);

  const filterdata = (data) => {
    setFilter(false);
    getInvoices(data);
  };

  const getInvoices = async (filters) => {
    setInvoices(await InvoiceService.getAll(filters));
    setLoading(false);
  };

  let navigate = useNavigate();

  const storeDeliveryNotes = async (data) => {
    setBlock(true);
    await DeliverNoteService.create(data);
    setBlock(false);
  };

  const deleteInvoice = async (invoiceId, type) => {
    await InvoiceService.remove(invoiceId, type);
    getInvoices();
    setLoading(false);
  };

  const onCloseModal = () => {
    setOpenReturnModal(false);
    setOpen(false);
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
        row?.previous_due
          ? "Previous Due"
          : row?.type?.replaceAll("_", " ")?.capitalize(),
      sortable: true,
      field: "id",
    },
    {
      name: "Part Quantity",
      selector: (row) =>
        row?.part_items?.reduce(
          (partialSum, a) => parseInt(partialSum) + parseInt(a.quantity),
          0
        ),
      format: (row) => (
        <div className="mt-2 w-100">
          {row?.previous_due
            ? "N/A"
            : row?.part_items?.reduce(
                (partialSum, a) => parseInt(partialSum) + parseInt(a.quantity),
                0
              )}
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
      width: "15%",
      format: (row) => (
        <>
          <span>
            <PermissionAbility permission="invoices_show">
              <Link
                to={"/panel/invoices/" + row.id}
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
              >
                <i className="fa fa-eye"></i>
              </Link>
            </PermissionAbility>
          </span>
          {!row?.return_part_tracking_no &&
            row?.type == "purchase_request" &&
            row?.deliveryNote?.dn_number && (
              <span>
                <PermissionAbility permission="invoices_show">
                  <button
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    onClick={() => {
                      setInvoice(row);
                      setOpenReturnModal(true);
                    }}
                  >
                    <i className="fa fa-undo"></i>
                  </button>
                </PermissionAbility>
              </span>
            )}
          {!row?.previous_due && (
            <>
              <span className="text-end">
                <PermissionAbility permission="invoices_print">
                  <Link
                    to={"/panel/invoices/" + row.id + "/print"}
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    target="_blank"
                  >
                    <i className="fa fa-print"></i>
                  </Link>
                </PermissionAbility>
              </span>
              <span className="text-end">
                <PermissionAbility permission="invoices_generate_delivery_note">
                  <div
                    onClick={() =>
                      navigate(`/panel/delivery-notes/${row?.id}/create`)
                    }
                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    data-toggle="tooltip"
                    title="Add Delivery Note"
                  >
                    <i className="fa fa-plus"></i>
                  </div>
                </PermissionAbility>
              </span>
            </>
          )}
          {row?.deliveryNote == null && (
            <PermissionAbility permission="invoices_delete_access">
              <Link
                to="#"
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                onClick={() => {
                  setInvoiceId(row.id);
                  setType(row.type);
                  setConfirmDelete(true);
                }}
              >
                <i className="fa fa-trash"></i>
              </Link>
            </PermissionAbility>
          )}
        </>
      ),
    },
  ];

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Quotations"
            buttonName="Add Invoice"
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
            onFilter={getInvoices}
            buttonPermission="invoices_create"
          />
        </div>
      </div>
      <CreateInvoice
        open={open}
        onCloseModal={onCloseModal}
        getInvoices={getInvoices}
      />
      <InvoiceFilter
        enable={filter}
        onClickOutside={() => {
          setFilter(!filter);
        }}
        onChange={(data) => {
          filterdata(data);
        }}
      />
      <ReturnPart
        open={openReturnModal}
        invoice={invoice}
        onCloseModal={onCloseModal}
        getInvoices={getInvoices}
      />
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteInvoice(invoiceId, type);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </>
  );
};

export default Invoices;
