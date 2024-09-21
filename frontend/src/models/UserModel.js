import Model from "./Model";
import UsersAPI from "../services/UsersAPI";

export default class UserModel extends Model {
    static api = UsersAPI;
    static cache = {};

    bosses;

    constructor({
        _id = "",
        firstName = "",
        lastName = "",
        nickName = "",
        email = "",
        password = "",
        avatarImgURL = "",
        avatarImgALT = "",
        isAdmin = false,
        createdAt = ""
    } = {}) {
        super({ _id, createdAt });
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickname = nickName;
        this.email = email;
        this.password = password;
        this.avatarImgURL = avatarImgURL;
        this.avatarImgALT = avatarImgALT;
        this.isAdmin = isAdmin;
    }

    serialize() {
        const data = {};

        if (!this._id) {
            data.email = this.email;
            data.password = this.password;
            data.isAdmin = this.isAdmin;
        }

        return data;
    }
}