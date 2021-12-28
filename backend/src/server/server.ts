import express from "express";
import Config from "../utils/config";

const port = 5000;

const configureServer = () => {
  const app = express();

  app.get("/api", (req, res) => {
    res.send("Vamo Racing!!!");
  });

  app.listen(port, () => {
    console.log(
      `${Config.APP_NAME || "Application"} is listening on port ${port}!`
    );
  });

  return app;
};

export default configureServer;
