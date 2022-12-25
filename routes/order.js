import express from "express";
import { getItemOrder, getListOrder, postOrder } from "../controllers/order.js";

const orderRouter = express.Router();

orderRouter.get('/', getListOrder);
orderRouter.get('/:id', getItemOrder);
orderRouter.post('/', postOrder);


export default orderRouter;