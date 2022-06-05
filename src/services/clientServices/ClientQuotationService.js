import http from "../../http-common";

const getAll = async (data) => {
  const res = await http.get(`/client-quotation`, {
    params: data
});
  return res.data;
};

const ClientQuotationService = {
    getAll
  };
  
  export default ClientQuotationService; 