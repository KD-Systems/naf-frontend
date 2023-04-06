import http from "../http-common";

const getAll = async (data) => {
  const res = await http.get(`/return-parts`, {
    params: data,
  });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/return-parts/${id}`);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/return-parts/${id}`);
  return res.data;
};

const ReturnPartService = {
  getAll,
  get,
  remove,
};

export default ReturnPartService;
