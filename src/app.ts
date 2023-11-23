import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

app.use(express());
app.use(cors());

const getController = (req: Request, res: Response) => {
  res.send("Hello Devs!");
};

app.get("/", getController);

export default app;
