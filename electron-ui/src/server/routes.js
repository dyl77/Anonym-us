const express = require("express");
const app = express();
const port = 3001;
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("../database/db.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/getall", (req, res) => {
  db.getAllUsers().then(function (results) {
    res.send(results);
    return results;
  })
    .catch(function (err) {
      res.send(err);
    })
});

app.post("/login", (req, res) => {
  db.validateUser(req.body.un, req.body.pw).then(function (results) {
    res.send(results);
    return results;
  })
    .catch(function (err) {
      res.send(err);
    })
})

app.post("/register", (req, res) => {
  db.addUser(req.body.fname, req.body.lname, req.body.un, req.body.pw);
});

app.get("/express", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
}); 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
