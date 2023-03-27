import express from "express";
import sayHello from "./services/sayHelloWorld.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(sayHello());
});

export default app;
