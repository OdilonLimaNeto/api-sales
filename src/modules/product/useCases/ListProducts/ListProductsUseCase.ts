import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  title?: Product['title'];
  price?: Product['price'];
  quantity?: Product['quantity'];
}
@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}

  async execute({ title, price, quantity }: IRequest): Promise<Product[]> {
    const products = await this.repository.list({ title, price, quantity });
    return products;
  }
}
export { ListProductsUseCase };
