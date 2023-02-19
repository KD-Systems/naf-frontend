import http from "../http-common";

const create = async (data) => {
  const res = await http.post(`/claim-requisitions`, data);
  return res.data;
};
//for admin claim requisition
const getAll = async (data) => {
  const res = await http.get(`/claim-requisitions`, {
    params: data,
  });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/claim-requisitions/${id}`);
  return res.data;
};

//claim request
const getAllClaimRequest = async (data) => {
  const res = await http.get(`/claim-request`, {
    params: data,
  });
  return res.data;
};

//for client claim request and requisition
// const createClientClaimRequest = async (data) => {
//   const res = await http.post(`/client-claim-request-create`, data);
//   return res.data;
// };

// const getAllClientClaimRequest = async (data) => {
//   const res = await http.get(`/client-claim-request`, {
//     params: data,
//   });
//   return res.data;
// };

// const getClientClaimRequisition = async (data) => {
//   const res = await http.get(`/client-claim-requisition`, {
//     params: data,
//   });
//   return res.data;
// };

//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/claim-request/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/claim-request/${id}/files`);
  return res.data;
};

//delete file
const deleteFile = async (uuid, model_id) => {
  const res = await http.delete(
    `/claim-request/${model_id}/files/${uuid}/delete`
  );
  return res.data;
};


const ClaimRequisitionService = {
  create,
  getAll,
  getAllClaimRequest,
  //for client
  // createClientClaimRequest,
  // getAllClientClaimRequest,
  // getClientClaimRequisition

    //Attachment File functanality
    fileUpload,
    getFile,
    deleteFile,
};

export default ClaimRequisitionService;
