import express from "express";
import dotenv from "dotenv";
import floresRoutes from "./src/routes/floresRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor Inicializado");
})

app.use("/flores", floresRoutes);

app.listen(serverPort, () => {
    console.log(`Servidor rodando em: http://localhost:${serverPort}`);
})