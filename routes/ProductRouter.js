import express from 'express'
import { ProductsController } from '../controllers'

const router = express.Router();

router.get('', ProductsController.showProducts)

export default router;