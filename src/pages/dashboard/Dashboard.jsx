import React, { useState, useEffect } from "react";
import DashboardService from "services/DashboardService";
import { Row, Col } from "react-bootstrap";

import Statistics from "components/dashboard/Statistics";
import ColumnDataLabelsChart from "components/dashboard/ColumnDataLabelsChart";
import PieChart from "components/dashboard/PieChart";
import BorderlessTable from "components/dashboard/BorderlessTable";

const Dashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [monthlyReport, setMonthlyReport] = useState({ data: [], label: [] });
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

  const getMonthlyReport = () => {
    setMonthlyReport({
      data: [19, 24, 23, 41, 25, 36, 71, 18, 91, 19, 41, 62],
      label: [
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
      ],
    });
  };

  const getTopSellingProductbyMonth = async () => {
    const res = await DashboardService.getTopProductSellingByMonth();
    console.log(res);
    var data = [];

    res.forEach((element) => {
      data.push({ name: element?.name[0], value: element?.totalSell });
    });

    setTopSellingProductbyMonth({
      data: data,
      headers: ["Name", "Total"],
    });
  };

  const getStockAlert = () => {
    setStockAlert({
      headers: ["Name", "B", "C", "D", "C", "D"],
      data: [
        {
          id: 1,
          firstName: "Maark",
          lastName: "Otto",
          userName: "@mdo",
          firstNaame: "Mark",
          lastNaame: "Otto",
        },
        {
          id: 2,
          firstName: "Jacob",
          lastName: "Thornton",
          userName: "@fat",
          firstNaame: "Mark",
          lastNaame: "Otto",
        },
        {
          id: 3,
          firstName: "Larry",
          lastName: "the Bird",
          userName: "@twitter",
          firstNaame: "Mark",
          lastNaame: "Otto",
        },
        {
          id: 3,
          firstName: "Larry",
          lastName: "the Bird",
          userName: "@twitter",
          firstNaame: "Mark",
          lastNaame: "Otto",
        },
        {
          id: 3,
          firstName: "Larry",
          lastName: "the Bird",
          userName: "@twitter",
          firstNaame: "Mark",
          lastNaame: "Otto",
        },
      ],
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

  const getRecentSales = () => {
    setRecentSales({
      headers: ["B", "C", "D", "B", "C", "D", "B", "C", "D"],
      data: [
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
        {
          firstName: "Mark",
          lastName: "Otto",
          userName: "@mdo",
          fairstName: "Mark",
          laastName: "Otto",
          uaserName: "@mdo",
          fbirstName: "Mark",
          lbastName: "Otto",
          ubserName: "@mdo",
        },
      ],
    });
  };

  const getTopCustomers = () => {
    setTopCustomers({
      data: [2, 5, 3, 9, 4],
      label: ["Afnan", "Afnan", "Afnan", "Afnan", "Afnan"],
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
      <Statistics data={statistics} />
      <br />
      <Row>
        <Col xl={8}>
          <ColumnDataLabelsChart
            data={monthlyReport.data}
            categories={monthlyReport.label}
            title="Monthly Report"
          />
        </Col>
        <Col xl={4}>
          <PieChart
            pieChartData={topSellingProductbyYear.data}
            height={365}
            labels={topSellingProductbyYear.label}
            title={"Top Selling Product (" + new Date().getFullYear() + ")"}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xl={8}>
          <BorderlessTable
            headers={stockAlert.headers}
            records={stockAlert.data}
            title="Stocks Alert"
          />
        </Col>
        <Col xl={4}>
          <BorderlessTable
            headers={topSellingProductbyMonth.headers}
            records={topSellingProductbyMonth.data}
            title={
              "Top Selling Product (" + monthNames[new Date().getMonth()] + ")"
            }
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xl={8}>
          <BorderlessTable
            headers={recentSales.headers}
            records={recentSales.data}
            title="Recent Sales"
          />
        </Col>
        <Col xl={4}>
          <PieChart
            pieChartData={topCustomers.data}
            labels={topCustomers.label}
            height={380}
            title="Top 5 Customers"
          />
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default Dashboard;
