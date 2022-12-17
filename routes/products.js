import express from 'express';
import { getItem } from '../controllers/products.js';
import { getListItem } from '../controllers/products.js';
import { getPaginationItem } from '../controllers/products.js';
import { getCategoryItem } from '../controllers/products.js';



const productsRouter = express.Router();


productsRouter.get('/item/:id', getItem);
productsRouter.get('/all', getListItem);
productsRouter.get('/category/:category', getCategoryItem);
productsRouter.get('/', getPaginationItem);

export default productsRouter;