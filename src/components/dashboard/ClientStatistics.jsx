import { Col, Row } from "react-bootstrap";
import StatisticsChartWidget from "./StatisticsChartWidget";

const ClientStatistics = ({ data }) => {
  return (
    <div>
      <Row>
        {data?.map((item, index) => (
          <Col sm={6} xl={4} key={index}>
            <StatisticsChartWidget
              title={item?.name}
              stats={`BDT ${item?.value}`}
              trend={{
                textClass: "text-success",
                icon: "uil uil-arrow-up",
              }}
              colors={["#727cf5"]}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ClientStatistics;
