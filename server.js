var express = require("express");
const app = express();


app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

var bodyParser = require("body-parser");

///var port will be 3000(Local Host)///heroku login
var PORT = process.env.PORT || 3000;


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


var routes = require("./controller/burgers_controller.js");
app.use(routes);



app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});