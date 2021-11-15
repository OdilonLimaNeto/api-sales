import Router from 'express';

const router = Router();
import { products } from './product/product.routes';

router.use('/product', products);

export { router };
