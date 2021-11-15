import 'reflect-metadata';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';
import { AppError } from '@shared/errors/AppError';

import '../container';
import { createConnection } from 'typeorm';

createConnection();
const server = express();

server.use(cors());
server.use(express.json());

server.use(router);

server.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }
    return response.status(500).json({
      status: 'Error',
      message: `${err.message}`,
    });
  },
);

server.listen(3000, () => {
  console.log('server started on port 3000');
});
