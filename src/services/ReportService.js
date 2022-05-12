import http from "../http-common";


const getAll = async (filters) => {
    const res = await http.get("/report/sales", {
      params: filters
    });
    return res.data;
};

const salesExport = async ()=>{
  const res = await http.get("/report/sales/export");
  return res.data.url;
}


const monthlySales = async ()=>{
  const res = await http.get("/report/monthly/sales");
  return res.data;
}

const ReportService = {
    getAll ,
    salesExport,
    monthlySales
};
  
export default ReportService;