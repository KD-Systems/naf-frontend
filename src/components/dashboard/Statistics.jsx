import React from "react";
import { Row, Col } from "react-bootstrap";
import StatisticsChartWidget from "./StatisticsChartWidget";

const Statistics = ({data}) => {
  return (
    <div>
      <Row>
        <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title="Total Sell"
            stats={data?.sell}
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              // value: "10.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col>

        <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title="Total Purchase"
            stats={data?.buy}
            trend={{
              textClass: "text-danger",
              icon: "uil uil-arrow-down",
              // value: "5.05%",
            }}
            colors={["#f77e53"]}
          />
        </Col>
        <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title="Total Profit"
            stats={data?.profit}
            trend={{
              textClass: "text-danger",
              icon: "uil uil-arrow-down",
              // value: "5.05%",
            }}
            colors={["#0a0"]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
