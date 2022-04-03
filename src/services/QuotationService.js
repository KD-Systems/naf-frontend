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

// const items = async (id) => {
//   const res = await http.get(`/requisitions/${id}/part-items`);
//   return res.data;
// };

// const engineers = async () =>{
//   const res = await http.get('/requisitions/engineers');
//   return res.data;
// }

// const partHeadings = async (data) =>{
//   const res = await http.get('/requisitions/part-headings', {
//     params: data
//   });
//   return res.data;
// }

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

const QuotationService = {
  getAll,
  get,
//   engineers,
//   partHeadings,
//   items,
  create,
  update,
  remove,
};

export default QuotationService;