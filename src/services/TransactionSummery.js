import http from "../http-common";


const getAll = async (data) => {
  const res = await http.get("/transaction-summery", {
      params: data
  });

  return res.data;
};

const get = async (id) => {
    const res = await http.get(`/transaction-summery/${id}`);
    return res.data;
    
  };

const TransactionSummery = {
    getAll,
    get
  };
  
  export default TransactionSummery;  