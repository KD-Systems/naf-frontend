import http from "../http-common";

const getAll = async (data) => {
  const res = await http.get(`/quotations`, {
    params: data
});
  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/quotations/${id}`);
  return res.data;
};


const create = async (data) => {
  const res = await http.post(`/quotations`, data)
  return res.data;
};

const update = async (id, data) => {
  const res = await http.put(`/quotations/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/quotations/${id}`);
  return res.data;
};

const locked = async (data)=>{
  const res =await http.post('/quotations/locked',data);
  return res?.data;
}

const QuotationService = {
  getAll,
  get,
  create,
  update,
  remove,
  locked
};

export default QuotationService;