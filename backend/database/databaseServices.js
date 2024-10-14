import { connectToDB as dbconnectLocally } from "./connections/connectToMongoDBLocally.js";
import { connectToDB as dbconnectAtlas } from "./connections/connectToAtlas.js";

const ENVIRONMENT = process.env.ENVIRONMENT || "development";

const connectToDB = async () => {
    if (ENVIRONMENT == "development") {
        await dbconnectLocally();
    }
    if (ENVIRONMENT == "production") {
        await dbconnectAtlas();
    }
};

export { connectToDB };