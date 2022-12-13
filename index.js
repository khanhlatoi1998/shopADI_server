import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import  authRouter  from "./routes/auth.js";
import productsRouter from "./routes/products.js";

const app = express();
const PORT = process.env.PORT || 5000;


// limit required use 3000md
app.use(bodyParser.json({ limit: '3000md' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '3000md' }));
app.use(cors());

app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);

app.get('/',  (req, res) => {
    res.send('ok');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});