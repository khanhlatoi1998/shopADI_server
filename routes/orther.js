import express from "express";
import { getOrther } from "../controllers/orther.js";

const ortherRouter = express.Router();

ortherRouter.get('/', getOrther);

export default ortherRouter;