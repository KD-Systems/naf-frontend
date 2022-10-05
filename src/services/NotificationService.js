import http from "../http-common";

const getAll = async (params) => {
  const res = await http.get("/notification", {
    params
  });
  console.log("🚀 ~ file: NotificationService.js ~ line 7 ~ getAll ~ res", res)
  return res?.data;
};
const readAt = async (id) => {
  const res = await http.get(`/notification/read/${id}`);
  return res?.data;
};

const allNotifications = async (params) => {
  const res = await http.get("/all-notification");
  return res?.data;
};


const NotificationService = {
  getAll,
  readAt,
  allNotifications
};

export default NotificationService;
