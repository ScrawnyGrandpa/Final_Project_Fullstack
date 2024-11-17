import { Boss } from "./Bosses.js";
import { createError } from "../../utils/handleErrors.js";

// create new boss
const createBoss = async (data) => {
    try {
        return await new Boss(data).save();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get all bosses
const getAll = async () => {
    try {
        return await Boss.find();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get boss by ID
const readBoss = async (id) => {
    try {
        return await Boss.findById(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// update boss whole or some params
const updateBoss = async (id, data) => {
    try {
        const updatedBoss = await Boss.findByIdAndUpdate(id, data, { new: true, runValidators: true }).lean();

        if (!updatedBoss) {
            throw new Error('Boss not found');
        }

        if (updatedBoss.guide) {
            if (updatedBoss.guide.normal) {
                updatedBoss.guide.normal = updatedBoss.guide.normal.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }

            if (updatedBoss.guide.heroic) {
                updatedBoss.guide.heroic = updatedBoss.guide.heroic.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }
        }

        return updatedBoss;
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// update boss param
const patchBoss = async (id, data) => {
    try {
        const updatedBoss = await Boss.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
            overwrite: false,
        }).lean();

        if (!updatedBoss) {
            throw new Error("Boss not found");
        }

        if (updatedBoss.guide) {
            if (updatedBoss.guide.normal) {
                updatedBoss.guide.normal = updatedBoss.guide.normal.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }

            if (updatedBoss.guide.heroic) {
                updatedBoss.guide.heroic = updatedBoss.guide.heroic.map(item => {
                    const { _id, ...rest } = item;
                    return rest;
                });
            }
        }
        return updatedBoss;

    } catch (e) {
        return createError("Mongoose", e);
    }
};

// delete boss
const deleteBoss = async (id) => {
    try {
        return await Boss.findByIdAndDelete(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

export { createBoss, getAll, readBoss, updateBoss, patchBoss, deleteBoss };
