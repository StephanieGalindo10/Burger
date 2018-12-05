let express = require("express");
var PORT = process.env.PORT || 3000;
let app = express();

var bodyParser = require("body-parser");



// serve static content for the app and set up body-parser
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// set up Handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");


let routes = require("./controller/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});