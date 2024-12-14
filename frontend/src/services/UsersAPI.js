import API from "./API";

const backendPort = import.meta.env.VITE_APP_BACKEND_PORT || 3000;

export default class UsersAPI extends API {
    static apiUrl = `http://localhost:${backendPort}/user`;

    static login(data) {
        return this.request(`${this.apiUrl}/login`, { data, method: "post" });
    }

    static userLikedItems() {
        return this.request(`${this.apiUrl}/liked-items`);
    }
}
