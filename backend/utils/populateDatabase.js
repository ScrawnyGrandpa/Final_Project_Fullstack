import mongoose from "mongoose";
import fs from "fs";
import { fileURLToPath } from 'url';
import path from "path";
import { Boss } from "../models/boss/Bosses.js";
import { Trash } from "../models/trash/Trash.js";
import { User } from "../models/user/Users.js";
import { InitialBosses } from "../initialData/InitialBosses.js";
import { InitialTrash } from "../initialData/initialTrash.js";
import { InitialUsers } from "../initialData/initialUsers.js";
import { generateUserPassword } from "./bcrypt.js";

const getUpdatedDataFilePath = (dataType) => {
    const fileNameMap = {
        'Bosses': 'updatedBosses.json',
        'Trash': 'updatedTrash.json',
        'Dungeon': 'updatedDungeons.json',
        'Users': 'updatedUsers.json',
    };

    const fileName = fileNameMap[dataType];

    if (!fileName) {
        throw new Error(`Unknown data type for file path: ${dataType}`);
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    return path.join(__dirname, "../updatedData", fileName);
};

// Main function to save updated data
const saveUpdatedData = async (updatedData, dataType) => {
    console.log('DataType:', dataType);
    try {
        let identifier;
        if (dataType === 'Bosses' || dataType === 'Trash' || dataType === 'Dungeon') {
            identifier = 'wowheadID';
        } else if (dataType === 'Users') {
            identifier = 'email';
        } else {
            throw new Error('Unknown data type');
        }

        const updatedDataFilePath = getUpdatedDataFilePath(dataType);

        let existingData = [];
        if (fs.existsSync(updatedDataFilePath)) {
            const fileContent = fs.readFileSync(updatedDataFilePath, 'utf8');
            existingData = JSON.parse(fileContent);
        }

        const existingIndex = existingData.findIndex(item => item[identifier] === updatedData[identifier]);
        if (existingIndex !== -1) {
            existingData[existingIndex] = updatedData;
            console.log(`Updated ${dataType.toLowerCase()} with ${identifier}: ${updatedData[identifier]}`);
        } else {
            existingData.push(updatedData);
            console.log(`Added new ${dataType.toLowerCase()} with ${identifier}: ${updatedData[identifier]}`);
        }

        fs.writeFileSync(updatedDataFilePath, JSON.stringify(existingData, null, 2), 'utf8');
        console.log(`Updated data saved to ${updatedDataFilePath}`);
    } catch (error) {
        console.error('Error saving updated data:', error);
    }
};

// Populate Initial Data
const populateInitialData = async () => {

    const existingBosses = await Boss.findOne({});
    if (!existingBosses) {
        await Boss.insertMany(InitialBosses);
        console.log("Initial Boss-data populated");
    } else {
        console.log("Initial Boss-data already exists");
    };

    const existingTrash = await Trash.findOne({});
    if (!existingTrash) {
        await Trash.insertMany(InitialTrash);
        console.log("Initial Trash-data populated");
    } else {
        console.log("Initial Trash-data already exists");
    };

    const existingUsers = await User.findOne({});
    if (!existingUsers) {

        const newUsers = {
            ...InitialUsers[0], password: generateUserPassword(InitialUsers[0].password)
        };

        await User.insertMany(newUsers);
        console.log("Initial Users-data populated");
    } else {
        console.log("Initial Users-data already exists");
    };
};

export { populateInitialData, saveUpdatedData };