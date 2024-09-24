import express from "express";
import chalk from 'chalk';
import cors from "cors"
import { connectToDB } from "./database/databaseServices.js";
import { handleError } from "./utils/handleErrors.js";
import { router } from "./router.js";
import "dotenv/config";
import { getAll } from "./models/user/userAccessDataService.js";


const app = express();
const PORT = process.env.PORT || 3000;

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
    res.send(getAll);
});

// /user & /npc
app.use(router);

app.use((err, req, res, next) => {
    const message = err.message || "internal server error";
    return handleError(res, 500, message);
});

app.listen(PORT, () => {
    console.log(chalk.blue("App is listening to port " + PORT));
    connectToDB();
});