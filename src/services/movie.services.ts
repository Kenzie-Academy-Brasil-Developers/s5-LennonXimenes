import { Movie } from "../entities";
import { iMovieCreate, iMovieRead, iMovieRepo, iMovieUpdate } from "../__tests__/interfaces";
import { movieRepo } from "../repositories";
import { AppError } from "../errors";

const createMovie = async (payload: iMovieCreate): Promise<Movie> => {
    return await movieRepo.save(payload);
}

const readMovie = async (): Promise<iMovieRead> => {
    return await movieRepo.find();
}

const partialUpdateMovie = async (movie: Movie, payload: iMovieUpdate): Promise<Movie> => {
    return await movieRepo.save({ ...movie, ...payload });
}

const deleteMovie = async (movie: Movie): Promise<void> => {
    await movieRepo.remove(movie);
}

export default { createMovie, readMovie, partialUpdateMovie, deleteMovie };