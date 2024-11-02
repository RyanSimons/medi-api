import mongoose from "mongoose";

const db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Mediclinic');
        console.log("Monogo DB connected");
    } catch (err) {
        console.error(`MongoDB connection error`, err);
        process.exit(1);
    }
};

export default db;