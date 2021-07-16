import express from 'express'
const router = express.Router()

import ProductsRouter from './ProductRouter'
import categoryRouter from './categoryRouter'
import usersRouter from './usersRouter'

router.use('/products', ProductsRouter);
router.use('/category', categoryRouter)
router.use('/users', usersRouter)

export default router