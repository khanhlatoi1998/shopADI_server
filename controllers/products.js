import { data } from "../data.js";
import db from "../config.js";
import { ObjectID } from "bson";

const collection = db.collection('products');


export const getItem = (req, res, next) => {
    try {
        const id = req.params.id;
        const find = collection
            .find({
                _id: ObjectID(id)
            })
            .toArray((err, result) => {
                if (!err) {
                    if (result.length > 0) {
                        res.json(result[0]);
                        res.status(200);
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
    // for(let i = 0; i <= 20; i++) {    
    //     collection.insertOne(
    //         {
    //             "image": "https://firebasestorage.googleapis.com/v0/b/shop-adi.appspot.com/o/Products-Image%2F5458eb16-7192-a195-9722-de1d6df417e0?alt=media&token=aacb2975-dba7-4c0b-8d48-3cf408fdd180",
    //             "subImage": [
    //                 "https://firebasestorage.googleapis.com/v0/b/shop-adi.appspot.com/o/Products-Image%2F5458eb16-7192-a195-9722-de1d6df417e0?alt=media&token=aacb2975-dba7-4c0b-8d48-3cf408fdd180",
    //                 "https://firebasestorage.googleapis.com/v0/b/shop-adi.appspot.com/o/Products-Image%2F666530ad-1601-73dd-da8f-b1d580a4f87c?alt=media&token=29bcf9b4-5d32-4ff9-b6ca-4372ff4411e1",
    //                 "https://firebasestorage.googleapis.com/v0/b/shop-adi.appspot.com/o/Products-Image%2F7849f5da-d382-0d15-8036-36cc1f5fb8b0?alt=media&token=187be663-c448-4b8c-9e35-6d05f464e74e",
    //                 "https://firebasestorage.googleapis.com/v0/b/shop-adi.appspot.com/o/Products-Image%2F588194b0-d2df-a220-f956-9e5ac6703fcf?alt=media&token=fde5719f-5282-4c9e-a584-1c5627279d8c"
    //             ],
    //             "name": "name",
    //             "category": "men",
    //             "color_group": [
    //                 {
    //                     "hex": "#ff0000",
    //                     "name": "#ff0000",
    //                     "active": true
    //                 },
    //                 {
    //                     "hex": "blue",
    //                     "name": "blue",
    //                     "active": false
    //                 },
    //                 {
    //                     "hex": "yellow",
    //                     "name": "yellow",
    //                     "active": false
    //                 }
    //             ],
    //             "size_group": [
    //                 "S",
    //                 "M",
    //                 "L",
    //                 "X"
    //             ],
    //             "color": "#4f1c1c",
    //             "size": "S",
    //             "slug": "slug-6538378",
    //             "price": 6000 + i*10,
    //             "oldPrice": 7000 +i*20,
    //             "quantity": 1,
    //             "rating": "",
    //             "type": "",
    //             "like": 0,
    //             "view": 0,
    //             "share": 0,
    //             "comment": [],
    //             "description": ""
    //         }
    //     )
    // }
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

export const createItem = async (req, res, next) => {
    try {
        const data = req.body.data;
        console.log(data);
        collection.insertOne(data);
        res.send(req.body.data);
    } catch (error) {

    }
};