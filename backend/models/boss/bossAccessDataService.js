import { Boss } from "./Bosses.js";
import { createError } from "../../utils/handleErrors.js";
import _ from "lodash";

// create new boss
const createBoss = async (data) => {
    try {
        return await new Boss(data).save();
    }
    catch (e) {
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
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// update boss whole or some params
const updateBoss = async (id, data) => {
    try {
        return await Boss.findByIdAndUpdate(id, data, { new: true, runValidators: true });
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

export { createBoss, getAll, readBoss, updateBoss, deleteBoss };