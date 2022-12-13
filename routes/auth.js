import express from "express";
import { register } from "../controllers/auth.js";
import { login } from "../controllers/auth.js";

const authRouter = express.Router();

authRouter.post('/resgister', register);
authRouter.post('/login', login);

export default authRouter;