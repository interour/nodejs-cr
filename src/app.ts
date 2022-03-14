import express, { NextFunction, Request, Response } from 'express';
import Logger from './logger';

export const app = express();

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;
  Logger.log(`[${method}] ${path}`);
  next();
}

app.use(loggerMiddleware);

app.get('/hello', (_req: Request, res: Response) => {
  res.json({ message: 'Hello, world' });
});
