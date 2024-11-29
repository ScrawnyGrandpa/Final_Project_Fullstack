import Model from "./Model";
import UsersAPI from "../services/UsersAPI";

export default class UserModel extends Model {
    static api = UsersAPI;

    constructor({
        _id = "",
        firstName = "",
        lastName = "",
        nickName = "",
        email = "",
        password = "",
        avatarImgURL = "",
        avatarImgALT = "",
        likedNPCs = [],
        likedDungeons = [],
        isAdmin = false,
        createdAt = ""
    } = {}) {
        super({ _id, createdAt });
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.avatarImgURL = avatarImgURL;
        this.avatarImgALT = avatarImgALT;
        this.likedNPCs = likedNPCs;
        this.likedDungeons = likedDungeons;
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

    cleanup() {
        const data = {
            firstName: this.firstName,
            lastName: this.lastName,
            nickName: this.nickName,
            avatarImgURL: this.avatarImgURL,
            avatarImgALT: this.avatarImgALT,
        };

        if (!this._id) {
            data.email = this.email;
            data.password = this.password;
            data.isAdmin = this.isAdmin;
        }

        Object.assign(this, data);
        return this;
    }
}