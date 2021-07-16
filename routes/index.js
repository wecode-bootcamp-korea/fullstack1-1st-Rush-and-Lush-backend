import express from 'express'
const router = express.Router()

import ProductsRouter from './ProductRouter'

router.use('/products', ProductsRouter);

export default router