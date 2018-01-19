var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var APIS_COLLECTION = "contacts";

var app = express();
app.use(bodyParser.json());

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database){
    if (err){
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log("Database connection ready");

    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now runnong on port", port);
    });
});

// generic error handler
function handleError(res, reason, message, code){
    console.log("Error: " + reason);
    res.status(code || 500).json({"error": message});
}

app.get("/api/v1.0/apis", function(req, res){
    
});

app.post("/api/v1.0/apis", function(req, res){

});