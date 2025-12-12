import { getProducts, getHTML,  getJSON } from "../models/products.js";
export const index = (req, res) => {
    const  products = getProducts();
    res.json(products);
};  

export const RespuestaHTML = (req, res) => {
    const  html = getHTML();
    res.send(html);
}

export const RespuestaJSON =  (req, res) =>{
    const json = getJSON();
    res.json(json);
}