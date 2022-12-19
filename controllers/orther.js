import db from "../config.js";

const collection = db.collection('orther');

export const getOrther = (req, res) => {
    const find = collection.find().toArray((err, result) => {
        if (!err) {
            if (result.length > 0) {
                res.status(200).send(result[0]);
            } else {
                res.status(200).send('null');
            }
        } else {
            res.status(400).send('err');
        }
    })
};