require("dotenv").config();

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.DB_DB,
});

connection.connect();

const query1 = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT SUM(valornumerico) as valor, ficha,linea,codficha FROM detallesfichasmunicipales WHERE linea = 9 GROUP BY ficha",
      function (error, results, fields) {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

module.exports = { query1 };
