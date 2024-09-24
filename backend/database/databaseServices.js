import { connectToDB as dbconnectLocally } from "./servers/connectToMongoDBLocally.js";
import { connectToDB as dbconnectAtlas } from "./servers/connectToAtlas.js";

const ENVIRONMENT = "development"

const connectToDB = async () => {
    if (ENVIRONMENT === "development") {
        await dbconnectLocally();
    }
    if (ENVIRONMENT === "production") {
        await dbconnectAtlas();
    }
};

export { connectToDB };