import Model from "./Model";
import UsersAPI from "../services/UsersAPI";

export default class UserModel extends Model {
    static api = UsersAPI;
    static cache = {};

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
        const { likedNPCs, likedDungeons, ...data } = this;

        const cleanedData = {
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

        Object.assign(this, cleanedData);
        return this;
    }

    toggleLikeDungeon(dungeonId) {
        if (this.likedDungeons.includes(dungeonId)) {
            this.likedDungeons = this.likedDungeons.filter(id => id !== dungeonId);
        } else {
            this.likedDungeons.push(dungeonId);
        }
        return this.save();
    }

    toggleLikeNPCs(npcId) {
        if (this.likedNPCs.includes(npcId)) {
            this.likedNPCs = this.likedNPCs.filter(id => id !== npcId);
        } else {
            this.likedNPCs.push(npcId);
        }
        return this.save();
    }

    beforeSubmit({
        _id = "",
        firstName = "",
        lastName = "",
        nickName = "",
        avatarImgURL = "",
        avatarImgALT = "",
    }) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nickName = nickName;
        this.avatarImgURL = avatarImgURL;
        this.avatarImgALT = avatarImgALT;
        return this;
    }
}