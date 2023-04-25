import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:5000/api" : "";

const app = axios.create({
  baseURL,
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
