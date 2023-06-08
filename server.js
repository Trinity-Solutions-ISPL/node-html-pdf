const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.send("welcome..!!");
});

app.get("/pdf1", (req, res) => {
    res.sendFile(__dirname + "/pdf1.html");
});

app.get("/pdf2", (req, res) => {
    res.sendFile(__dirname + "/pdf2.html");
});

app.get("/pdf3", (req, res) => {
    res.sendFile(__dirname + "/pdf3.html");
});