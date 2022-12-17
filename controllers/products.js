import { data } from "../data.js";
import db from "../config.js";

const collection = db.collection('products');


export const getItem = (req, res, next) => {
    try {
        const id = req.params.id;
        const find = collection
        .find({
            id: id
        })
        .toArray((err, result)  => {
            if (!err) {
                res.json(result);
                res.status(200);
            } else {
                res.status(400);
                return;
            }
        })
    } catch (error) {
        
    }
}

export const getListItem = (req, res, next) => {
    res.json(data);
};

export const getPaginationItem = async (req, res, next) => {
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

export const getCategoryItem = (req, res, next) => {
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