import axios from "axios";

const API = axios.create({
  baseURl: "https://cloud--library.herokuapp.com",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signup = (formData) => API.post("/api/signup", formData);
export const signin = (formData) => API.post("/api/signin", formData);

export const showUser = (userId) => API.get(`/api/user/${userId}/getusers`);
export const showAuthor = () => API.get(`/api/author/getallauthors`);
export const showBook = () => API.get(`/api/book/getallbooks`);

export const getBook = (bookId) => API.get(`/api/book/${bookId}`);
export const getAuthor = (authorId) => API.get(`/api/author/${authorId}`);

export const addAuthor = (formData, userId) =>
  API.post(`/api/author/${userId}/createauthor`, formData);
export const addBook = (formData, userId) =>
  API.post(`/api/book/${userId}/createbook`, formData);

export const updateBook = (formData, userId, bookId) =>
  API.put(`/api/book/${userId}/updatebook/${bookId}`, formData);
export const deleteBook = (userId, bookId) =>
  API.delete(`/api/book/${userId}/deletebook/${bookId}`);

export const updateAuthor = (formData, userId, authorId) =>
  API.put(`/api/author/${userId}/updateauthor/${authorId}`, formData);
export const deleteAuthor = (userId, authorId) =>
  API.delete(`/api/author/${userId}/deleteauthor/${authorId}`);
