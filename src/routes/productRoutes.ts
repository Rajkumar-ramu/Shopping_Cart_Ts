import express, { Router } from 'express';

const router: Router = express.Router();

import { getAllProducts, createProduct, updateProduct, deleteProduct} from '../controllers/productController';
//GET Products
router.get('/getAllProducts', getAllProducts);
//POST Products
router.post('/createProduct', createProduct);
//UPDATE Products
router.put('/updateProduct/:productId', updateProduct)
// DELETE Products
router.delete('/:productId', deleteProduct);

export default router;