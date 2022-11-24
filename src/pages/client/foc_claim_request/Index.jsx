import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RequisitionService from "services/RequisitionService";
import ClaimRequestFilter from "./ClaimRequestFilter";

const ClientClaimRequest = () => {
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [requisitions, setRequisitions] = useState([]);
  const filterdata = (data) => {    
    setFilter(false);
    getClaimRequest(data);
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
      name: "Requisition Status",
      selector: (row) => row.requisition_id,
      sortable: true,
      field: "role",
      format: (row) => (
        <>
          {row?.requisition_id ? (
            <div
              className="mt-2 text-white bg-success p-1 px-2 rounded"
              // to={"/panel/requisitions/" + row?.requisition_id}
            >
              <Link
                to={"/panel/requisitions/" + row?.requisition_id}
                className="text-white w-100"
              >
                Created
              </Link>
            </div>
          ) : (
            <div className="mt-2 text-white bg-warning p-1 px-2 rounded w-100">
              Not yet created
            </div>
          )}
        </>
      ),
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
            <div className="mt-2 text-white bg-info p-1 px-2 rounded">
              On Going
            </div>
          )}
          {row?.status == "complete" && (
            <div className="mt-2 text-white bg-success p-1 px-2 rounded">
              Complete
            </div>
          )}
        </>
      ),
    },

    // {
    //   name: "Action",
    //   selector: (row) => row.status,
    //   format: (row) => (
    //     <span className="text-end">
    //       <PermissionAbility permission="requisitions_show">
    //         <Link
    //           to={"/panel/claim-requests/" + row.id}
    //           className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
    //         >
    //           <i className="fa fa-eye"></i>
    //         </Link>
    //       </PermissionAbility>
    //     </span>
    //   ),
    // },
  ];

  const getClaimRequest = async (filters) => {
    let res = await RequisitionService.getAllClaimRequest(filters);
    setRequisitions(res);
    setLoading(false);
  };
  useEffect(() => {
    getClaimRequest();
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
            name="Required Requisitions"
            buttonName="Add Claim Request"
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
      <ClaimRequestFilter
        enable={filter}
        onChange={(data) => {
          filterdata(data);
        }}
      />
    </>
  );
};

export default ClientClaimRequest;
