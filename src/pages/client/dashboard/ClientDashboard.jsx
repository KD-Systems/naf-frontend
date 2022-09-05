import React, { useState, useEffect } from "react";
import DashboardService from "services/DashboardService";
import { Row, Col } from "react-bootstrap";

import Statistics from "components/dashboard/Statistics";
import ColumnDataLabelsChart from "components/dashboard/ColumnDataLabelsChart";
import PieChart from "components/dashboard/PieChart";
import BorderlessTable from "components/dashboard/BorderlessTable";
import moment from "moment";

const ClientDashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [monthlyReport, setMonthlyReport] = useState({});
  const [topSellingProductbyMonth, setTopSellingProductbyMonth] = useState({
    data: [],
    label: [],
  });
  const [stockAlert, setStockAlert] = useState({ headers: [], data: [] });
  const [topSellingProductbyYear, setTopSellingProductbyYear] = useState({
    data: [],
    label: [],
  });
  const [recentSales, setRecentSales] = useState({ headers: [], data: [] });
  const [topCustomers, setTopCustomers] = useState({ data: [], label: [] });

  const getStatistics = async () => {
    const res = await DashboardService.getStatisticsData();
    setStatistics(res);
  };

  const getMonthlyReport = async () => {
    const res = await DashboardService.getMonthlyData();
    var carr = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
    };
    carr = { ...carr, ...res.monthly };
    var data = [];
    var label = [];
    for (var name in carr) {
      data.push(carr[name]);
      label.push(name);
    }
    setMonthlyReport({ label: label, data: data });
  };

  const getTopSellingProductbyMonth = async () => {
    const res = await DashboardService.getTopProductSellingByMonth();
    var data = [];
    res.forEach((element) => {
      data.push({
        id: element?.part_id,
        name: element?.name[0].slice(0, 25) + "...",
        value: element?.totalSell,
      });
    });

    setTopSellingProductbyMonth({
      data: data,
      headers: ["ID", "Product Name", "Total"],
    });
  };

  const getStockAlert = async () => {
    const res = await DashboardService.getStockData();
    var data = [];
    res.forEach((element) => {
      data.push({
        id: element?.part_id,
        warehouse: element?.warehouse,
        name: element?.name.slice(0, 25) + "...",
        remaining: element?.unit_value,
      });
    });

    setStockAlert({
      headers: ["ID", "WareHouse", "Product Name", "Remaining"],
      data: data,
    });
  };

  const getTopSellingProductbyYear = async () => {
    const res = await DashboardService.getTopProductSellingByYear();
    var data = [];
    var label = [];
    res.forEach((element) => {
      data.push(element?.totalSell);
      label.push(element?.name[0]);
    });

    setTopSellingProductbyYear({
      data: data,
      label: label,
    });
  };

  const getRecentSales = async () => {
    const res = await DashboardService.getRecentSale();
    var data = [];
    res.forEach((element) => {
      data.push({
        id: element?.part_id,
        Product_Name: element?.part_name,
        Product_Number: element?.part_number,
        Company_Name: element?.company_name,
        Qnty: element?.quantity,
        Purchse_Date: moment(element?.created_at).format("DD-MMM-YYYY"),
      });
    });

    setRecentSales({
      headers: [
        "ID",
        "Product Name",
        "Part Number",
        "Company Name",
        "Qnty",
        "Purchse Date",
      ],
      data: data,
    });
  };

  const getTopCustomers = async () => {
    const res = await DashboardService.getTopCustomers();
    var data = [];
    var label = [];
    res.forEach((element) => {
      label.push(element?.company_name);
      data.push(element?.quantity);
    });
    setTopCustomers({
      data: data,
      label: label,
    });
  };

  useEffect(() => {
    getStatistics();
    getMonthlyReport();
    getTopSellingProductbyMonth();
    getStockAlert();
    getTopSellingProductbyYear();
    getRecentSales();
    getTopCustomers();
  }, []);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div id="kt_content_container" className="container-xxl">
      <Statistics data={statistics} title={['Total Purchase','Total Pay','Total Due']} />
      <br />
      <Row>
        <Col xl={12}>
          <BorderlessTable
            headers={stockAlert.headers}
            records={stockAlert.data}
            title="Stocks Alert"
            url="/panel/parts/"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientDashboard;
