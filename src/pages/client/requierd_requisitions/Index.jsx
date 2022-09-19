import Table from "components/utils/Table";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RequisitionService from "services/RequisitionService";
import RequisitionFilter from "./RequisitionFilter";

const ClientRequiredRequisitions = () => {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [requisitions, setRequisitions] = useState([]);

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
      selector: (row) => row?.rr_number,
      sortable: true,
      field: "id",
    },
    {
      name: "Company",
      selector: (row) => row?.company,
      sortable: true,
      field: "name",
    },
    {
      name: "Expected Delivery",
      selector: (row) => row?.expected_delivery ?? "--",
      sortable: true,
      field: "expected_delivery",
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
          {row?.status == "on-going" && (
            <div className="mt-2 text-white bg-success p-1 px-2 rounded">
              On Going
            </div>
          )}
          {row?.status == "completed" && (
            <div className="mt-2 text-white bg-danger p-1 px-2 rounded">
              Rejected
            </div>
          )}
        </>
      ),
    },

    {
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <span className="text-end">
          <Link
            to={"/panel/client_require_req/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
        </span>
      ),
    },
  ];

  const getRequisitions = async (filters) => {
    let res = await RequisitionService.getAllRequiredRequisitions(filters);
    setRequisitions(res);
    setLoading(false);
  };
  useEffect(() => {
    getRequisitions();
  }, []);

  let navigate = useNavigate();

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Requisitions"
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
      <RequisitionFilter
        enable={filter}
        onChange={(data) => {
          filterdata(data);
        }}
      />
    </>
  );
};

export default ClientRequiredRequisitions;
