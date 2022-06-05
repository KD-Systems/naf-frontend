import http from "../../http-common";

const getAll = async (data) => {
  const res = await http.get(`/client-requisitions`, {
    params: data
});
  return res.data;
};

const ClientRequisitionService = {
  getAll
};

export default ClientRequisitionService;