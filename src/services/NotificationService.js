import http from "../http-common";

const getAll = async () => {
  const res = await http.get("/notification");
  return res.data;
};

const NotificationService = {
  getAll
  };
  
  export default NotificationService;   