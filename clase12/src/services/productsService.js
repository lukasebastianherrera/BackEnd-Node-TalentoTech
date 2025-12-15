
const products = [
    {
        id: 1,
        name: "producto1",
        precio: 100,
    },
    {
        id: 2,
        name: "producto2",
        precio: 200,
    },
    {
        id: 3,
        name: "producto3",
        precio: 333,
    },
];


export const getAllProducts = () => {
    return products;
};

export const getProductByID = (id) => {
    return products.find(product => product.id == id);
};

export const createProduct = (productData) => {
    const newProduct = {
        id: products.length + 1,
        name : productData.name,
        precio : productData.precio
    };
    products.push(newProduct);
    return newProduct;
}

export default {
    getAllProducts,
    getProductByID,
    createProduct
};
