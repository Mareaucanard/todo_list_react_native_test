import requests from "./API";
import { stringify } from "json5";
import axios from "axios";
import { Constants } from "../Config/Constants"
interface loginResponse {
  data: {
    msg?: string;
    code?: number;
    token?: string;
  };
}

interface registerResponse {
  data: {
    msg?: string;
    code?: number;
    token?: string;
  };
}

export async function loginRoute(params: object): Promise<registerResponse> {
  return await requests.post("/login", params);
}

export async function registerRoute(params: object): Promise<loginResponse> {
  return await requests.post("/register", params);
}
