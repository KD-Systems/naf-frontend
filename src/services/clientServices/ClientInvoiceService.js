import http from "../../http-common";

const getAll = async (data) => {
  const res = await http.get(`/client-invoice`, {
    params: data
});
  return res.data;
};

const ClientInvoiceService = {
    getAll
  };
  
  export default ClientInvoiceService;