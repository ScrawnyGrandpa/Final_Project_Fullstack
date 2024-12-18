import mongoose from "mongoose";
import { Boss } from "../models/boss/Bosses.js";
import { Trash } from "../models/trash/Trash.js";
import { User } from "../models/user/Users.js";
import { InitialBosses } from "../initialData/initialBosses.js";
import { InitialTrash } from "../initialData/initialTrash.js";
import { InitialUsers } from "../initialData/initialUsers.js";
import { generateUserPassword } from "./bcrypt.js";
import { Dungeon } from "../models/dungeon/Dungeons.js";
import { InitialDungoens } from "../initialData/initialDungeons.js";

// Populate Initial Data
const populateInitialData = async () => {
    const existingBosses = await Boss.findOne({});
    if (!existingBosses) {
        await Boss.insertMany(InitialBosses);
        console.log("Initial Boss-data populated");
    } else {
        console.log("Initial Boss-data already exists");
    };

    const existingDungeons = await Dungeon.findOne({});
    if (!existingDungeons) {
        await Dungeon.insertMany(InitialDungoens);
        console.log("Initial Dungeon-data populated");
    } else {
        console.log("Initial Dungeon-data already exists");
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
        const newUsers = InitialUsers.map(user => ({
            ...user,
            password: generateUserPassword(user.password)
        }));

        await User.insertMany(newUsers);
        console.log("Initial Users-data populated");
    } else {
        console.log("Initial Users-data already exists");
    };
};

export { populateInitialData };
