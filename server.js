var express = require("express");
var app = express();

app.use("/", express.static("assets"));

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/topDownExample.html");
});

app.listen(3201, ()=>{
    console.log("Listening on port: " + 3201);
});