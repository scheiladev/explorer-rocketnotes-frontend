import axios from "axios";

export const api = axios.create({
    baseURL: "https://rocketnotes-api-jjj5.onrender.com",
});