const { query1 } = require("./db/index");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  console.log(query1);
  const respuesta = await query1();
  res.status(200).json(respuesta);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
