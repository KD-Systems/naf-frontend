import axios from "axios";

export default axios.create({
  baseURL: "//naf-inventory.test/api",
  headers: {
    "Content-type": "application/json",
  },
  transformResponse: function (data) {
    // Do whatever you want to transform the data

    let response = JSON.parse(data);
    if (response.message) alert(response.message);

    return JSON.parse(data);
  },
});
