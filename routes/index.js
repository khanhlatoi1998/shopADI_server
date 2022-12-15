import express from 'express';
import authRouter from './auth.js';
import productsRouter from './products.js';

const indexRouter = express();

indexRouter.use('/auth', authRouter);
indexRouter.use('/products', productsRouter);


export default indexRouter;