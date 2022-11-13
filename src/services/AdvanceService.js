import http from "../http-common";

const getAll = async (params) => {
  const res = await http.get("/advance-payment", {
    params: params
  });
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