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

// update Dungeon whole or some params
const updateDungeon = async (id, data) => {
    try {
        const updatedDungeon = await Dungeon.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();

        if (!updatedDungeon) {
            throw new Error('Dungeon not found');
        }

        if (updatedDungeon.guide) {
            if (updatedDungeon.guide.normal) {
                updatedDungeon.guide.normal = updatedDungeon.guide.normal.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }

            if (updatedDungeon.guide.heroic) {
                updatedDungeon.guide.heroic = updatedDungeon.guide.heroic.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }
        }

        return updatedDungeon;
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// update Dungeon param
const patchDungeon = async (id, data) => {
    try {
        const updatedDungeon = await Dungeon.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
            overwrite: false,
        }).lean();

        if (!updatedDungeon) {
            throw new Error("Dungeon not found");
        }

        if (updatedDungeon.guide) {
            if (updatedDungeon.guide.normal) {
                updatedDungeon.guide.normal = updatedDungeon.guide.normal.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }

            if (updatedDungeon.guide.heroic) {
                updatedDungeon.guide.heroic = updatedDungeon.guide.heroic.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }
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