import Table from "components/utils/Table";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClaimRequisitionService from "services/ClaimRequisitionService";
import RequisitionFilter from "./RequisitionFilter";

const ClientClaimRequisition = () => {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [focClaimRequisition, setFocClaimRequisition] = useState([]);

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
      format: (row) => ( <div className="mt-2"> {row?.expected_delivery ? row?.expected_delivery : "--"} </div>),
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
      format: (row) => (<div className="mt-2"> {row?.quotation?.pq_number ? row?.quotation?.pq_number : "No quotation yet"} </div> ),
    },

    {
      name: "Action",
      selector: (row) => row.status,
      format: (row) => (
        <span className="text-end">
          <Link to={"/panel/client-claim-requisitions/" + row.id} className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1" >
            <i className="fa fa-eye"></i>
          </Link>
        </span>
      ),
    },
  ];

  const getClientClaimRequisitions = async (data) => {
    setFocClaimRequisition(await ClaimRequisitionService.getClientClaimRequisition(data));
    setLoading(false);
  };

  
  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Claim Request"            
            buttonName="Filter"
            onClickButton={() => setFilter(!filter)}
            isLoading={loading}
            data={focClaimRequisition}
            columns={columns}
            onFilter={getClientClaimRequisitions}
          />
        </div>
      </div>
      <RequisitionFilter
        enable={filter}
        onChange={(data) => {
          getClientClaimRequisitions(data);
        }}
      />
    </>
  );
};

export default ClientClaimRequisition;
