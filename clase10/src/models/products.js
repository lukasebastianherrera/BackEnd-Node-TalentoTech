let products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 }
];

export const getProducts = (req, res) => {
    res.json(products);
};  