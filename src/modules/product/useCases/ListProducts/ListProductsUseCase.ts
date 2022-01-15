import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListProductsUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}

  async execute(): Promise<Product[]> {
    return this.repository.list();
  }
}
export { ListProductsUseCase };
