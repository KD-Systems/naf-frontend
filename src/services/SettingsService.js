import http from "../http-common";

const create = async (data) => {
  return http.post("/settings", data);
};

const getAll = async (data) => {
  const res = await http.get("/settings", {
      params: data
  });

  return res.data;
};

const SettingsService = {
  create,
  getAll
  };
  
  export default SettingsService;  