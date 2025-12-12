import express from "express";

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

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is running on http://localhost:3000");
});
