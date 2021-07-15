import { ProductsService } from '../services';

const showProducts = async (req, res) => {
  // console.log('콘트랄로', subCategoryId);
  try {
    const subCategoryId = req.query.subCategoryId;
    console.log('여기 쿼리', subCategoryId);
    const products = await ProductsService.getProducts(subCategoryId);

    res.status(200).json({ products });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { showProducts };
