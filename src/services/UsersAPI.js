import API from "./API";

export default class UsersAPI extends API {
    static apiUrl = "http//localhost:3000";

    static login(data) {
        return this.request(`${this.apiUrl}/login`, { data, method: "post" });
    }

    static userFavoriteItems() {
        return this.request(`${this.apiUrl}/favorite-items`);
    }
}