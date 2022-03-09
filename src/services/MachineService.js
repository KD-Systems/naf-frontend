import http from "../http-common";

const getAll = async () => {
    const res = await http.get("/machines");
    
    return res;
};

const get = async (id) => {
    const res = await http.get(`/machines/${id}`);
    return res.data;
};

const create = async (data) => {
    const res = await http.post("/machines",data)
    return res.data;
};

const update = async (id, data) => {
    const res = await http.put(`/machines/${id}`, data);
    return res.data;
};

const remove = async (id) => {
    const res = await http.delete(`/machines/${id}`);
    return res.data;
};

const MachineService = {
    getAll,
    get,
    create,
    update,
    remove,
  };

export default MachineService