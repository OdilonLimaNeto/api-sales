import { ICreateProductDTO } from '@modules/product/dtos/ICreateProdutDTO';
import { IListProductsFilterDTO } from '@modules/product/dtos/IListProdutsDTO';
import { IProductRepository } from '@modules/product/repositories/IProductRepository';
import { getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async findById(id: Product['id']): Promise<Product | undefined> {
    return this.repository.findOne({ where: { id } });
  }

  async create({
    title,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const productToCreate = await this.repository.create({
      title,
      price,
      quantity,
    });
    const createdProduct = await this.repository.save(productToCreate);
    return createdProduct;
  }

  async list({
    title,
    price,
    quantity,
  }: IListProductsFilterDTO): Promise<Product[]> {
    const query = await this.repository.createQueryBuilder('product');
    if (title) query.where('product.title = :title', { title });
    if (price) query.andWhere('price = :price', { price });
    if (quantity) query.andWhere('quantity = :quantity', { quantity });
    const products = await query.getMany();
    return products;
  }

  async findByTitle(title: Product['title']): Promise<Product | undefined> {
    return this.repository.findOne({ where: { title } });
  }
}

export { ProductRepository };
