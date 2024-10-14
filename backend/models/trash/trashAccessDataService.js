import { Trash } from "./Trash.js";
import { createError } from "../../utils/handleErrors.js";
import _ from "lodash";

// create new boss
const createTrash = async (data) => {
    try {
        return await new Trash(data).save();
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// get all boss
const getAll = async () => {
    try {
        return await Trash.find();
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// get boss by ID
const readTrash = async (id) => {
    try {
        return await Trash.findById(id);
    }
    catch (e) {
        return createError("Mongoose", e);
    }
};

// update boss whole or some params
const updateTrash = async (id, data) => {
    try {
        return await Trash.findByIdAndUpdate(id, data, { new: true, runValidators: true });
    } catch (e) {
        return createError("Mongoose", e);
    }
};

// delete boss
const deleteTrash = async (id) => {
    try {
        return await Trash.findByIdAndDelete(id);
    } catch (e) {
        return createError("Mongoose", e);
    }
};

export { createTrash, getAll, readTrash, updateTrash, deleteTrash };