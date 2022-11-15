import http from "../http-common";


const getAll = async (data) => {
  const res = await http.get("/transaction-summery", {
      params: data
  });

  return res.data;
};

const getTransactionDetails = async (id, data) => {
    const res = await http.get(`/transaction-summery/${id}`, {params:data});
    return res.data;
    
  };

  const transcExport = async (filters)=>{
    const res = await http.get("transaction-summery-export", {
      params: filters
    });
    return res.data.url;
  }

const TransactionSummery = {
    getAll,
    getTransactionDetails,
    transcExport
  };
  
  export default TransactionSummery;  