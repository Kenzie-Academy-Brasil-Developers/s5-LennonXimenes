import express, { Application } from 'express';
import { movieController } from "./controllers";

const app: Application = express();
app.use(express.json());

app.post("/movies", movieController.createMovie);
app.get("/movies");

app.patch("/movies/:id");
app.delete("/movies/:id");


export default app;