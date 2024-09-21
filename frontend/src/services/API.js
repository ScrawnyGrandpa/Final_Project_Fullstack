import axios from "axios";

export const TOKEN_KEY = "token";

export default class API {
    static apiUrl;

    static get storedToken() {
        return JSON.parse(localStorage.getItem(TOKEN_KEY));
    }

    static set storedToken(token) {
        localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
    }

    static getAll() {
        return this.request(this.apiUrl);
    }

    static create(data) {
        return this.request(this.apiUrl, { data, method: "post" });
    }

    static read(id) {
        return this.request(`${this.apiUrl}/${id}`);
    }

    static patch(id, data) {
        return this.request(`${this.apiUrl}/${id}`, { data, method: "patch" });
    }

    static update(id, data) {
        return this.request(`${this.apiUrl}/${id}`, { data, method: "put" });
    }

    static delete(id) {
        return this.request(`${this.apiUrl}/${id}`, { method: "delete" });
    }

    static async request(url, { data = undefined, method = "get" } = {}) {
        try {
            const res = await axios.request({ url, method, data, headers: { "x-auth-token": this.storedToken } });
            return res.data;
        } catch (e) {
            throw new Error(e.response?.data || e.message);
        }
    }
};