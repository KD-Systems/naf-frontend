import React, { useState } from "react";
import Table from "components/utils/Table";
import { Link,useNavigate } from "react-router-dom";
import ClientRequisitionService from "services/clientServices/ClientRequisitionService";
import PermissionAbility from "helpers/PermissionAbility";

const CompanyRequisitions = () => {
  const [loading, setLoading] = useState(false);
  const [requisitions, setRequisitions] = useState([]);

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
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <span className="text-end">
          <Link
            to={"/panel/requisitions/" + row.id}
            className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
          >
            <i className="fa fa-eye"></i>
          </Link>
        </span>
      ),
    },
  ];

  const getRequisitions = async (filters) => {
    setLoading(true);
    setRequisitions(await ClientRequisitionService.getAll(filters));
    setLoading(false);
  };

  let navigate = useNavigate()

  const routeChange = ()=>{
      let path = `create`;
      navigate(path)
  }
  return (
    <div className="post d-flex flex-column-fluid">
      <div className="container-xxl">
        <Table
          name="client Requisitions"
          buttonName="Add Requisition"
          onClickButton={routeChange}
          isLoading={loading}
          data={requisitions}
          columns={columns}
          onFilter={getRequisitions}
        />
      </div>
    </div>
  );
};

export default CompanyRequisitions;
