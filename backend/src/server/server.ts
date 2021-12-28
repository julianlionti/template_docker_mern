import express from "express";
import bodyParser from "body-parser";
import api from "../routes/api.route";
import morgan from "morgan";
import Config from "../utils/config";
import { connectDatabase } from "./db";

const configureServer = async () => {
  console.log("Configuring server");
  await connectDatabase();

  const app = express();
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan("tiny"));

  app.use("/api", api());

  app.listen(Config.PORT, () => {
    console.log(`${Config.APP_NAME} is listening on port ${Config.PORT}!`);
  });

  return app;
};

export default configureServer;
