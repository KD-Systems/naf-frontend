import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DashboardService from "services/DashboardService";

import ScrollableTable from "components/dashboard/ScrollableTable";
import Statistics from "components/dashboard/Statistics";

const ClientDashboard = () => {
  const [statistics, setStatistics] = useState({});
  const [stockAlert, setStockAlert] = useState({ headers: [], data: [] });
  const getStatistics = async () => {
    const res = await DashboardService.getStatisticsData();
    setStatistics(res);
  };

  const getStockAlert = async () => {
    const res = await DashboardService.getClientInvoiceDetails();
    console.log(
      "🚀 ~ file: ClientDashboard.jsx ~ line 18 ~ getStockAlert ~ res",
      res
    );

    var data = [];
    res.forEach((element) => {
      console.log(
        "🚀 ~ file: ClientDashboard.jsx ~ line 23 ~ res.forEach ~ element",
        element
      );
      data.push({
        id: element?.id,
        invoice_number: element?.invoice_number,
        quotation_number: element?.quotation_number,
        requistion_number: element?.requistion_number,
        type:
          element?.type == "purchase_request"
            ? "Purchase Request"
            : "Claim Report",
        total_amount: Math.floor(element?.total_amount),
        total_paid: element?.total_paid ?? "--",
        total_due:
          element?.type == "purchase_request"
            ? element?.total_amount - element?.total_paid
            : "--",
      });
    });
    setStockAlert({
      headers: [
        "SL",
        "Invoice Number",
        "Quotation Number",
        "Requisition Number",
        "Type",
        "Total Amount",
        "Paid Amount",
        "Due Amount",
      ],
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
          <ScrollableTable
            headers={stockAlert.headers}
            records={stockAlert.data}
            title="Invoice"
            url="/panel/client/invoices/"
            height={610}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientDashboard;
