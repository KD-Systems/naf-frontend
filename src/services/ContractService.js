import http from "../http-common";

const getAll = async (params) => {
  const res = await http.get("/contracts", {
    params: params
  });
  return res;
};

const get = async (id) => {
  const res = await http.get(`/contracts/${id}`);
  return res.data;
};

const create = async (data) => {
  const res = await http.post("/contracts", data)
  return res.data;
};

const update = async (id, data) => {
  const res = await http.put(`/contracts/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/contracts/${id}`);
  return res.data;
};

//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/contracts/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/contracts/${id}/files`);
  return res.data;
};

//delete file
const deleteFile = async (uuid, model_id) => {
  console.log(uuid);
  const res = await http.delete(
    `/contracts/${model_id}/files/${uuid}/delete`
  );
  return res.data;
};

const ContractService = {
  getAll,
  get,
  create,
  update,
  remove,

   //Attachment File functanality
   fileUpload,
   getFile,
   deleteFile,
};

export default ContractService;