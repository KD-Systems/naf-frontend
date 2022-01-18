import http from "../http-common";

const getAll = async () => {
    const res = await http.get("/ware_houses");
    
    return res.data;
};

const get = async (id) => {
    const res = await http.get(`/ware_houses/${id}`);
    return res.data;
};

const create = async (data) => {
    const res = await http.post("/ware_houses",data)
    return res.data;
};

const update = async (id, data) => {
    const res = await http.put(`/ware_houses/${id}`, data);
    return res.data;
};

const remove = async (id) => {
    const res = await http.delete(`/ware_houses/${id}`);
    return res.data;
};

const WareHouseService = {
    getAll,
    get,
    create,
    update,
    remove,
  };

export default WareHouseService