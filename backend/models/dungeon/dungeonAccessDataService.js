import { Dungeon } from "./Dungeons.js";
import { createError } from "../../utils/handleErrors.js";

// create new Dungeon
const createDungeon = async (data) => {
    try {
        return await new Dungeon(data).save();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get all Dungeons
const getAllDungeons = async () => {
    try {
        return await Dungeon.find();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get Dungeon by ID
const readDungeon = async (id) => {
    try {
        return await Dungeon.findById(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// Update Dungeon whole or some params
const updateDungeon = async (id, data) => {
    try {
        return await Dungeon.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// Update Dungeon param
const patchDungeon = async (id, data) => {
    try {
        return await Dungeon.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// delete Dungeon
const deleteDungeon = async (id) => {
    try {
        return await Dungeon.findByIdAndDelete(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

export { createDungeon, getAllDungeons, readDungeon, updateDungeon, patchDungeon, deleteDungeon };
