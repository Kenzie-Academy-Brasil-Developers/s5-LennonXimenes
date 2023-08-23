import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieName = req.body.name;

    const foundName: Movie | null = await movieRepo.findOneBy({ name: movieName });

    if (foundName) {
        throw new AppError("Movie already exists", 409);
    }

    return next();
};