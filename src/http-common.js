import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

export default axios.create({
  baseURL: "//naf-inventory.test/api",
  headers: {
    "Content-type": "application/json",
  },
  transformResponse: function (data) {

    let response = JSON.parse(data);
    if (response.message) toast.dark(response.message);

    return JSON.parse(data);
  },
});
