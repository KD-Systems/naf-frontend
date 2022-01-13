import http from "../http-common";


const getAll = async () => {
  const res = await http.get("/employees");

  return res.data;
};

const get = async (id) => {
  const res = await http.get(`/employees/${id}`);
  return res.data;
};

const create = async (data) => {
    const res = await http.post("/employees",data)
    return res.data;
};

const update = async (id, data) => {
  const res = await http.post(`/employees/${id}`, data);
  return res.data;
};

const remove = async (id) => {
  const res = await http.delete(`/users/${id}`);
  return res.data;
};

const EmployeeService = {
  getAll,
  get,
  create,
  update,
  remove,
};

export default EmployeeService;
