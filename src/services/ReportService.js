import http from "../http-common";


const getAll = async (filters) => {
    const res = await http.get("/report/sales", {
      params: filters
    });
    return res.data;
};

const reportExcel = async()=>{
  const res = await http.get("/monthly/sales");
  
  return res.data;
}

const ReportService = {
    getAll,
    reportExcel
};
  
export default ReportService;