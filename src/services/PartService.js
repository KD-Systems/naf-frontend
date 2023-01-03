import http from "../http-common";

const getAll = async (filters) => {
  console.log(filters);
  const res = await http.get("/parts", {
    params: filters
  });
  return res.data;
};
const getGatePassPart = async (filters) => {
  const res = await http.get("/gate-pass-parts", {
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
  data.append("_method", "PUT");
  const res = await http.post(`/parts/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/parts/${id}`);
  return res.data;
};

const importFile = async (data) => {
  const res = await http.post("/parts-import", data)
  return res.data;
};
// get foc parts
const getFoc = async (filters) => {
  const res = await http.get("/foc-parts",{
    params: filters
  });
  return res.data;
}

// get sellable parts
const getSellable = async (filters) => {
  const res = await http.get("/sellable-parts",{
    params: filters
  });
  return res.data;
}

//client module

const getClientPart = async (filters) => {
  const res = await http.get("/client-parts", {
    params: filters
  });
  return res.data;
};


const PartService = {
  getAll,
  get,
  create,
  update,
  remove,
  importFile,
  getGatePassPart,
  getClientPart,
  //get foc part
  getFoc,
  //get sellable parts
  getSellable
};

export default PartService;