import { Dungeon } from "./Dungeons.js";
import { createError } from "../../utils/handleErrors.js";
import { saveUpdatedData } from "../../utils/populateDatabase.js";

// create new Dungeon
const createDungeon = async (data) => {
    try {
        const existingDungeon = await Dungeon.findOne({ wowheadID: data.wowheadID });
        if (existingDungeon) {
            throw new Error(`Dungeon with wowheadID ${data.wowheadID} already exists.`);
        }

        const newDungeon = await new Dungeon(data).save();
        await saveUpdatedData(newDungeon, 'Dungeons');
        return newDungeon;
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get all Dungeones
const getAll = async () => {
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
        const updatedDungeon = await Dungeon.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();

        if (updatedDungeon) {
            await saveUpdatedData(updatedDungeon, 'Dungeons');
        }

        return updatedDungeon;
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// Update Dungeon param
const patchDungeon = async (id, data) => {
    try {
        const updatedDungeon = await Dungeon.findByIdAndUpdate(id, data, { new: true, runValidators: true, overwrite: false }).lean();

        if (updatedDungeon) {
            await saveUpdatedData(updatedDungeon, 'Dungeons');
        }

        return updatedDungeon;
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

export { createDungeon, getAll, readDungeon, updateDungeon, patchDungeon, deleteDungeon };