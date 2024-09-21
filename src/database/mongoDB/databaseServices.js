import { connectToDB as dbconnectLocally } from "./servers/connectToMongoDBLocally";
import { connectToDB as dbconnectAtlas } from "./servers/connectToAtlas";

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