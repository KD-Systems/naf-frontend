import http from "../http-common";

const getAll = async (data) => {
  const res = await http.get(`/requisitions`, {
    params: data,
  });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/requisitions/${id}`);
  return res.data;
};

const items = async (id) => {
  const res = await http.get(`/requisitions/${id}/part-items`);
  return res.data;
};

const engineers = async () => {
  const res = await http.get("/requisitions/engineers");
  return res.data;
};

const partHeadings = async (data) => {
  const res = await http.get("/requisitions/part-headings", {
    params: data,
  });
  return res.data;
};

const create = async (data) => {
  console.log("Afnan submit", data);
  const res = await http.post(`/requisitions`, data);
  return res.data;
};

const update = async (id, data) => {
  const res = await http.put(`/requisitions/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/requisitions/${id}`);
  return res.data;
};

const approve = async (id) => {
  const res = await http.post(`/requisitions/approve/${id}`);
  return res.data;
};

const reject = async (id) => {
  const res = await http.post(`/requisitions/reject/${id}`);
  return res.data;
};

//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/requisition/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/requisition/${id}/files`);
  return res.data;
};

//get file
const deleteFile = async (uuid, model_id) => {
  const res = await http.delete(
    `/requisition/${model_id}/files/${uuid}/delete`
  );
  return res.data;
};

//expected delivey and remarks update for requisiton
const updateReqInfo = async (id, data) => {
  const res = await http.post(`/requisition/info/${id}`, data);
  return res?.data;
};




    ///////////////////////////////////////// For required requisition //////////////////////////////////////////////////

const createrequiredrequisitions = async (data) => {
  const res = await http.post(`required-part/requisitions`, data);
  return res.data;
};

const getRequiredRequisition = async (id) => {
  const res = await http.get(`/required-part/requisitions/${id}`);
  return res.data;
};

const getAllRequiredRequisitions = async (data) => {
  const res = await http.get(`required-part/requisitions`, {
    params: data,
  });
  return res.data;
};

const changeStatus = async (id, data) => {
  const res = await http.post(`/required-part/requisitions/status/${id}`, data);
  return res?.data;
};

const updateRequiredReqInfo = async (id, data) => {
  const res = await http.post(`/required-part/requisitions/info/${id}`, data);
  return res?.data;
};
const getRequestedPart = async (id) => {
  const res = await http.get(`required-part/requisitions/get-request-parts/${id}`);
  return res?.data;
};

const updateRequestedPart = async (id,data) => {
  const res = await http.post(`required-part/requisitions/update-request-parts/${id}`,data);
  return res?.data;
};

const RequisitionService = {
  getAll,
  get,
  engineers,
  partHeadings,
  items,
  create,
  update,
  remove,
  approve,
  reject,
  fileUpload,
  getFile,
  deleteFile,
  changeStatus,
  updateReqInfo,
  ///////////////////////////////////////// For required requisition ///////////////////////////////////////////
  getAllRequiredRequisitions,
  getRequiredRequisition,
  createrequiredrequisitions,
  updateRequiredReqInfo,
  getRequestedPart,
  updateRequestedPart
};

export default RequisitionService;
