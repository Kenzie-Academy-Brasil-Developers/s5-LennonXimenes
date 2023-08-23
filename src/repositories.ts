import { iMovieRepo } from "./__tests__/interfaces";
import { AppDataSource } from "./data-source";
import { Movie } from "./entities";

const movieRepo: iMovieRepo = AppDataSource.getRepository(Movie);

export { movieRepo };