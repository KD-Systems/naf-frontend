import http from "../http-common";


const getAll = async (filters) => {
    const res = await http.get("/report/sales", {
      params: filters
    });
    return res.data;
};

const ReportService = {
    getAll 
};
  
export default ReportService;