import { ICreateProductDTO } from '../dtos/ICreateProdutDTO';
import { Product } from '../infra/typeorm/entities/Product';

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  list(): Promise<Product[]>;
  findByTitle(title: string): Promise<Product | undefined>;
}

export { IProductRepository };
