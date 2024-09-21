import express from "express";
import chalk from "chalk/index.js";
import cors from "cors"
import { connectToDB } from "./mongoDB/databaseServices.js"
import { handleError } from "./utils/handleErrors.js";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(chalk.bgBlueBright(
        `request URL: ${req.url}| Method: ${req.method} | Time: ${new Date()}`
    ));
    next();
});

app.use((err, req, res, next) => {
    const message = err.message || "internal server error";
    return handleError(res, 500, message);
});

app.listen(PORT, () => {
    console.log(chalk.blue("app is listening to port " + PORT));
    connectToDB();
});