import React from "react";
import { Row, Col } from "react-bootstrap";
import StatisticsChartWidget from "./StatisticsChartWidget";

const ClientStatistics = ({data, title}) => {
  return (
    <div>
      <Row>
      <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title={title[0]}
            stats={data[0]?.total_amount}
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
            title={title[1]}
            stats={data[0]?.total_paid}
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
            title={title[2]}
            stats={data[0]?.total_due ?? "0"}
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              // value: "10.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col>
        
        <Col sm={6} xl={4} className="mt-5">
          <StatisticsChartWidget
            title={title[3]}
            stats={data[1]?.advanceAmount ?? "0"}
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              // value: "10.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientStatistics;
