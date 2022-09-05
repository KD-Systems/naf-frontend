import React, { useState, useEffect } from "react";
import DashboardService from "services/DashboardService";
import { Row, Col } from "react-bootstrap";

import Statistics from "components/dashboard/Statistics";
import BorderlessTable from "components/dashboard/BorderlessTable";
import moment from "moment";

const ClientDashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [stockAlert, setStockAlert] = useState({ headers: [], data: [] });
  const getStatistics = async () => {
    const res = await DashboardService.getStatisticsData();
    setStatistics(res);
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

  useEffect(() => {
    getStatistics();
    getStockAlert();
  }, []);

  return (
    <div id="kt_content_container" className="container-xxl">
      <Statistics
        data={statistics}
        title={["Total Purchase", "Total Pay", "Total Due"]}
      />
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
