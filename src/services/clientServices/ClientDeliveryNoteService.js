import http from "../../http-common";

const getAll = async (data) => {
  const res = await http.get(`/client-delivery-notes`, {
    params: data
});
  return res.data;
};

const ClientDeliverNoteService = {
    getAll
  };
  
  export default ClientDeliverNoteService;