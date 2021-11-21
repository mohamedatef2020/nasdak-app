import { Alert } from "react-native";
import axios from "axios";

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
      Alert.alert("Sorry", error.response.data.error, [{ text: "OKAY" }]);
    }
    return Promise.reject(error);
  },
);

export default instance;
