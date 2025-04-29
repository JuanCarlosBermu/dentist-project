import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ruyijgnpxewiakqmlieb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:5173",
};  

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Base de datos temporal (simulación)
const users = [{ id: 1, username: "juan", password: "contraseña" }];
// Clave secreta para JWT
const SECRET_KEY = "tu_secreto_super_seguro";


app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;


  const user = users.find(u => u.username === username);
  if (!user) return res.status(401).json({ message: "Usuario no encontrado" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(401).json({ message: "Contraseña incorrecta" });

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

// ➡️ Ruta protegida
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(403).json({ message: "Token requerido" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Acceso autorizado", user: decoded });
  } catch (error) {
    res.status(401).json({ message: "Token inválido" });
  }
});

app.get("/", (req, res) => {
  res.send("¡Hola, mundo! Esta es la API del proyecto de dentista.");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});