import express from 'express';
import { getAllProducts,  getProductByID, createProduct} from '../controllers/productsController.js';
const router = express.Router();

router.get('/products', getAllProducts);
router.get('/products/:id', getProductByID);
router.post('/products', createProduct);
export default router