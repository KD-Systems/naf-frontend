import http from "../http-common";

const getAll = async (params) => {
  const res = await http.get("/companies", {
    params: params
  });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/companies/${id}`);
  return res.data;
};

const create = async (data) => {
  return http.post("/companies", data);
};

const update = async (id, data) => {
  data.append("_method", "PUT");
  const res = await http.post(`/companies/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/companies/${id}`);
  return res.data;
};

const getUsers = async (companyId) => {
  let res = await http.get(`/companies/${companyId}/users`);
  return res.data;
};

const addUser = async (companyId, data) => {
  let res = await http.post(`/companies/${companyId}/users`, data);
  return res.data;
};

const getUser = async (companyId, userId) => {
  let res = await http.get(`/companies/${companyId}/users/${userId}`);
  return res.data;
};

const updateUser = async (companyId, userId, data) => {
  data.append("_method", "PUT");
  let res = await http.post(`/companies/${companyId}/users/${userId}`, data);
  return res.data;
};

const deleteUser = async (companyId, userId) => {
  let res = await http.delete(`/companies/${companyId}/users/${userId}`);
  return res.data;
};

const getMachines = async (companyId) => {
  let res = await http.get(`/companies/${companyId}/machines`);
  return res.data;
};

const getMachinesforRequisitions = async (companyId) => {
  let res = await http.get(`/companies/machines/requisition/${companyId}`);
  return res.data;
};

const attachMachine = async (companyId, data) => {
  let res = await http.post(`/companies/${companyId}/machines`, data); 
  return res.data;
};

const detachMachine = async (companyId, machineId) => {
  let res = await http.delete(`/companies/${companyId}/machines/${machineId}`);
  return res.data;
};

//updating trade limit 
const updateDueLimit = async (id, data) => {
  const res = await http.post(`/companies/due-limit/${id}`, data);
  return res.data;
};

//for client module in req
const getClientCompany = async () => {
  const res = await http.get("/client-company");
  return res.data;
};

const getClientMachines = async (params) => {
  const res = await http.get("/client-machines",{
    params: params
  });
  return res.data;
};

const getClientCompanyContract = async () => {
  const res = await http.get("/client-company-contract");
  return res.data;
};

//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/companies/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/companies/${id}/files`);
  return res.data;
};

//delete file
const deleteFile = async (uuid, model_id) => {
  console.log(uuid);
  const res = await http.delete(
    `/companies/${model_id}/files/${uuid}/delete`
  );
  return res.data;
};

const CompanyService = {
  getAll,
  get,
  create,
  update,
  remove,
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getMachines,
  getMachinesforRequisitions,
  attachMachine,
  detachMachine,
  getClientCompany,
  getClientMachines,
  updateDueLimit,
  getClientCompanyContract,

  //Attachment File functanality
  fileUpload,
  getFile,
  deleteFile,

};

export default CompanyService;