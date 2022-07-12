//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
 res.send('hello awesome');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);

module.exports = app;
[ec2-user@ip-172-31-89-222 app]$ cat package.json
{
  "name": "node-app",
  "description": "hello my node-app",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "3.12.0",
    "nodemon": "^2.0.19"
  },
  "devDependencies": {
    "mocha": "1.20.1",
    "supertest": "0.13.0"
  }
}