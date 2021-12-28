import { Router } from "express";
import Config from "../utils/config";
import swaggerUI from "swagger-ui-express";
import swaggerJson from "../docs/swagger.json";

const api = () => {
  const router = Router();

  router.get("/", (req, res) => {
    res.send(
      `<div><h1>${Config.APP_NAME} api</h1><a href="/api/swagger/v1">Go to documentation V1</a></div>`
    );
  });

  router.use("/swagger/v1", swaggerUI.serve, swaggerUI.setup(swaggerJson));

  return router;
};

export default api;
