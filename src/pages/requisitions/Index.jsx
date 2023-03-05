import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RequisitionService from "services/RequisitionService";
import RequisitionFilter from "./RequisitionFilter";
import Confirmation from "components/utils/Confirmation";
import Moment from "react-moment";

const Requisitions = () => {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [requisitions, setRequisitions] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [reqId, setReqId] = useState(null);

  const filterdata = (data) => {
    setFilter(false);
    getRequisitions(data);
  };

  useEffect(() => {
    filterdata();
  }, []);

  const columns = [
    {
      name: "Id",
      selector: (row) => row?.rq_number,
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
      name: "Expected Delivery",
      selector: (row) => row?.expected_delivery,
      sortable: true,
      field: "expected_delivery",
      format: (row) => (
        <div className="mt-2">
          {row?.expected_delivery ? row?.expected_delivery : "--"}
        </div>
      ),
    },
    {
      name: "Priority",
      selector: (row) => row.priority,
      sortable: true,
      field: "role",
    },
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
        </>
      ),
    },

    {
      name: "PQ Number",
      selector: (row) => row?.quotation?.pq_number,
      sortable: true,
      field: "role",
      format: (row) => (
        <div className="mt-2">
          {row?.quotation?.pq_number
            ? row?.quotation?.pq_number
            : "No quotation yet"}
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
        <span className="text-end">
          <PermissionAbility permission="requisitions_show">
            <Link
              to={"/panel/requisitions/" + row.id}
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              <i className="fa fa-eye"></i>
            </Link>
          </PermissionAbility>
          {!row?.quotation?.pq_number && (
            <PermissionAbility permission="requisition_delete">
              <Link
                to="#"
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                onClick={() => {
                  setReqId(row.id);
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

  const getRequisitions = async (filters) => {
    let res = await RequisitionService.getAll(filters);
    setRequisitions(res);
    setLoading(false);
  };

  const deleteRequisition = async (reqId) => {
    await RequisitionService.remove(reqId);
    getRequisitions();
    setLoading(false);
  };

  useEffect(() => {
    getRequisitions();
  }, []);

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
            name="Requisitions"
            buttonName="Add Requisition"
            onClickButton={routeChange}
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
            data={requisitions}
            columns={columns}
            onFilter={filterdata}
          />
        </div>
      </div>
      {filter && (
        <RequisitionFilter
          onClickOutside={() => {
            setFilter(!filter);
          }}
          enable={filter}
          onChange={(data) => {
            filterdata(data);
          }}
        />
      )}
      <Confirmation
        open={confirmDelete}
        onConfirm={() => {
          setConfirmDelete(false);
          deleteRequisition(reqId);
        }}
        onCancel={() => setConfirmDelete(false)}
      />
    </>
  );
};

export default Requisitions;
