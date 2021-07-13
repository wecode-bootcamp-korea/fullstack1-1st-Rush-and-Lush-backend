import { categoryService } from '../services';

const findAllCategories = async (req, res) => {
  try {
    const categories = await categoryService.findAllCategories();
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const findAllCategoriesAndSubCategories = async (req, res) => {
  try {
    const { name } = req.body;
    const subcategories = await categoryService.matchCategoriesAndSubCategories(
      name
    );
    res.status(200).json({ subcategories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { findAllCategories, findAllCategoriesAndSubCategories };
