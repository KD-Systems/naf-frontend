import React, { useEffect, useState } from "react";
import Table from "components/utils/Table";
import { Link, useNavigate } from "react-router-dom";
import RequisitionService from "services/RequisitionService";
import PermissionAbility from "helpers/PermissionAbility";
import userEvent from "@testing-library/user-event";

const Requisitions = () => {
  const [filter, setFilter] = useState(true);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requisitions, setRequisitions] = useState([]);

  let user = JSON.parse(localStorage.getItem("user"))?.user;

  const filterdata = () => {
    let carry = data?.data;
    if (user.role != "Admin") {
      if (user.permissions.includes("requisitions_approve")) {
        if (filter) {
          let carrydata = carry?.filter((itm) => itm.status == "pending");
          setRequisitions({ data: carrydata });
        } else {
          setRequisitions({ data: carry });
        }
      } else {
        let carrydata = carry?.filter((itm) => itm.status != "pending");
        setRequisitions({ data: carrydata });
      }
    } else {
      setRequisitions(data);
    }
  };
  useEffect(() => {
    filterdata();
  }, [data, filter]);

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
          {row?.status == "pending" && <div className="mt-2 text-white bg-warning p-1 px-2 rounded">Pending</div>}
          {row?.status == "approved" && <div className="mt-2 text-white bg-success p-1 px-2 rounded">Approved</div>}
          {row?.status == "rejected" && <div className="mt-2 text-white bg-danger p-1 px-2 rounded">Rejected</div>}
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
        </span>
      ),
    },
  ];

  const getRequisitions = async (filters) => {
    setLoading(true);
    // setRequisitions(await RequisitionService.getAll(filters));
    let res = await RequisitionService.getAll(filters);
    setData(res);
    setLoading(false);
  };

  let navigate = useNavigate();

  const routeChange = () => {
    let path = `create`;
    navigate(path);
  };
  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        {user.permissions.includes("requisitions_approve") ? (
          <Table
            name="Requisitions"
            buttonName="Add Requisition"
            onClickButton={routeChange}
            callbackButtons={[
              {
                name: filter ? "All" : "Pending",
                callback: () => {
                  setFilter(!filter);
                },
                permission: null,
              },
            ]}
            isLoading={loading}
            data={requisitions}
            columns={columns}
            onFilter={getRequisitions}
            buttonPermission="requisitions_create"
          />
        ) : (
          <Table
            name="Requisitions"
            buttonName="Add Requisition"
            onClickButton={routeChange}
            isLoading={loading}
            data={requisitions}
            columns={columns}
            onFilter={getRequisitions}
            buttonPermission="requisitions_create"
          />
        )}
      </div>
    </div>
  );
};

export default Requisitions;
