import http from "../http-common";

const getAll = async (param) => {
  const res = await http.get(`/due-payment`, { params: param });
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/due-payment/${id}`);
  return res.data;
};

const create = async (data) => {
  return http.post("/due-payment", data);
};

const remove = async (duePaymentHistoryId, companyId) => {
 return await http.delete(`/due-payment/${duePaymentHistoryId}`, {
    params: { companyId },
  })
};

const DueService = {
  getAll,
  get,
  create,
  remove,
};

export default DueService;
