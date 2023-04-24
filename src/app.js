import express from "express";
import sayHello from "./services/sayHelloWorld.js";
import exceptionHandler from "./middlewares/exceptionHandler.js";

const app = express();

app.use(express.json());

// Adicionar depois das chamadas das rotas
app.use(exceptionHandler)

app.get("/", (req, res) => {
  res.send(sayHello());
});

export default app;
