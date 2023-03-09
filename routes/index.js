// eslint-disable-next-line no-unused-vars
import { Express } from "express";
import AppController from "../controllers/AppController";
import AuthController from "../controllers/AuthController";
import UsersController from "../controllers/UsersController";
import FilesController from "../controllers/FilesController";
import { basicAuthenticate, TokenAuthenticate } from "../middlewares/auth";
import { APIError, errorResponse } from "../middlewares/error";

/**
 * Injects routes with their handlers to the given Express application.
 * @param {Express} app
 */

const routes = (app) => {
  /*   const router = express.Router();
  app.use("/", router);

  router.get("/status", AppController.getStatus);
  router.get("/stats", AppController.getStats);

  router.get("/connect", basicAuthenticate, AuthController.getConnect);
  router.get("/disconnect", TokenAuthenticate, AuthController.getDisconnect);

  router.post("/users", UsersController.postNew);
  router.get("/users/me", TokenAuthenticate, UsersController.getMe);

  router.post("/files", TokenAuthenticate, FilesController.postUpload);
  router.get("/files/:id", TokenAuthenticate, FilesController.getShow);
  router.get("/files", TokenAuthenticate, FilesController.getIndex);
  router.put(
    "/files/:id/publish",
    TokenAuthenticate,
    FilesController.putPublish
  );
  router.put(
    "/files/:id/unpublish",
    TokenAuthenticate,
    FilesController.putUnpublish
  );
  router.get("/files/:id/data", FilesController.getFile);

 */

  app.get("/status", AppController.getStatus);
  app.get("/stats", AppController.getStats);

  app.get("/connect", basicAuthenticate, AuthController.getConnect);
  app.get("/disconnect", TokenAuthenticate, AuthController.getDisconnect);

  app.post("/users", UsersController.postNew);
  app.get("/users/me", TokenAuthenticate, UsersController.getMe);

  app.post("/files", TokenAuthenticate, FilesController.postUpload);
  app.get("/files/:id", TokenAuthenticate, FilesController.getShow);
  app.get("/files", TokenAuthenticate, FilesController.getIndex);
  app.put("/files/:id/publish", TokenAuthenticate, FilesController.putPublish);
  app.put(
    "/files/:id/unpublish",
    TokenAuthenticate,
    FilesController.putUnpublish
  );
  app.get("/files/:id/data", FilesController.getFile);

  app.all("*", (req, res, next) => {
    errorResponse(
      new APIError(404, `Cannot ${req.method} ${req.url}`),
      req,
      res,
      next
    );
  });
  app.use(errorResponse);
};

export default routes;
