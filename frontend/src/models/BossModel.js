import Model from "./Model";
import WowheadNPCAPI from "../services/WowheadNPCAPI";
import UserModel from "./UserModel";

export default class CardModel extends Model {
    static api = WowheadNPCAPI;
    static cache = {};

    constructor({
        _id = "",
        wowheadID = "",
        name = "",
        description = "",
        location = "",
        imageURL = "",
        imageALT = "",
        phases = 0,
        skills = [],
        likes = [],
        createdAt = "",
    } = {}) {
        super({ _id, createdAt });
        this.wowheadID = wowheadID;
        this.name = name;
        this.description = description;
        this.location = location;
        this.imageURL = imageURL;
        this.imageALT = imageALT;
        this.phases = phases;
        this.skills = skills;
        this.likes = likes;
    }

    async toggleLike(user) {
        const userId = user instanceof UserModel ? user._id : user;
        const index = this.likes.indexOf(userId);

        if (index > -1) {
            this.likes.splice(index, 1);
        } else {
            this.likes.push(userId);
        }

        try {
            const { likes } = await this.api.toggleLike(this._id);
            this.likes = likes;
        } catch (e) {
            if (index > -1) {
                this.likes.splice(index, 0, userId);
            } else {
                this.likes.pop();
            }

            throw e;
        }
    }

    isLikedBy(user) {
        const userId = user instanceof UserModel ? user._id : user;
        return this.likes.includes(userId);
    }

    matches(search) {
        return this.name.includes(search) || this.location.includes(search);
    }
}