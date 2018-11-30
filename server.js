var express = require("express");
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/testheroku'));

app.listen(process.env.PORT || 8080, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

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


var routes = require("./controller/burgers_controller.js");
app.use(routes);

log.Fatal(http.ListenAndServe(":" + os.Getenv("PORT"), router))

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});