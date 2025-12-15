import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/productsRouter.js'
const app = express();

// Configuración básica: Permitir todos los orígenes
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola Mundo con CORS habilitado');
});

app.use('/api', productsRouter);

// Middleware para manejar rutas no definidas
app.use((req, res, next) => {
res.status(404).json({message: 'Recurso no encontrado o ruta inválida'});
});

const PORT = 3000;  

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});