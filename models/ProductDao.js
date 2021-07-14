import prisma from "../prisma"

const getProducts = async () => {
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
    `)
  return products
};

export default { getProducts }