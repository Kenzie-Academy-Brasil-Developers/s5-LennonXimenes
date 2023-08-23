import { Movie } from "../entities";
import { iMovieCreate, iMovieRead, iMovieUpdate, iPagination, iPaginationParams } from "../__tests__/interfaces";
import { movieRepo } from "../repositories";

const createMovie = async (payload: iMovieCreate): Promise<Movie> => {
    return await movieRepo.save(payload);
};

const readMovie = async ({ page, perPage, prevPage, nextPage, order, sort }: iPaginationParams): Promise<iPagination> => {
    const [movies, count]: Array<iMovieRead | number> =
        await movieRepo.findAndCount({
            order: { [sort]: order },
            skip: page,
            take: perPage
        });

    return {
        prevPage: page <= 1 ? null : prevPage,
        nextPage: count - page <= perPage ? null : nextPage,
        count,
        data: movies
    };
};

const partialUpdateMovie = async (movie: Movie, payload: iMovieUpdate): Promise<Movie> => {
    return await movieRepo.save({ ...movie, ...payload });
};

const deleteMovie = async (movie: Movie): Promise<void> => {
    await movieRepo.remove(movie);
};

export default { createMovie, readMovie, partialUpdateMovie, deleteMovie };