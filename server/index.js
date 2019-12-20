const express = require('express');
let app = express();
const path= require('path');
var bodyParser = require('body-parser')
var GetReposByUsername= require('../helpers/github.js');
const  save = require('../database/index.js');
const  get25Repos  =require('../database/index.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // res.send("Welcome", req.body);
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log(req.body);

  username = req.body.username;

  GetReposByUsername.getReposByUsername(username,(error, response, body) => {
    console.log(body);

    save.save(body);
  });
  res.send(username);
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  // res.send("getyukhgjhgjk")
  get25Repos.get25Repos((error,data) => {
    if(error) {
      console.log(error);
    }
    else {
      res.send(data);
    }
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

