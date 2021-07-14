import { categoryDao } from '../models';

const matchCategoriesAndSubCategories = async () => {
  const categories = await categoryDao.findCategories();
  const data = await Promise.all(
    categories.map(async (category) => {
      const subCategories = await categoryDao.findSubCategories(category.id);
      return {
        categoryId: category.id,
        catagoryName: category.name,
        subCategories: subCategories,
      };
    })
  );
  return data;
};

export default { matchCategoriesAndSubCategories };
