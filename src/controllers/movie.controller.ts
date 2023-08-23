import { Request, Response } from "express";
import { Movie } from "../entities";
import movieServices from "../services/movie.services";
import { iMovieRead } from "../__tests__/interfaces";

const createMovie = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await movieServices.createMovie(req.body);

    return res.status(201).json(movie)
}

const readMovie = async (req: Request, res: Response): Promise<Response> => {
    const movies: iMovieRead = await movieServices.readMovie();

    return res.status(200).json(movies)
}

const retrieveMovie = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json(res.locals.foundMovie);
}

const partialUpdateMovie = async (req: Request, res: Response): Promise<Response> => {
    const { foundMovie } = res.locals;
    const { body } = req;

    const movie: Movie = await movieServices.partialUpdateMovie(foundMovie, body);

    return res.status(200).json(movie);
}

const deleteMovie = async (req: Request, res: Response): Promise<Response> => {
    await movieServices.deleteMovie(res.locals.foundMovie);

    return res.status(204).json();
}

export default { createMovie, readMovie, retrieveMovie, partialUpdateMovie, deleteMovie };