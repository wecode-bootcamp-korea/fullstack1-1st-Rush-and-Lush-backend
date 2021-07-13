import prisma from '../../prisma/index';

const getAllCategories = async () => {
  return await prisma.$queryRaw(`SELECT * FROM categories`);
};

const matchCategoriesAndSubCategories = async (name) => {
  return await prisma.$queryRaw(`
  SELECT 
    sub_categories.id, sub_categories.name, sub_categories.category_id
  FROM 
    sub_categories
  JOIN
    categories
  ON
    categories.id = sub_categories.category_id
  `);
};

export default { getAllCategories, matchCategoriesAndSubCategories };
