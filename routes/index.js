import express from 'express';
import authRouter from './auth.js';
import ortherRouter from './orther.js';
import productsRouter from './products.js';
import postRouter from './posts.js';

const indexRouter = express();

indexRouter.use('/auth', authRouter);
indexRouter.use('/products', productsRouter);
indexRouter.use('/orther', ortherRouter);
indexRouter.use('/posts', postRouter);


export default indexRouter;