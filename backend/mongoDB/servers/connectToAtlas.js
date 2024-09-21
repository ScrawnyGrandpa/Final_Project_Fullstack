import mongoose from "mongoose";

const atlasString = ""
const connectToDb = async () => {
    try {
        await mongoose.connect(atlasString);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export { connectToDb };