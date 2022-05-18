import React, { useEffect, useState } from "react";
import Table from "components/utils/Table";
import PermissionAbility from "helpers/PermissionAbility";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import DeliverNoteService from "services/DeliverNoteService";
import DateFilter from "./DateFilter";
import ReportService from "services/ReportService";
const PartStockReport = () => {
  const [loading, setLoading] = useState(true);
  const [stockHistory, setStockHistory] = useState([]);
  const [filter, setFilter] = useState({});
  const [enableFilter, setEnableFilter] = useState(false);

  const getReports = async (filters) => {
    setLoading(true);
    const res =await ReportService.stockHistory(filters);
    if (res) {
        setStockHistory(res)
    }
    // setStockHistory(await ReportService.stockHistory(filters));
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
              to={"/panel/parts/" + row?.part_id}
              className="text-dark fw-bolder text-hover-primary"
            >
              {row?.part_name}
            </Link>
           
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Previous Unit Value",
      selector: (row) => row?.prev_unit_value,
      format: (row) => (
        <div className="mt-2">{row?.prev_unit_value}</div>
      ),
      sortable: true,
      field: "prev_unit_value",
    },
  
    {
      name: "Current Unit Value",
      selector: (row) => row?.current_unit_value,
      sortable: true,
      field: "name",
      format: (row) => (
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-start flex-column">
            <div className="text-dark fw-bolder text-hover-primary">
              {row?.current_unit_value}
            </div>
          </div>
        </div>
      ),
    },

    {
      name: "Type",
      selector: (row) => row?.type,
      format: (row) => (
        <div className="mt-2">{row?.type == "addition" ? <i className="fa fa-arrow-up" style={{color:"green",fontSize:"20px"}}></i>:<i className="fa fa-arrow-down" style={{color:"red",fontSize:"20px"}}></i>}</div>
      ),
      sortable: true,
      field: "type",
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
            name="Stock Histories" 
            isLoading={loading}
            data={stockHistory}
            // buttonName='Filter'
            // onClickButton={() => { setEnableFilter(!enableFilter) }}
            // callbackButtons={[
            //   {
            //     name: 'Export',
            //     callback: () => { exportSales() },
            //     permission: null
                
            //   },
            // ]}
            columns={columns}
            onFilter={filterData}
          />
        </div>
      </div>
      <DateFilter enable={enableFilter} onChange={(data) => {filterData(data)}} />
    </>
  );
};

export default PartStockReport;
