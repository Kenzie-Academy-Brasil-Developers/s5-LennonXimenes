import { Request, Response } from "express";
import { Movie } from "../entities";
import movieServices from "../services/movie.services";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await movieServices.createMovie(req.body);

    return res.status(201).json(movie)
}

export default { createMovie };