import { categoryService } from '../services';

const findAllCategoriesAndSubCategories = async (req, res) => {
  try {
    const { menu_id } = req.body;
    const categories = await categoryService.matchCategoriesAndSubCategories(menu_id);
    res.status(200).json({ categories });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default { findAllCategoriesAndSubCategories };
