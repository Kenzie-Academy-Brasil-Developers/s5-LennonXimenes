import { NextFunction, Request, Response } from "express";
import { movieRepo } from "../repositories";
import { Movie } from "../entities";
import { AppError } from "../errors";

export const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (req.method === "PATCH") {
        const foundMovieId: Movie | null = await movieRepo.findOneBy({ id: Number(req.params.id) });

        const movieName = req.body;

        if (foundMovieId?.name === movieName?.name) {
            throw new AppError("Movie already exists.", 409);
        }
    }

    if (req.method === "POST") {
        const movie = req.body;

        const foundName: Movie | null = await movieRepo.findOneBy({ name: movie.name });

        if (foundName) {
            throw new AppError("Movie already exists.", 409);
        }
    }

    return next();
};