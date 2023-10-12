import ClientStatistics from "components/dashboard/ClientStatistics";
import ColumnDataLabelsChart from "components/dashboard/ColumnDataLabelsChart";
import PieChart from "components/dashboard/PieChart";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DashboardService from "services/DashboardService";

const Dashboard = () => {
  const [data, setData] = useState(null);
  console.log("🚀 ~ file: ClientDashboard.jsx:10 ~ Dashboard ~ data:", data);

  const getData = async () => {
    const res = await DashboardService.getDashboardData();
    var varData = {};

    const top_product = res?.top_product;
    var data = [];
    var label = [];
    top_product.forEach((element) => {
      data?.push(element?.totalSell ?? 0);
      label?.push(element?.name ? element?.name[0] : "N/A");
    });

    varData = { ...varData, top_product: { data: data, label: label } };
    varData = {
      ...varData,
      statistics: [
        {
          name: "GRAND TOTAL",
          value: res?.sales,
        },
        {
          name: "DUE AMOUNT",
          value: res?.due,
        },
        {
          name: "ADVANCE AMOUNT",
          value: res?.advance,
        },
      ],
    };

    var carr = {
      Jan: 0,
      Feb: 0,
      Mar: 0,
      Apr: 0,
      May: 0,
      Jun: 0,
      Jul: 0,
      Aug: 0,
      Sep: 0,
      Oct: 0,
      Nov: 0,
      Dec: 0,
    };
    var data = [];
    var label = [];
    try {
      carr = { ...carr, ...res?.monthWise?.monthly };
    } catch (error) {
      console.log(error);
    }

    for (var name in carr) {
      data.push(carr[name]);
      label.push(name);
    }

    varData = { ...varData, monthly_report: { data: data, label: label } };

    setData(varData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="kt_content_container" className="container-xxl">
      <ClientStatistics
        data={data?.statistics}
      />
      <br />
      <Row>
        <Col xl={8}>
          <ColumnDataLabelsChart
            data={data?.monthly_report?.data}
            categories={data?.monthly_report?.label}
            title="Monthly Report"
          />
        </Col>
        <Col xl={4}>
          {data?.top_product?.data?.length > 0 && (
            <PieChart
              pieChartData={data?.top_product?.data}
              height={355}
              labels={data?.top_product?.label}
              title={"Top Selling Product (" + new Date().getFullYear() + ")"}
            />
          )}
        </Col>
      </Row>
      {/* <br />
      <Row>
        <Col xl={8}>
          <ScrollableTable
            headers={stockAlert.headers}
            records={stockAlert.data}
            title="Stocks Alert"
            url="/panel/parts/"
            height={220}
            exportAble={true}
          />
        </Col>
        <Col xl={4}>
          <ScrollableTable
            headers={topSellingProductbyMonth.headers}
            records={topSellingProductbyMonth.data}
            title={
              "Top Selling Product (" + monthNames[new Date().getMonth()] + ")"
            }
            url="/panel/parts/"
            height={220}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col xl={8}>
          <ScrollableTable
            headers={recentSales.headers}
            records={recentSales.data}
            title="Recent Sales"
            url="/panel/parts/"
            height={380}
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
      <br /> */}
    </div>
  );
};

export default Dashboard;
