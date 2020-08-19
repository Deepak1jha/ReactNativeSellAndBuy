import axios from "axios";
import {BASE_URL} from "../url/BaseUrl";
import {getAccessToken} from "../../auth/authStorage/AuthStorage";

let client = axios.create({
  baseURL: `${BASE_URL}`
});

client.defaults.headers.common[
  "Authorization"
  ] = `Bearer ${getAccessToken()}`;


const axiosInstance = function (options) {
  const onSuccess = function (response) {
    return response;
  };

  const onError = function (error) {
    console.error("Request Failed:", error.config);

    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return client(options)
    .then(onSuccess)
    .catch(onError);
};

export default axiosInstance;
