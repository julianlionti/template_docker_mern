import { config } from "dotenv";
config();

const Config = {
  APP_NAME: process.env.APP_NAME,
  PORT: 5000,
};

export default Config;
