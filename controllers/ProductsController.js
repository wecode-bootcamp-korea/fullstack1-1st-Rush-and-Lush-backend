import { ProductsService } from '../services'

const showProducts = async (req, res) => {
  try {
    const products = await ProductsService.getProducts()
    
    res.status(200).json({ products })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export default { showProducts }