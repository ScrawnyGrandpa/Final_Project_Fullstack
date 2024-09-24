import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/scrawnyGrandpaGuides");
        console.log("Connected to MongoDB locally and listening to requests");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export { connectToDB };