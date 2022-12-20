import { data } from "../data.js";
import db from "../config.js";
import { ObjectID } from "bson";

const collection = db.collection('products');


export const getItem = (req, res, next) => {
    try {
        const id =  req.params.id;
        const find = collection
            .find({
                _id: ObjectID(id)
            })
            .toArray((err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        res.json(result[0]);
                        res.status(200);
                        console.log(result)
                    } else {
                        res.status(200).send('not found id product');
                    }
                } else {
                    res.status(400);
                    return;
                }
            })
    } catch (error) {

    }
}

export const getListItem = async (req, res, next) => {
    try {
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        let total;

        const getCountPage = await collection.countDocuments().then((count) => {
            total = count;
        });

        const find = collection
            .find()
            .skip((page * limit) - limit)
            .limit(limit)
            .toArray((err, result) => {
                if (!err) {
                    res.json({
                        data: result,
                        limit: limit,
                        page: page,
                        total: total
                    });
                } else {
                    res.status(400).send('err');
                }
            })

    } catch (error) { }
};

export const getCategoryItem = async (req, res, next) => {
    try {
        const category = req.params.category;
        const limit = Number(req.query.limit) || 10;
        const page = Number(req.query.page) || 1;
        let total = 1;
        const getCountPage = await collection.find({ category: category }).count();

        const find = collection
            .find({
                category: category
            })
            .skip((page * limit) - limit)
            .limit(limit)
            .toArray((err, result) => {
                if (!err) {
                    res.status(200).json({
                        data: result,
                        limit: limit,
                        page: page,
                        total: getCountPage
                    });
                } else {
                    res.status(400).send('err');
                }
            })
    } catch (error) { }
};