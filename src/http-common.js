import axios from "axios";
import reactDom from "react-dom";
import {
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default axios.create({
  baseURL: "//naf-inventory.test/api",
  headers: {
    "Content-type": "application/json",
  },
  transformResponse: function (data) {
    let response = JSON.parse(data);

    //Form validation messages
    let errors = response.errors;
    let hasToast = false;
    if (errors)
      for (let key in errors) {
        let elem = document.getElementsByName(key);
        let nextElem = elem[0].nextSibling;
        if (nextElem && nextElem.getAttribute('class').includes("invalid-feedback")) {
          reactDom.render(errors[key][0], elem[0].nextSibling);
        } else {
          toast.error(errors[key][0]);
          hasToast = true;
        }
      }

    if (!hasToast && response.message) toast.dark(response.message);

    return JSON.parse(data);
  },
});