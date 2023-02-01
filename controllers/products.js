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
    // for(let i = 1; i < 20; i++) {    
    //     collection.insertOne(  {
    //         image: 'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/10-255x348.jpg',
    //         subImage: [
    //             'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/15-255x348.jpg',
    //             'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/3-255x348.jpg',
    //             'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/2-255x348.jpg',
    //             'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/1-255x348.jpg'
    //         ],
    //         name: `casual shirt ${i}`,
    //         category: 'men',
    //         color_group: [
    //             {
    //                 hex: '#ff0000de',
    //                 active: true,
    //                 name: 'red'
    //             },
    //             {
    //                 hex: '#ff9900de',
    //                 active: false,
    //                 name: 'cam'
    //             },
    //             {
    //                 hex: '#33ff00de',
    //                 active: false,
    //                 name: 'xanh la'
    //             },
    //         ],
    //         size_group: [
    //             {
    //                 name: 'S',
    //                 active: true
    //             },
    //             {
    //                 name: 'M',
    //                 active: false
    //             },
    //             {
    //                 name: 'XL',
    //                 active: false
    //             }
    //         ],
    //         color: '#ff0000de',
    //         size: 'S',
    //         slug: 'casual-shirt',
    //         type: 'special',
    //         like: 1,
    //         price: 140000,
    //         discount: 0,
    //         rating: 4,
    //         review: 12,
    //         share: 0,
    //         quantity: 1,
    //         comment: [
    //             {
    //                 userId: '',
    //                 desc: ''
    //             }
    //         ]
    //     })
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
        res.json(req.body.data);
    } catch (error) {
        
    }
};