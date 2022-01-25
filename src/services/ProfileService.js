import http from "../http-common";

const changePassword = async (data) => {
  return http.post("/password-update", data);
};

const updateProfile = async (data) => {
    return http.post("/profile-update", data);
  };

const ProfileService = {
  changePassword,
  updateProfile
};

export default ProfileService;
