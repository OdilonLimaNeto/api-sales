import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListProductsUseCase } from './ListProductsUseCase';

class ListProductsController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { title, price, quantity } = request.query;
    const listProductsUseCase = container.resolve(ListProductsUseCase);
    const products = await listProductsUseCase.execute({
      title: title as string | undefined,
      price: price as number | undefined,
      quantity: quantity as number | undefined,
    });
    return response.status(201).json(products);
  }
}

export { ListProductsController };
