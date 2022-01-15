import { Product } from '@modules/product/infra/typeorm/entities/Product';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class GetProductUseCase {
  constructor(
    @inject('ProductRepository')
    private repository: IProductRepository,
  ) {}

  async execute(id: Product['id']): Promise<Product | undefined> {
    const product = await this.repository.findById(id);
    return product;
  }
}
export { GetProductUseCase };
