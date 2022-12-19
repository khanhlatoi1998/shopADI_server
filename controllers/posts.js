import db from "../config.js";

const collection = db.collection('posts');

export const getPost = async (req, res) => {
    const id = req.params.id;
    const find = collection.find({
        id: id,
    }).toArray((err, result) => {
        if (!err) {
            if (result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(200).send('not found id post');
            }
        } else {
            res.status(400).send('err');
        }
    })
};

export const getListPost = async (req, res) => {
    const limit = Number(req.query.limit) || 10;
    const page = Number(req.query.page) || 1;
    const total = await collection.find().count();

    collection
        .find()
        .skip((limit * page) - limit)
        .limit(limit)
        .toArray((err, result) => {
            if (!err) {
                res.status(200).json({
                    data: result,
                    limit: limit,
                    page: page,
                    total: total,
                })
            } else {
                res.status(400).send('err');
            }
        })

};