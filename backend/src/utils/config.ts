import { config } from "dotenv";
config();

interface IConfig {
  APP_NAME: string;
  PORT: number;
  DB_USER: string;
  DB_PASS: string;
}

const Config: IConfig = {
  APP_NAME: process.env.COMPOSE_PROJECT_NAME!!,
  PORT: 5000,
  DB_USER: process.env.MONGO_INITDB_ROOT_USERNAME!!,
  DB_PASS: process.env.MONGO_INITDB_ROOT_PASSWORD!!,
};

export default Config;
