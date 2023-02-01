import express from 'express';
import {
    createItem,
    getItem,
    getListItem,
    getCategoryItem
} from '../controllers/products.js';

const productsRouter = express.Router();

productsRouter.get('/item/:id', getItem);
productsRouter.get('/all', getListItem);
productsRouter.get('/category/:category', getCategoryItem);
productsRouter.post('/create', createItem);

export default productsRouter;