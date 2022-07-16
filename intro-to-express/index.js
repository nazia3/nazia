const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var ans = n1 + n2;

  res.send(" the ans is : " + ans);
});

app.get("/about", function (request, response) {
  response.send("<h1>hello my name is nazia/h1>");
});

app.listen(3000, function () {
  console.log("server running on port : 3000");
});
