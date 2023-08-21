import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

const createMovie = async (payload: Omit<Movie, "id">): Promise<Movie> => {
    const repo: Repository<Movie> = AppDataSource.getRepository(Movie);
    const movie: Movie = await repo.save(payload);

    return movie;
}

export default { createMovie };