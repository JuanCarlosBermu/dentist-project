import express from "express";
import cors from "cors";

const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:5173",
};  

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
  res.json({ message: "Si esta funcionando pa!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});