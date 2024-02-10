import axios from "axios";

export const api = axios.create({
    baseURL: 'https://rocketnotes-w8zn.onrender.com'
});
