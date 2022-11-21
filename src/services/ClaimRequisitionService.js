import http from "../http-common";

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

// const create = async (data) => {
//   const res = await http.post(`/claim-requisitions`, data);
//   return res.data;
// };

// const createrequiredrequisitions = async (data) => {
//   const res = await http.post(`required-part/requisitions`, data);
//   return res.data;
// };

// //file upload
// const fileUpload = async (id, data) => {
//   console.log("shanto", data);
//   const res = await http.post(`/claim-requisitions/${id}/files`, data);
//   return res.data;
// };

// //get file
// const getFile = async (id) => {
//   const res = await http.get(`/claim-requisitions/${id}/files`);
//   return res.data;
// };

// //get file
// const deleteFile = async (uuid, model_id) => {
//   const res = await http.delete(
//     `/claim-requisitions/${model_id}/files/${uuid}/delete`
//   );
//   return res.data;
// };

const ClaimRequisitionService = {
  getAll
};

export default ClaimRequisitionService;
