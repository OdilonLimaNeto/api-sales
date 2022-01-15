import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { GetProductUseCase } from './GetProductUseCase';

class GetProductController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getProductUseCase = container.resolve(GetProductUseCase);
    const product = await getProductUseCase.execute(id);
    return response.status(201).json(product);
  }
}

export { GetProductController };
