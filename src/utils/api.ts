import axios from "axios";

export const getApi = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    timeout: 60000,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  api.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    if (token) {
      if(config.headers){
        config.headers["Authorization"] = "Bearer " + token;
      }
    }
    return config;
  });

  return api;
}