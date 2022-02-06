import http from "../http-common";

const getAll = async (filters) => {
  const res = await http.get("/parts", {
    params: filters
  });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/parts/${id}`);
  return res.data;
};

const create = async (data) => {
  const res = await http.post("/parts", data)
  return res.data;
};

const update = async (id, data) => {
  const res = await http.put(`/parts/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/parts/${id}`);
  return res.data;
};

const PartService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default PartService;