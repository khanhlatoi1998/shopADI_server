import { data } from "../data.js";
import db from "../config.js";

const collection = db.collection('products');


export const Item = (req, res, next) => {
    const item = data.products.find(item => item.id == req.params.id);
    res.send(item);

}

export const ListItem = (req, res, next) => {
    res.json(data);
};

export const Pagination = async (req, res, next) => {
    try {
        const limit = Number(req.query.limit) || 12;
        const page = Number(req.query.page) || 1;
        const find = collection
            .find()
            .skip((page * limit) - limit)
            .limit(limit)
            .toArray((err, result) => {
                if (!err) {
                    res.send(result);
                } else {
                    return;
                }
            })

    } catch (error) { }
};

export const Category = (req, res, next) => {
    try {
        const category = req.params.category;
        const limit = Number(req.query.limit) || 12;
        const page = Number(req.query.page) || 1;

        const find = collection
            .find({
                category: category
            })
            .skip((page * limit) - limit)
            .limit(limit)
            .toArray((err, result) => {
                if (!err) {
                    res.send(result);
                } else {
                    res.send('Null')
                    res.status(400);
                    return;
                }
            })
    } catch (error) { }
};