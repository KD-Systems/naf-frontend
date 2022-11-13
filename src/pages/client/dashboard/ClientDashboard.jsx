import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DashboardService from "services/DashboardService";

import ScrollableTable from "components/dashboard/ScrollableTable";
import StatisticsChartWidget from "components/dashboard/StatisticsChartWidget";
import Statistics from "components/dashboard/Statistics";
import ClientStatistics from "components/dashboard/ClientStatistics";
import ClientUserService from "services/clientServices/ClientUserService";

const ClientDashboard = () => {
  const [statistics, setStatistics] = useState({});
  const[companyInfo, setCompanyInfo] = useState({});
  const[companyAdvance, setCompanyAdvance] = useState({});
  const [stockAlert, setStockAlert] = useState({ headers: [], data: [] });
  const getStatistics = async () => {
    const res = await DashboardService.getStatisticsData();
    setStatistics(res);
  };

  const getCompanyInfo= async () =>{
    const res = await ClientUserService.getCompanyInfo();
    console.log("shanto",res);
    setCompanyInfo(res.user);
    setCompanyAdvance(res);
  };
  // const getCompanyAdvance= async () =>{
  //   const res = await ClientUserService.getCompanyAdvance();
  //   console.log("shanto",res);
  //   setAdvance(res);
  // }

  const getStockAlert = async () => {
    const res = await DashboardService.getClientInvoiceDetails();
    var data = [];
    res.forEach((element) => {
      data.push({
        id: element?.id,
        invoice_number: element?.invoice_number,
        quotation_number: element?.quotation_number,
        requistion_number: element?.requistion_number,
        type:
          element?.type == "purchase_request" ? (
            <div className="mt-0 text-white bg-warning p-1 rounded d-flex justify-content-center">
              Purchase Request
            </div>
          ) : (
            <div className="mt-0 text-white bg-success p-1 rounded d-flex justify-content-center">
              Claim Report
            </div>
          ),
        total_amount: Math.floor(element?.total_amount),
        total_paid: element?.total_paid
          ? Math.floor(element?.total_paid)
          : "--",
        // total_due:
        //   element?.type == "purchase_request"
        //     ? element?.total_amount - element?.total_paid
        //     : "--",
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
        // "Due Amount",
      ],
      data: data,
    });
  };

  useEffect(() => {
    getStatistics();
    getStockAlert();
    getCompanyInfo();
    // getCompanyAdvance();
  }, []);

  return (
    <div id="kt_content_container" className="container-xxl">
      <ClientStatistics
        data={companyInfo?.due_amount}
        title={"Due amount"} 
      />
      <br />
      <ClientStatistics
        data={companyAdvance.advanceAmount}
        title={"Advance Amount"} 
      />
      <Row>

      {/* <Col sm={6} xl={4}>
          <StatisticsChartWidget
            title="Total Due"
            // stats={data?.due}
            trend={{
              textClass: "text-success",
              icon: "uil uil-arrow-up",
              // value: "10.21%",
            }}
            colors={["#727cf5"]}
          />
        </Col> */}

        <Col xl={12}>
          <ScrollableTable
          
            headers={stockAlert.headers}
            records={stockAlert.data}
            title="Payment Histories"
            url="/panel/client/invoices/"
          />
        </Col>
      </Row>
    </div>
  );
};

export default ClientDashboard;
