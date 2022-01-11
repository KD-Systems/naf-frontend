import http from "../http-common";

const getAll = async () => {
  const res = await http.get("/companies");
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
  const res = await http.post(`/companies/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/companies/${id}`);
  return res.data;
};

const CompanyService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default CompanyService;
