var express = require("express");
var bodyParser = require("body-parser");
// Set port or use an available post with code below
var PORT = process.env.PORT || 3306;

var app = express();

//serve static content for the app from "public" dir in the app dir
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//set handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes/let server access these routes through this file link
var routes = require("./controllers/burgers_controller.js");
app.use(routes);

//Start server & have it listen for reqs
app.listen(PORT, function () {
    //log which lets user know server is connected and listening
    console.log("Server listening on: http://localhost:" + PORT);
});
