import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import indexRouter from "./routes/index.js";

const app = express();
const PORT = process.env.PORT || 5000;
const jsonPaser = bodyParser.json();

// limit required use 3000md
app.use(bodyParser.json({ limit: '3000md' }));
app.use(bodyParser.urlencoded({ extended: false, limit: '3000md' }));
app.use(cors());

// app.use('/api', jsonPaser, indexRouter);

app.get('/', (req, res) => {
    res.send('server start')
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});