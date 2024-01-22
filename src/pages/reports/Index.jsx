import Table from "components/utils/Table";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import ReportService from "services/ReportService";
import DateFilter from "./DateFilter";
import { Link } from "react-router-dom";
const Reports = () => {
  const [loading, setLoading] = useState(true);
  const [reports, setReports] = useState([]);
  const [filter, setFilter] = useState({});
  const [enableFilter, setEnableFilter] = useState(false);

  const getReports = async (filters) => {
    setReports(await ReportService.getAll(filters));
    setLoading(false);
  };

  const columns = [
    {
      name: "Company",
      selector: (row) => row?.company_name,
      sortable: true,
      field: "name",
      format: (row) => (
        <Link
            to={"/panel/companies/" + row?.company_id}
            className="text-dark fw-bolder text-hover-primary"
          >
            {row?.company_name}
        </Link>
      ),
    },

    {
      name: "Invoice",
      selector: (row) => row?.invoice_numbers,
      sortable: true,
      field: "name",
      wrap: true,
      format: (row) => {
        let numbers = row?.invoice_numbers.split(',');
        return row.invoice_ids.split(',').map((id, i) => { 
        return <><Link
            to={"/panel/invoices/" + id}
            className="text-dark fw-bolder text-hover-primary"
            >
            {numbers[i]}
          </Link>
          {numbers.length == ++i ? '' : ', '}
          </>
        })
      }
    },
    {
      name: "Sub Total",
      selector: (row) => row?.sub_total,
      format: (row) => <div className="mt-2">{row?.sub_total} BDT</div>,
      sortable: true,
      field: "sub_total",
    },

    {
      name: "Grand Total",
      selector: (row) => row?.grand_total,
      format: (row) => <div className="mt-2">{row?.grand_total} BDT</div>,
      sortable: true,
      field: "grand_total",
    },

    {
      name: "Date",
      wrap: true,
      selector: (row) => row?.dates,
      format: (row) => {
        let dates = row.dates.split(',');
        return dates.map((date, i) => {
          return <><Moment format="YYYY-MM-DD">{date}</Moment>{dates.length == ++i ? '' : ', '}</>
        })
      },
      sortable: true,
      field: "created_at",
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
            callbackButtons={[
              {
                name: "Export",
                callback: () => {
                  exportSales(filter);
                },
                permission: null,
              },
            ]}
            columns={columns}
            onFilter={filterData}
          />
        </div>
      </div>
      <DateFilter
        enable={enableFilter}
        onClickOutside={() => {
          setEnableFilter(!enableFilter);
        }}
        onChange={(data) => {
          filterData(data);
        }}
      />
    </>
  );
};

export default Reports;
