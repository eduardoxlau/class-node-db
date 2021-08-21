const { detalle, create_depto } = require("./db/index");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/detalle/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await detalle(id);
  res.status(200).json(respuesta);
});

app.post("/createdepto", async (req, res) => {
  const input = req.body;

  const respuesta = await create_depto(input);
  res.status(201).json(respuesta);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
