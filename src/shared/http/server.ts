import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { routes } from './routes';
import { AppError } from '@shared/errors/AppError';
import '@shared/infra/database/typeorm';

const server = express();

server.use(cors());
server.use(express.json());

server.use(routes);

server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    return response
      .status(500)
      .json({ status: 'error', message: 'Internal server error' });
  },
);

server.listen(3000, () => {
  console.log('server started on port 3000');
});
