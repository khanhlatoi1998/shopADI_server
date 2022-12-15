import express from 'express';
import { Item } from '../controllers/products.js';
import { ListItem } from '../controllers/products.js';
import { Pagination } from '../controllers/products.js';



const productsRouter = express.Router();


productsRouter.get('/item/:id', Item);
productsRouter.get('/all', ListItem);
productsRouter.get('/', Pagination);

export default productsRouter;