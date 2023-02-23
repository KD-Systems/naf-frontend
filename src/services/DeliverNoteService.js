import http from "../http-common";

const getAll = async (data) => {
  const res = await http.get(`/delivery-notes`, {
    params: data
});
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/delivery-notes/${id}`);
  return res.data;
};

const create = async (data) => {
  const res = await http.post(`/delivery-notes`, data) 
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/delivery-notes/${id}`);
  return res.data;
};

const deliveredFocParts = async (data) => {
  const res = await http.get(`/delivered-foc-parts`, {
    params: data
});
  return res.data;
};

//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/delivery-notes/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/delivery-notes/${id}/files`);
  return res.data;
};

//delete file
const deleteFile = async (uuid, model_id) => {
  const res = await http.delete(
    `/delivery-notes/${model_id}/files/${uuid}/delete`
  );
  return res.data;
};


const DeliverNoteService = {
  getAll,
  get,
  create,
  remove,
  deliveredFocParts,

  //Attachment File functanality
  fileUpload,
  getFile,
  deleteFile
};

export default DeliverNoteService;