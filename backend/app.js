import "dotenv/config";
import express from "express";
import chalk from 'chalk';
import cors from "cors";
import morgan from 'morgan';
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { connectToDB } from "./database/databaseServices.js";
import { handleError } from "./utils/handleErrors.js";
import { router } from "./router.js";
import { populateInitialData } from "./utils/populateDatabase.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(chalk.cyan(
        `request URL: ${req.url}| Method: ${req.method} | Time: ${new Date()}`
    ));
    next();
});

// homepage
app.get('/', (req, res) => {
    res.send("Waiting for Requests");
});

// /user /boss /trash
app.use(router);

app.use((err, req, res, next) => {
    const message = err.message || "internal server error";
    return handleError(res, 500, message);
});

app.listen(PORT, async () => {
    console.log(chalk.blue("App is listening to port " + PORT));
    await connectToDB();
    await populateInitialData();
});