import API from "./API";

export default class UsersAPI extends API {
    static apiUrl = "http//localhost:3000/user";

    static login(data) {
        return this.request(`${this.apiUrl}/login`, { data, method: "post" });
    }

    static userLikedItems() {
        return this.request(`${this.apiUrl}/liked-items`);
    }
}