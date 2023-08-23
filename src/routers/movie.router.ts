import { Router } from "express";
import { movieController } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";


export const movieRouter: Router = Router();

movieRouter.post("", middlewares.validateBody(movieCreateSchema), movieController.createMovie);
movieRouter.get("", movieController.readMovie);

movieRouter.use("/:id", middlewares.verifyIdExists);

movieRouter.get("/:id", movieController.retrieveMovie);
movieRouter.delete("/:id", movieController.deleteMovie);

movieRouter.patch("/:id", middlewares.validateBody(movieUpdateSchema), movieController.partialUpdateMovie);