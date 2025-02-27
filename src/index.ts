import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.db_port || 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Microservice Gym-management 🦾");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});