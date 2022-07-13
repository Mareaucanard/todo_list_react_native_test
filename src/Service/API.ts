import axios from "axios";
import { Constants } from "../Redux/Constants";

const api_instance = axios.create({
  baseURL: Constants.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 5000
});

const setToken = (token: string) => {
    api_instance.defaults.headers.common = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
    }
}

export default {
    post: api_instance.post,
    get: api_instance.get,
    put: api_instance.put,
    delete: api_instance.delete,
    setToken
}
