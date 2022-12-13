import { data } from "../data.js";


export const Item = (req, res, next) => {
    const item = data.products.find(item =>  item.id == req.params.id);
    res.send(item);
}

export const ListItem = (req, res, next) => {
    res.json(data);
};