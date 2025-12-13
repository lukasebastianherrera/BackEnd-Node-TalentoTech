import express from 'express';
import cors from 'cors';
const app = express();
// Configuración básica: Permitir todos los orígenes
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola Mundo con CORS habilitado');
});

app.get('/data', (req, res) => {
    res.json({ message: 'Esta es una respuesta GET JSON desde /data' });
});

app.delete('/data', (req, res) => {
    res.json({ message: 'Solicitud DELETE recibida en /data' });
});

app.get('/items/:id', (req, res) => {
    const itemID = req.params.id;
    res.send(`Item Solicitado: ${itemID}`);
});

app.get('/items', (req, res) =>{
    const category = req.query.category;
    const  price  = req.query.price;
    res.send(`Item de categoria: ${category} y con  precio: ${price}`)
})

app.use((req, res, next) => {
res.status(404).send('Recurso no encontrado o ruta inválida');
});

const PORT = 3000;  

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});