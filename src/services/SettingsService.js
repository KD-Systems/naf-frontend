import http from "../http-common";

const create = async (data) => {
  const res = await http.post(`/settings`, data);
  return res.data;
};

const SettingsService = {
  create
  };
  
  export default SettingsService;