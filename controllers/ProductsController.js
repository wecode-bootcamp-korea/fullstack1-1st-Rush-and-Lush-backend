import { ProductsService } from '../services';

const showProducts = async (req, res) => {
  try {
    const subCategoryId = req.query.subCategoryId;
    let products = await ProductsService.getProducts(subCategoryId);
    
    products = products.map(product=>{
      const {is_new, is_sold_out, is_vegan} = product
      product.tags=[]
      if(is_new) product.tags.push("NEW")
      if(is_sold_out) product.tags.push("SOLD OUT")
      if(is_vegan) product.tags.push("VEGAN")
      return product
    })

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showProducts };
