import http from "../../http-common";


//for client claim request
const createClientClaimRequest = async (data) => {
  const res = await http.post(`/client-claim-request-create`, data);
  return res.data;
};

const getAllClientClaimRequest = async (data) => {
  const res = await http.get(`/client-claim-request`, {
    params: data,
  });
  return res.data;
};
//for client claim requisition
const getClientClaimRequisition = async (data) => {
  const res = await http.get(`/client-claim-requisition`, {
    params: data,
  });
  return res.data;
};


const ClientClaimRequisitionService = {

  createClientClaimRequest,
  getAllClientClaimRequest,
  getClientClaimRequisition
};

export default ClientClaimRequisitionService;
