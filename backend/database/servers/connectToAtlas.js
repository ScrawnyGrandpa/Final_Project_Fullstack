import mongoose from "mongoose";

const atlasString = ""
const connectToDB = async () => {
    try {
        await mongoose.connect(atlasString);
        console.log("Connected to MongoDB via Atlas and listening to requests");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export { connectToDB };