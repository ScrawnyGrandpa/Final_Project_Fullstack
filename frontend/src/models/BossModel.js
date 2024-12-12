import Model from "./Model";
import UserModel from "./UserModel";
import BossAPI from "../services/BossAPI";

export default class BossModel extends Model {
    static api = BossAPI;
    static cache = {};

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
        createdAt = "",
        guide = { normal: [], heroic: [] }
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
        this.guide = guide;
    }

    matches(search) {
        return this.name.includes(search) || this.location.includes(search);
    }
}
