import { ProductsDao } from '../models';

const getProducts = async (subCategoryId) => {
  console.log('서비스', subCategoryId);
  return await ProductsDao.getProducts(subCategoryId);
};

export default { getProducts };
