import axios from "axios";
import reactDom from "react-dom";
import {
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

let Api = axios.create({
  // baseURL: `//naf-api.viserx.net/api/`,
  // baseURL: `//api.naf-inventory.test/api/`,
  baseURL: `//naf-inventory-back.test/api/`, //shanto
  // baseURL: `//naf-inventory.test/api/`, //shahrukh
  headers: {
    "Content-type": "application/json",
    "accept": "application/json",
  },
  transformResponse: function (data) {
    let response = JSON.parse(data);

    //Form validation messages
    let errors = response.errors;
    let hasToast = false;

    //Clean all previous messages
    let msg = document.getElementsByClassName('invalid-feedback');
    for (let i = 0; i < msg.length; i++) reactDom.render('', msg[i])

    //Specify the messages
    if (errors)
      for (let key in errors) {
        let el = window.$('[for="' + key + '"]');
        if (el.length) {
          reactDom.render(errors[key][0], el[0])
        } else {
          toast.error(errors[key][0]);
          hasToast = true;
        }
      }

    //Skip the error message in toast if printed already
    if (!hasToast && response.message) {
      switch (response.status) {
        case 400:
          toast.error(response.message);
          break;

        case 401:
          toast.warning(response.message);
          break;

        case 422:
          toast.warning(response.message);
          break;

        case 500:
          toast.error(response.message);
          break;

        case 200:
          toast.success(response.message);
          break;

        case 201:
          toast.success(response.message);
          break;

        default:
          if (errors?.length)
            toast.warning(response.message);
          break;
      }
    }

    return response;
  },

  validateStatus: function (status) {
    if (status === 401) {
      localStorage.removeItem('user')
      window.location.href = "/"
    }

    return status >= 200 && status < 300; // default
  },



});



Api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user'))?.access_token}`
  return config;
});

export default Api