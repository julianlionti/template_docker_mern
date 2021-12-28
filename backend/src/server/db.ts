import mongoose from "mongoose";
import Config from "../utils/config";

export const connectDatabase = async () => {
  let connString = "mongodb://mongo:27017";

  try {
    await mongoose.connect(`${connString}/${Config.APP_NAME}`);
  } catch (err) {
    console.error("Cannot connect database");
    console.error(err);
  }
};
