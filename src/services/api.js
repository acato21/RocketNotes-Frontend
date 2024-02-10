import axios from "axios";

export const api = axios.create({
    baseURL: 'https://acato21.github.io/RocketNotes-Backend/'
});