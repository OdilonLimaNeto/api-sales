import { Product } from '../infra/typeorm/entities/Product';
interface ICreateProductDTO {
  title: Product['title'];
  price: Product['price'];
  quantity: Product['quantity'];
}

export { ICreateProductDTO };
