import express from "express";
import dotenv from 'dotenv';
import rutas from "./routers/rutas.js";
import mongoose from "mongoose";

const app = express();
dotenv.config(); // Cargar .env

console.log("Clave secreta:", process.env.RECAPTCHA_SECRET); // ✅ Verifica si se carga

app.use(express.json());
app.use("/api", rutas);
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_CNX)
  .then(() => console.log("se conectó a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

app.listen(3001, () => {
  console.log(`prendido http://localhost:3001/index.html`);
});
