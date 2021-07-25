import { ProductsService } from '../services';

const showProducts = async (req, res) => {
  try {
    const subCategoryId = req.query.subCategoryId;
    let products = await ProductsService.getProducts(subCategoryId);

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showProducts };
