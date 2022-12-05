import Table from "components/utils/Table";
import UpdatePartInfo from "pages/foc-requisitions/section/UpdatePartInfo";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
import ReportService from "services/ReportService";
import Filter from "./section/Filter";
import { Link } from "react-router-dom";

import UpdateDeliveredPartInfo from "./section/UpdateDeliveredPartInfo";
const DeliveredFocParts = () => {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState({});
  const [enableFilter, setEnableFilter] = useState(false);
  const [deliveredPartModal, setDeliveredPartModal] = useState(false);
  const onCloseModal = () => {
    setDeliveredPartModal(false);
  };

  const getReports = async (filters) => {
    setReports(await DeliverNoteService.deliveredFocParts(filters));
    setLoading(false);
  };

  const columns = [
    {
      name: "Part Name",
      selector: (row) => row?.part_name,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
              
              <Link
              to={'/panel/parts/' + row.part_id}
              className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >
              {row?.part_name}
            </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Part Number",
      selector: (row) => row?.part_number,
      format: (row) => <div className="mt-2">{row?.part_number}</div>,
      sortable: true,
      field: "part_number",
    },

    {
      name: "Company",
      selector: (row) => row?.company_name,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">            
              <Link
              to={'/panel/companies/' + row.company_id}
              className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >
              {row?.company_name}
            </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "DN Number",
      selector: (row) => row?.dn_number,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
              <Link
              to={'/panel/delivery-notes/' + row.delivery_id}
              className="text-dark fw-bolder text-hover-primary mb-1 fs-6"
            >
              {row?.dn_number}
            </Link>
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Quantity",
      selector: (row) => row?.quantity,
      format: (row) => <div className="mt-2">{row?.quantity}</div>,
      sortable: true,
      field: "quantity",
    },

    {
      name: "Total",
      selector: (row) => row?.total_value,
      format: (row) => <div className="mt-2">{row?.total_value}</div>,
      sortable: true,
      field: "total_value",
    },

    {
      name: "Status",
      selector: (row) => row?.status,
      format: (row) => <div className="mt-2">{row?.status.replaceAll("_", " ")?.capitalize()}</div>,
      sortable: true,
      field: "status",
    },

    {
      name: "Remarks",
      selector: (row) => row?.remarks,
      format: (row) => <div className="mt-2">{row?.remarks ?? "--"}</div>,
      sortable: true,
      field: "remarks",
    },

    {
      name: "Created At",
      selector: (row) => row?.created_at,
      format: (row) => (
        <div className="mt-2">
          <Moment format="YYYY-MM-DD">{row?.created_at}</Moment>
        </div>
      ),
      sortable: true,
      field: "created_at",
    },

    {
      name: "Action",
      selector: (row) => row,
      format: (row) => (
        <>
          <span className="text-end">
            {/* <PermissionAbility permission="stock_report_view"> */}
              <div
                onClick={() => {
                  setItem(row);
                  setDeliveredPartModal(true);
                }}
                className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                data-toggle="tooltip"
                title="Add Delivery Note"
              >
                <i className="fa fa-eye"></i>
              </div>
            {/* </PermissionAbility> */}
          </span> 
        </>
      ),
    },
  ];

  const filterData = (dt) => {
    setFilter({
      ...filter,
      ...dt,
    });

    setEnableFilter(false);
  };

  const exportSales = async (filters) => {
    // return
    setLoading(true);
    let data = await ReportService.salesExport(filters);
    window.location.href = data;
    setLoading(false);
  };

  useEffect(() => {
    if (filter.order)
      //Just to avoid double load
      getReports(filter);
  }, [filter]);

  return (
    <>
      <div className="post d-flex flex-column-fluid">
        <div className="container-xxl">
          <Table
            name="Reports"
            isLoading={loading}
            data={reports}
            buttonName="Filter"
            onClickButton={() => {
              setEnableFilter(!enableFilter);
            }}
            // callbackButtons={[
            //   {
            //     name: "Export",
            //     callback: () => {
            //       exportSales(filter);
            //     },
            //     permission: null,
            //   },
            // ]}
            columns={columns}
            onFilter={filterData}
          />
        </div>
      </div>
      <Filter
        enable={enableFilter}
        onClickOutside={() => {
          setEnableFilter(!enableFilter);
        }}
        onChange={(data) => {
          filterData(data);
        }}
      />
      <UpdateDeliveredPartInfo
        open={deliveredPartModal}
        part={item}
        onCloseModal={onCloseModal}
        onUpdated={getReports}
      />
    </>
  );
};

export default DeliveredFocParts;
