import { categoryService } from '../services';

const findAllCategoriesAndSubCategories = async (req, res) => {
  try {
    const categories = await categoryService.matchCategoriesAndSubCategories();
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { findAllCategoriesAndSubCategories };
