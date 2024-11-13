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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const updatedDataFilePath = path.join(__dirname, "../updatedData", "updatedBosses.json");

const saveUpdatedData = async (updatedBoss) => {
    try {
        let existingData = [];

        if (fs.existsSync(updatedDataFilePath)) {
            const fileContent = fs.readFileSync(updatedDataFilePath, 'utf8');
            existingData = JSON.parse(fileContent);
        }

        const existingIndex = existingData.findIndex(boss => boss.wowheadID === updatedBoss.wowheadID);

        if (existingIndex !== -1) {
            existingData[existingIndex] = updatedBoss;
            console.log(`Updated boss with wowheadID: ${updatedBoss.wowheadID}`);
        } else {
            existingData.push(updatedBoss);
            console.log(`Added new boss with wowheadID: ${updatedBoss.wowheadID}`);
        }

        fs.writeFileSync(updatedDataFilePath, JSON.stringify(existingData, null, 2), 'utf8');
        console.log('Updated data saved to updatedBosses.json');
    } catch (error) {
        console.error('Error saving updated data:', error);
    }
};

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