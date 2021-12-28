import express from "express";
import Config from "../utils/config";

const configureServer = () => {
  const app = express();

  app.get("/api", (req, res) => {
    res.send("Vamo la acadé!!!");
  });

  app.listen(Config.PORT, () => {
    console.log(
      `${Config.APP_NAME || "Application"} is listening on port ${Config.PORT}!`
    );
  });

  return app;
};

export default configureServer;
