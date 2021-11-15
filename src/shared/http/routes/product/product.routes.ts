import { CreateProductController } from '@modules/product/useCases/CreateProduct/CreateProductController';
import { Router } from 'express';

const products = Router();

const createProductController = new CreateProductController();

products.post('/', createProductController.handler);
// products.get('/', .handler);
// products.get('/:id', .handler);
// products.delete('/:id', .handler);
// products.put('/:id', .handler);

export { products };
