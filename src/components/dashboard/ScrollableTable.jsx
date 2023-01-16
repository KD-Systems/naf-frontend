import { Card, Table } from "react-bootstrap";
import DashboardService from "services/DashboardService";

const ScrollableTable = ({ headers, records, title, url, height, exportAble="" }) => {

  const handleOnExport = async () => {
   const data = await DashboardService.exportStockAlertParts();
    window.location.href = data;
  }
  
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <h4 className="header-title">{title}</h4>
          {exportAble && records.length > 0 &&
          <button className="btn btn-primary btn-sm" onClick={handleOnExport}>        
            <i className="fa fa-download"></i> Export File
          </button>
          }
        </div>
       

        <div className="table-responsive" style={{ height: height ?? "" }}>
          <Table className="mb-0" borderless>
            <thead
              className="table-light"
              style={{ position: "sticky", top: 0 }}
            >
              <tr>
                {headers?.map((itm, index) => (
                  <th scope="col" key={index}>
                    {itm}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody style={{ overflow: "auto" }}>
              {records?.map((record, index) => {
                var data = [];
                for (var key in record) {
                  key == "id" ? data.push(index + 1) : data.push(record[key]);
                }
                return (
                  <tr key={index}>
                    {data.map((item) => {
                      return (
                        <td>
                          <a
                            href={url + record["id"]}
                            style={{ color: "#000" }}
                          >
                            {item}
                          </a>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ScrollableTable;
