import express, { Router } from 'express';


import { getAllCarts, addCart, updateCart, deleteCart} from '../controllers/cartController';
const router: Router = express.Router();

//GET Carts
router.get('/getAllCarts', getAllCarts);
//POST Carts
router.post('/addCart', addCart);
// //UPDATE Carts
router.put('/updateCart/:productId', updateCart)
// // DELETE Carts
router.delete('/deleteCart/:productId', deleteCart);

export default router;