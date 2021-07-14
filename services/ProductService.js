import { ProductsDao } from '../models';

const getProducts = async () => {
  return await ProductsDao.getProducts()
}

export default { getProducts }