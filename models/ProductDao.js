import prisma from '../prisma';

const getProducts = async (subCategoryId) => {
  console.log(subCategoryId);
  const products = await prisma.$queryRaw(`
    SELECT
      products.id,
      products.name,
      products.price,
      products.description,
      products.is_new,
      products.is_sold_out,
      products.is_vegan,
      images.image_url
    FROM images
    JOIN products
      ON images.product_id = products.id
    WHERE products.sub_category_id = ${subCategoryId}
    `);

  return products;
};

export default { getProducts };
