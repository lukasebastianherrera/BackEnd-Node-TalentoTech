import express from "express";
import productsRouter from "./src/routes/products.router.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/HTML", (req, res) => {
    res.send("<h1>Respuesta HTML</h1>");
});
app.get("/JSON", (req, res) => {
    res.send('{"message": "Respuesta JSON", "status": "success"}');
});

app.use("/api/productos", productsRouter)
app.use("/HTML", productsRouter)
app.use("/JSON", productsRouter)
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});
