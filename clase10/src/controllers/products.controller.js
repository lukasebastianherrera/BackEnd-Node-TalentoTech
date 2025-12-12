import { getProducts } from "../models/products.js";
export const index = (req, res) => {
    res.json(products);
};  