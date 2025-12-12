import express from 'express';
const app = express();

import path, { join, dirname} from 'path'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Middleware de aplicación
app.use((req, res, next) => {
console.log(`Datos recibidos: ${req.method} ${req.url}`);
next(); // Pasa el control al siguiente middleware o ruta
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "BocchiTheCook.png"));
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`servidor corriendo en Express en el puerto: ${PORT}`)
})