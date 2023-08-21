import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceConfig = (): DataSourceOptions => {
    const entitiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");

    const dbUrl: string | undefined = process.env.DATABASE_URL;

    if (!dbUrl) {
        throw new Error("Missing env var: 'DATABASE_URL'");
    }

    return {
        type: "postgres",
        url: dbUrl,
        synchronize: true,
        logging: true,
        entities: [entitiesPath],
    };
};

const AppDataSource = new DataSource(dataSourceConfig());

export { AppDataSource };