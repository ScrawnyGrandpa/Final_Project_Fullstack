import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB via Atlas and listening to requests");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
    }
};

export { connectToDB };