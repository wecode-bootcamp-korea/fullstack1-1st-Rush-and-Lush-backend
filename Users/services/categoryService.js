import { categoryDao } from '../models';

const findAllCategories = async () => {
  return await categoryDao.getAllCategories();
};

const matchCategoriesAndSubCategories = async (name) => {
  return await categoryDao.matchCategoriesAndSubCategories(name);
};

export default { findAllCategories, matchCategoriesAndSubCategories };
