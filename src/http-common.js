import axios from "axios";
import reactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const token = JSON.parse(localStorage.getItem('user'))?.access_token

export default axios.create({
  baseURL: "//naf-inventory.test/api/",
  headers: {
    "Content-type": "application/json",
    "accept":"application/json",
    "Authorization": "Bearer "+token
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
        let el = window.$('[for=' + key + ']');
        if (el.length) {
          reactDom.render(errors[key][0], el[0])
        } else {
          toast.error(errors[key][0]);
          hasToast = true;
        }
      }

    //Skip the error message in toast if printed already
    if (!hasToast && response.message) toast.dark(response.message);

    return response;
  },
});