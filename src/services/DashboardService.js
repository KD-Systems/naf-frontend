import http from "../http-common";

const getStatisticsData = async () => {
  const res = await http.get('/sell-purchase');
  return res.data;
};


const DashboardService = {
    getStatisticsData,
};

export default DashboardService;
