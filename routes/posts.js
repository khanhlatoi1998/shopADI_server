import express from 'express';
import { getPost } from '../controllers/posts.js';
import { getListPost } from '../controllers/posts.js';

const postRouter = express.Router();

postRouter.get('/:id', getPost);
postRouter.get('/', getListPost);

export default postRouter;

