import http from "../http-common";

const getStatisticsData = async () => {
  const res = await http.get('/sell-purchase');
  return res.data;
};

const getTopProductSellingByMonth = async () => {
    const res = await http.get('/top-selling-product-monthly');
    return res.data;
  };

  const getTopProductSellingByYear = async () => {
    const res = await http.get('/top-selling-product-yearly');
    return res.data;
  };


const DashboardService = {
    getStatisticsData,
    getTopProductSellingByMonth,
    getTopProductSellingByYear
};

export default DashboardService;
