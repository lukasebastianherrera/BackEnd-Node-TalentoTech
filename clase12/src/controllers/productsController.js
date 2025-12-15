import productsService from '../services/productsService.js';

export const getAllProducts = async (req, res) => {
    res.status(200).json(productsService.getAllProducts());
}
export const getProductByID = async (req, res) => {
    const id = req.params.id;
    const product = productsService.getProductByID(id);
    if(product){
        res.status(200).json(product);
    } else {
        res.status(404).json({message: 'Producto no Encontrado'})
    }
}

export const createProduct = async(req, res) => {
    const {name, precio} = req.body;
    const newProduct = productsService.createProduct({name, precio})
    res.status(201).json(newProduct)
}