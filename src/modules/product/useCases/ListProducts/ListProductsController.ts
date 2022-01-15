import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    await listProductsUseCase.execute();
    return response.status(201).json();
  }
}

export { ListProductsController };
