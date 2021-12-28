import mongoose from "mongoose";
import Config from "../utils/config";

export const connectDatabase = async () => {
  console.log("Connecting to database");
  const userName = Config.DB_USER;
  const password = Config.DB_PASS;
  const hostName = `mongodb://${userName}:${password}@mongodb:27017`;
  const connString = `${hostName}/${Config.APP_NAME}?authSource=admin`;

  try {
    await mongoose.connect(connString);
    console.log("Connected to databse");
  } catch (err) {
    console.error("Cannot connect database");
    console.error(err);
  }
};
