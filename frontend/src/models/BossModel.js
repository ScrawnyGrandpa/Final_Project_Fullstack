import Model from "./Model";
import UserModel from "./UserModel";
import BossAPI from "../services/BossAPI";

export default class BossModel extends Model {
    static api = BossAPI;

    constructor({
        _id = "",
        wowheadID = "",
        name = "",
        description = "",
        location = "",
        instanceType = "",
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
        this.instanceType = instanceType;
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