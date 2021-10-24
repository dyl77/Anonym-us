const mysql = require('mysql');

var config =
{
    host: 'anonym-us.mysql.database.azure.com',
    user: 'anonym_us',
    password: 'Cap$tone',
    database: 'users',
    port: 3306,
    ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
    function (err) { 
    if (err) { 
        console.log("!!! Cannot connect !!! Error:");
        throw err;
    }
    else
    {
       console.log("Connection established.");
      //  addUser('dylan', 'morris', 'dyl77', 'password');
      validateUser('dyl77', 'password');
          //  queryDatabase();
    }
});

function addUser(fname, lname, username, password) {
  let id = Math.random() * (999999- 1) + 1;

  conn.query('Insert INTO users (user_id, first_name, last_name, user_name, password) VALUES (?, ?, ?, ?, ?);', [id, fname, lname, username, password],
    function (err, results, fields) { 
      if (err) throw err; 
    console.log('Registered user ' + username + " with database");
  })
  conn.end(function (err) { 
      if (err) throw err;
    else  return true; 
    });
}

function validateUser(username, password) {
  let queryString = 'SELECT * FROM users WHERE user_name=\'' + username + '\''

  conn.query(queryString, 
  function (err, results, fields) {
      if (err) throw err;
      else{ 
        console.log('Selected ' + results.length + ' row(s).');
        const obj = JSON.parse(JSON.stringify(results[0]));
        if(obj.password === password){
          console.log("Valid Password");
          return true;
        } else{
          console.log("Invalid Password");
          return false;
        }
      } 
  })
conn.end(
  function (err) { 
      if (err) throw err;
      else  console.log('Closing connection.') 
});
}