const { detalle } = require("./db/index");
const express = require("express");
const app = express();
const port = 3000;

app.get("/detalle/:id", async (req, res) => {
  const id = req.params.id;
  const respuesta = await detalle(id);
  res.status(200).json(respuesta);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
