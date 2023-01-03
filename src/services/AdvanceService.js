import http from "../http-common";

const getAll = async (param) => {
  const res = await http.get(`/advance-payment`, {params:param});
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/advance-payment/${id}`);
  return res.data;
};

const create = async (data) => {
  return http.post("/advance-payment", data);
};



const AdvanceService = {
  getAll,
  get,
  create,
};

export default AdvanceService;