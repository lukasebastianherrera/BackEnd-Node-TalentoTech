import { Router } from 'express';
import { index, RespuestaHTML, RespuestaJSON } from '../controllers/products.controller.js';


const router = Router();


router.get('/', index);
router.get('/', RespuestaHTML)
router.get('/', RespuestaJSON)
export default router;