import Table from "components/utils/Table";
import { useState } from "react";
import { Link } from "react-router-dom";
import ClientDeliverNoteService from "services/clientServices/ClientDeliveryNoteService";
import Moment from "react-moment";

const ClientDeliveryNotes = () => {
  const [loading, setLoading] = useState(true);
  const [block, setBlock] = useState(false);
  const [deliveryNotes, setDeliveryNotes] = useState([]);
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const getDeliverNotes = async (filters) => {
    setDeliveryNotes(await ClientDeliverNoteService.getAll(filters));
    setLoading(false);
  };

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.dn_number,
      sortable: true,
      field: "id",
    },

    {
      name: "Type",
      selector: (row) => row?.invoice?.quotation?.requisition?.type,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
              {row?.invoice?.quotation?.requisition?.type
                .replaceAll("_", " ")
                ?.capitalize()}
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Company",
      selector: (row) => row?.invoice?.company?.name,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
              {row?.invoice?.company?.name}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Invoice Number",
      selector: (row) => row?.invoice?.invoice_number,
      format: (row) => (
        <div className="mt-2">{row?.invoice?.invoice_number}</div>
      ),
      sortable: true,
      field: "expected_delivery",
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
          {/* to show delivery note */}
          <span className="text-end">
            <Link
              to={"/panel/client/delivery-notes/" + row.id}
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <i className="fa fa-eye"></i>
            </Link>
          </span>

          <span className="text-end">
            <Link
              to={"/panel/client/delivery-notes/" + row.id + "/print"}
              target="_blank"
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <i className="fa fa-print"></i>
            </Link>
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
            name="Delivery Notes"
            buttonName="Add Delivery Note"
            // onClickButton={onOpenModal}
            isLoading={loading}
            data={deliveryNotes}
            columns={columns}
            onFilter={getDeliverNotes}
            buttonPermission="deliverynotes_create"
          />
        </div>
      </div>
      {/* <CreateDeliveryNote
        open={open}
        onCloseModal={onCloseModal}
        getDeliverNotes={getDeliverNotes}
      /> */}
    </>
  );
};

export default ClientDeliveryNotes;
