import db from "../config.js";

const collection = db.collection('order');

export const getItemOrder = (req, res, next) => {
    res.send('itemoder');
};

export const getListOrder = (req, res, next) => {
    for (let i = 0; i < 10; i ++) {
        
    }
};

export const postOrder = (req, res, next) => {
    try {
        const order = req.body.data;
        const insert = collection.insertOne(order);
        res.status(200).send(order);
    } catch (error) {
        res.status(400).send('order fail!');
    }
};