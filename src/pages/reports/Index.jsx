import React, { useEffect, useState } from "react";
import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
import DateFilter from "./DateFilter";
import ReportService from "services/ReportService";
const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState({});
  const [enableFilter, setEnableFilter] = useState(false);

  const getReports = async (filters) => {
    setLoading(true);
    setReports(await ReportService.getAll(filters));
    setLoading(false);
  };


  const columns = [
    {
      name: "Id",
      selector: (row) => row?.id,
      sortable: true,
      field: "id",
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
              {row?.company_name}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Part Name",
      selector: (row) => row?.part_name,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
           {/* { row?.part_items?.map((item)=>item?.part?.aliases[0]?.name)} */}
           {row?.part_name}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Part Number",
      selector: (row) => row?.part_number,
      format: (row) => (
        <div className="mt-2">{row?.part_number}</div>
      ),
      sortable: true,
      field: "part_number",
    },
    {
      name: "Quantity",
      selector: (row) => row?.quantity,
      format: (row) => (
        <div className="mt-2">{row?.quantity}</div>
      ),
      sortable: true,
      field: "quantity",
    },

    {
      name: "Created At",
      selector: (row) => row?.created_at,
      format: (row) => (
        <div className="mt-2"><Moment format="YYYY-MM-DD">{row?.created_at}</Moment></div>
      ),
      sortable: true,
      field: "created_at",
    },

  ];


  const filterData = (dt) => {
    setFilter({
      ...filter,
      ...dt
    })

    setEnableFilter(false)
  }

  useEffect(() => {
    if (filter.order) //Just to avoid double load
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
            buttonName='Filter'
            onClickButton={() => { setEnableFilter(!enableFilter) }}
            columns={columns}
            onFilter={filterData}
          />
        </div>
      </div>
      <DateFilter enable={enableFilter} onChange={(data) => {filterData(data)}} />
    </>
  );
};

export default Reports;
