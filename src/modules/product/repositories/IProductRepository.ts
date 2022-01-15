import { ICreateProductDTO } from '../dtos/ICreateProdutDTO';
import { IListProductsFilterDTO } from '../dtos/IListProdutsDTO';
import { Product } from '../infra/typeorm/entities/Product';

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  list({ title, price, quantity }: IListProductsFilterDTO): Promise<Product[]>;
  findByTitle(title: Product['title']): Promise<Product | undefined>;
  findById(id: Product['id']): Promise<Product | undefined>;
}

export { IProductRepository };
