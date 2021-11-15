import { ICreateProductDTO } from '@modules/product/dtos/ICreateProdutDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({
    title,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.repository.create({ title, price, quantity });
    await this.repository.save(product);
    return product;
  }
  async findByTitle(title: string): Promise<Product | undefined> {
    const titleAlreadyExists = await this.repository.findOne({
      where: { title },
    });
    return titleAlreadyExists;
  }
}

export { ProductRepository };
