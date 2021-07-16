import { ProductsDao } from '../models';

const getProducts = async (subCategoryId) => {
  return await ProductsDao.getProducts(subCategoryId);
};

export default { getProducts };
