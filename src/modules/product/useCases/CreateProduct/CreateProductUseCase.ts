import { ICreateProductDTO } from '@modules/product/dtos/ICreateProdutDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateProductUseCase {
  constructor(
    @inject('ProductRepository')
    private productRepository: IProductRepository,
  ) {}

  async execute({ title, price, quantity }: ICreateProductDTO): Promise<void> {
    const titleAlreadyExists = await this.productRepository.findByTitle(title);
    if (titleAlreadyExists) {
      throw new AppError('titleAlreadyExists');
    }
    await this.productRepository.create({
      title,
      price,
      quantity,
    });
  }
}
export { CreateProductUseCase };
