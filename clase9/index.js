// FORMA TRADICIONAL CON COMMONJS

/* const http  = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hola mudo');   
})

const PORT  = 3000;

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}) */


// FORMA MODERNA CON ES MODULES

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send('hola mudo, Desde Express Esta es la pagina principal');
})

app.get('/productos', (req, res) => {
res.send('Bienvenid@ a la página de productossssss');
});

app.get('/productos/14', (req, res) => {
res.send('Estás viendo el producto N° 14.');
});



const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en Express en el puerto: ${PORT}`)
})
