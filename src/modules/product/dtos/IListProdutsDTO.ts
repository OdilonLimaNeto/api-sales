import { Product } from '../infra/typeorm/entities/Product';
interface IListProductsFilterDTO {
  title?: Product['title'];
  price?: Product['price'];
  quantity?: Product['quantity'];
}

export { IListProductsFilterDTO };
