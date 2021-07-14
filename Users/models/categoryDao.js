import prisma from '../../prisma/index';

const findCategories = async () => {
  return await prisma.$queryRaw(`
  SELECT
    categories.id, categories.name
  FROM 
    categories
  `);
};

const findSubCategories = async (categoryId) => {
  return await prisma.$queryRaw(`
  SELECT 
    sub_categories.id, sub_categories.name
  FROM 
    sub_categories
  WHERE 
    category_id = '${categoryId}'
  `);
};

export default { findCategories, findSubCategories };
