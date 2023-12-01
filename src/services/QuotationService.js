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

const approve = async (id)=>{
  const res =await http.post(`/quotations/approve/${id}`);
  return res?.data;
}

const reject = async (id)=>{
  const res =await http.post(`/quotations/reject/${id}`);
  return res?.data;
}

// quotation comment 
const getComment = async (id) => {
  const res = await http.get(`/quotation-comment/index/${id}`);
  return res.data;
};


//file upload
const fileUpload = async (id, data) => {
  const res = await http.post(`/quotations/${id}/files`, data);
  return res.data;
};

//get file
const getFile = async (id) => {
  const res = await http.get(`/quotations/${id}/files`);
  return res.data;
};

//get file
const deleteFile = async (uuid, model_id) => {
  const res = await http.delete( `/quotations/${model_id}/files/${uuid}/delete`);
  return res.data;
};


const sendComment = async (data) => {
  const res = await http.post(`/quotation-comment`,data); 
  return res.data;

};

//add items
const addItems = async (id, data) => {
  const res = await http.post(`quotations/${id}/add-items`, data);
  return res?.data;
};

const QuotationService = {
  getAll,
  get,
  create,
  update,
  remove,
  locked,
  getComment,
  sendComment,
  approve,
  reject,
  fileUpload,
  getFile,
  deleteFile,
  addItems
};

export default QuotationService;