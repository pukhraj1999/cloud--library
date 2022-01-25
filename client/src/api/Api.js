import axios from "axios";

const API = axios.create({
  baseURl: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signup = (formData) => API.post("/signup", formData);
export const signin = (formData) => API.post("/signin", formData);

export const addAuthor = (formData, userId) =>
  API.post(`/author/${userId}/createauthor`, formData);
export const addBook = (formData, userId) =>
  API.post(`http://localhost:5000/api/book/${userId}/createbook`, formData);
