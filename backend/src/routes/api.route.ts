import { Router } from "express";
import Config from "../utils/config";

const api = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send(`<div><h1>${Config.APP_NAME} api</h1></div>`);
  });

  return router;
};

export default api;
