require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB_DB,
});

connection.connect();

const detalle = (id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT SUM(valornumerico) as valor, ficha,linea,codficha FROM detallesfichasmunicipales WHERE linea = ${id} GROUP BY ficha`,
      function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

const create_depto = (input) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO departamentos SET ? ",
      input,
      function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

module.exports = { detalle, create_depto };
