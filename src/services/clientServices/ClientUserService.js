import http from "../../http-common";

const getAll = async () => {
  const res = await http.get("company-user"); 
  return res.data;
};

const getUser = async (id) => {
  let res = await http.get(`company-user/${id}`);
  return res.data;
};
 const getCompanyInfo = async()=>{
  const res = await http.get("client-info");
  return res.data;
 }

const ClientUserService = {
    getAll,
    getUser,
    getCompanyInfo
  };
  
  export default ClientUserService; 