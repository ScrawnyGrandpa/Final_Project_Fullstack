import Model from "./Model";
import UserModel from "./UserModel";
import DungeonAPI from "../services/DungeonAPI";

export default class DungeonModel extends Model {
    static api = DungeonAPI;

    constructor({
        _id = "",
        wowheadID = "",
        name = "",
        description = "",
        location = "",
        instanceType = "",
        imageURL = "",
        imageALT = "",
        NPCs = [],
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
        this.NPCs = NPCs;
    }

    matches(search) {
        return this.name.includes(search) || this.location.includes(search);
    }
}
