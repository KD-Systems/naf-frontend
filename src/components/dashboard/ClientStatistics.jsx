import React from "react";
import { Row, Col } from "react-bootstrap";
import StatisticsChartWidget from "./StatisticsChartWidget";

const ClientStatistics = ({data, title}) => {
  return (
    <div>
      <Row>
        <Col sm={6} xl={4}>

        </Col>

        <Col sm={6} xl={4}>

        </Col>
        <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title={title}
            stats={data}
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

export default ClientStatistics;
