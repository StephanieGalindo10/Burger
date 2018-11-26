var express = require("express");

var bodyParser = require("body-parser");

///var port will be 3000(Local Host)///
var PORT = process.env.PORT || 3000;

var app = express();

// serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

// set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");
app.use(routes);


app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});