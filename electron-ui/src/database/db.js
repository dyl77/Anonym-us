const mysql = require("mysql");
const util = require("util");

var config = {
  host: "anonym-us.mysql.database.azure.com",
  user: "anonym_us",
  password: "Cap$tone",
  database: "users",
  port: 3306,
  ssl: true,
};

const conn = new mysql.createConnection(config);

mysql.createConnection(config).connect(function (err) {
  if (err) {
    console.log("!!! Cannot connect !!! Error:");
    throw err;
  } else {
    console.log("Connection established.");
    //addUser('trent', 'endresen', 'tle16', 'password');
    // validateUser("dyl77", "password");
    //  queryDatabase();
  }
});

const getAllUsers = function () {
  return new Promise(function (resolve, reject) {
    conn.query("SELECT * FROM users", function (err, rows) {
      if (rows === undefined) {
        reject(new Error(err));
      } else {
        resolve(rows);
      }
    });
  });
};

function addUser(fname, lname, username, password) {
  let id = Math.random() * (999999 - 1) + 1;

  conn.query(
    "Insert INTO users (user_id, first_name, last_name, user_name, password) VALUES (?, ?, ?, ?, ?);",
    [id, fname, lname, username, password],
    function (err, results, fields) {
      if (err) throw err;
      console.log("Registered user " + username + " with database");
    }
  );
  conn.end(function (err) {
    if (err) throw err;
    else return true;
  });
}

const validateUser = function (username, password) {
  return new Promise(function (resolve, reject) {
    let queryString = "SELECT * FROM users WHERE user_name='" + username + "'";
    conn.query(queryString, function (err, results, fields) {
      if (results.length === 0) {
        resolve(false);
      } else {
        console.log("Selected " + results.length + " row(s).");
        const obj = JSON.parse(JSON.stringify(results[0]));
        if (obj.password === password) {
          console.log("Valid Password");
          resolve(true);
        } else {
          console.log("Invalid Password");
          resolve(false);
        }
      }
    });
  });
};

module.exports = { getAllUsers, addUser, validateUser };
