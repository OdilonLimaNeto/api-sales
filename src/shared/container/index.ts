import { ProductRepository } from '@modules/product/infra/typeorm/repositories/ProductRepository';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { container } from 'tsyringe';

container.registerSingleton<IProductRepository>(
  'ProductRepository',
  ProductRepository,
);
