let products = [
    { id: 1, name: 'Laptop', price: 1200 },
    { id: 2, name: 'Smartphone', price: 800 },
    { id: 3, name: 'Tablet', price: 500 }
];

let json = {"message": "Respuesta JSON", "status": "success"}


export const getProducts = () => {
    return products;
};  

export const getHTML = () =>{
    return "<h1>Respuesta HTML</h1>"
}

export const getJSON = () =>{
    return JSON.stringify(json);
}