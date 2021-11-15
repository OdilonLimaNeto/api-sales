import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { title, price, quantity } = request.body;
    const createProductUseCase = container.resolve(CreateProductUseCase);
    await createProductUseCase.execute({ title, price, quantity });
    return response.status(201).send();
  }
}

export { CreateProductController };
