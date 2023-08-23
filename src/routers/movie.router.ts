import { Router } from "express";
import { movieController } from "../controllers";
import middlewares from "../middlewares";
import { movieCreateSchema, movieUpdateSchema } from "../schemas";


export const movieRouter: Router = Router();

movieRouter.post("", middlewares.validateBody(movieCreateSchema), middlewares.verifyNameExists, movieController.createMovie);
movieRouter.get("", middlewares.pagination, movieController.readMovie);

movieRouter.use("/:id", middlewares.verifyIdExists);

movieRouter.get("/:id", movieController.retrieveMovie);
movieRouter.delete("/:id", movieController.deleteMovie);

movieRouter.patch("/:id", middlewares.validateBody(movieUpdateSchema), middlewares.verifyNameExists, movieController.partialUpdateMovie);