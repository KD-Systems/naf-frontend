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
      name: "PQ Number",
      selector: (row) => row?.quotation?.pq_number,
      sortable: true, 
      field: "role",
      format: (row) => (
        <div className='mt-2'>
          {row?.quotation?.pq_number ? (
            row?.quotation?.pq_number
          ): "No quotation yet"}
         
        </div>
      ),
    },
   
    {
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <span className="text-end">
          <Link
            to={"/panel/client/requisitions/" + row.id}
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
