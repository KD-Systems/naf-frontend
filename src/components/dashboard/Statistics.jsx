import { Card, Col, Row } from "react-bootstrap";

const Statistics = ({data, title}) => {
  return (
    <div>
      <Row>
        <Col sm={6} xl={4}>
          <Card>
          <Card.Body>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="text-muted text-uppercase fs-12 fw-bold">{title[0]} (Lifetime)</span>
                        <h3 className="mb-0">BDT {data?.sell}</h3>
                    </div>                    
                </div>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={6} xl={4}>
        <Card>
          <Card.Body>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="text-muted text-uppercase fs-12 fw-bold">{title[1]} (Lifetime)</span>
                        <h3 className="mb-0">BDT {data?.buy}</h3>
                    </div>                    
                </div>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} xl={4}>
        <Card>
          <Card.Body>
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <span className="text-muted text-uppercase fs-12 fw-bold">{title[2]} (Lifetime)</span>
                        <h3 className="mb-0">BDT {data?.profit}</h3>
                    </div>                    
                </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;
