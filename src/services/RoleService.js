import http from "../http-common";

const getAll = async () => {
    const res = await http.get("/roles");
  
    return res.data;
};

const get = async (id) => {
    const res = await http.get(`/roles/${id}`);
    return res.data;
};

const create = async (data) => {
    const res = await http.post("/roles",data)
    return res.data;
};

const remove = async (id) => {
    const res = await http.delete(`/roles/${id}`);
    return res.data;
};

const RoleService = {
    getAll,
    get,
    create,
    remove
};

export default RoleService;