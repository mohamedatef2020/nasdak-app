import axios from "axios";
import { showMessage } from "react-native-flash-message";

const instance = axios.create({
  baseURL: "https://api.polygon.io/",
});

instance.interceptors.request.use(
  async (config: any) => {
    config.headers.Authorization = `Bearer 1OxNyt7DYBVKv3dTOvGG7cPP9gr5aSrS`;
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    return config;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 429) {
      showMessage({
        message: "Sorry you reached the maximum API hits per minute by polygon",
        type: "danger",
      });
    }
    return Promise.reject(error);
  },
);

export default instance;
