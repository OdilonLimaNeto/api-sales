import { CreateProductController } from '@modules/product/useCases/CreateProduct/CreateProductController';
import { ListProductsController } from '@modules/product/useCases/ListProducts/ListProductsController';
import { Router } from 'express';

const products = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

products.post('/', createProductController.handler);
products.get('/', listProductsController.handler);
// products.get('/:id', .handler);
// products.delete('/:id', .handler);
// products.put('/:id', .handler);

export { products };
