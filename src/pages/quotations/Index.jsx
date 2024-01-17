import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import QuotationService from "services/QuotationService";
import CreateModal from "./CreateModal";
import Confirmation from "components/utils/Confirmation";
import Moment from "react-moment";


const Quotations = () => {
  const [loading, setLoading] = useState(true);
  const [quotations, setQuotations] = useState([]);
  const [open, setOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [quoId, setQuoId] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.pq_number,
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
        row?.requisition?.type?.replaceAll("_", " ")?.capitalize(),
      sortable: true,
      field: "id",
    },

    {
      name: "Part Quantity",
      selector: (row) =>
        row?.part_items?.reduce((partialSum, a) => parseInt(partialSum) + parseInt(a.quantity), 0),
      format: (row) => (
        <div className="mt-2">
          {row?.part_items?.reduce(
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
        <div>{row?.grand_total ? row?.grand_total + "tk" : "--"}</div>
      ),
      sortable: true,
      field: "grand_total",
    },

    // {
    //   name: "lock",
    //   selector: (row) => row?.locked_at,
    //   format: (row) => (
    //     <div className="mt-2">{row?.locked_at ? "Locked" : "Not locked"}</div>
    //   ),
    //   sortable: true,
    //   field: "id",
    // },
    {
      name: "Status",
      selector: (row) => row?.status,
      sortable: true,
      field: "role",
      format: (row) => (
        <>
          {row?.status == "pending" && (
            <div className="mt-2 text-white bg-warning p-1 px-2 rounded">
              Pending
            </div>
          )}
          {row?.status == "approved" && (
            <div className="mt-2 text-white bg-success p-1 px-2 rounded">
              Approved
            </div>
          )}
          {row?.status == "rejected" && (
            <div className="mt-2 text-white bg-danger p-1 px-2 rounded">
              Rejected
            </div>
          )}
          {row?.status == null && (
            <div className="mt-2 text-white bg-success p-1 px-2 rounded">
              --
            </div>
          )}
        </>
      ),
    },

    // {
    //   name: "IN Number",
    //   selector: (row) => row?.invoice,
    //   sortable: true,
    //   field: "id",
    //   format: (row) => (
    //     <div className="mt-2">
    //       {row?.invoice ? row?.invoice : "No invoice yet"}
    //     </div>
    //   ),
    // },

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
      selector: (row) => row?.status,
      format: (row) => (
        <span className="text-end">
          <PermissionAbility permission="quotations_show">
            <Link
              to={"/panel/quotations/" + row.id}
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <i className="fa fa-eye"></i>
            </Link>
          </PermissionAbility>
          {row?.invoice == null && (
            <PermissionAbility permission="quotation_delete">
              <Link
                to="#"
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                onClick={() => {
                  setQuoId(row.id);
                  setConfirmDelete(true); 
                }}
              >
                <i className="fa fa-trash"></i>
              </Link>
            </PermissionAbility>
          )}
        </span>
      ),
    },
  ];

  const [filter, setFilter] = useState({})
  const getQuotations = async (filters) => {
    let storedFilter = JSON.parse(localStorage.getItem('quotation_filter'));
    let filterData = {...storedFilter, ...filters};

    if(JSON.stringify(filters) != JSON.stringify(storedFilter)) {
      localStorage.setItem('quotation_filter', JSON.stringify(filterData))
      setFilter(filterData)
    }
      setQuotations(await QuotationService.getAll(filterData));
      setLoading(false);
  };

  const deleteQuotation = (quoId) => {
    QuotationService.remove(quoId);
    getQuotations();
    setLoading(false);
  };
  let navigate = useNavigate();

  const routeChange = () => {
    let path = `create`;
    navigate(path);
  };

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Quotations"
            buttonName="Add Quotation"
            onClickButton={onOpenModal}
            isLoading={loading}
            data={quotations}
            columns={columns}
            onFilter={getQuotations}
            buttonPermission="quotations_create"
            filter={filter}
          />
        </div>
      </div>
      <CreateModal
        open={open}
        onCloseModal={onCloseModal}
        getQuotations={getQuotations}
      />
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteQuotation(quoId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </>
  );
};

export default Quotations;
