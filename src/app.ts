import express, { Application, Request, Response, json } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user.route';
const app: Application = express();

app.use(express());
app.use(cors());
app.use(json());
app.use('/api/users', userRoutes);

const getController = (req: Request, res: Response) => {
  res.send('Hello Devs!');
};

app.get('/', getController);

export default app;
