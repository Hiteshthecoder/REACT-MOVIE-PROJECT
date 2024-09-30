
// nodejs 
// express js is an middleware that is used to handle user requests in backend.

const Server = require("express");
const { json } = require("react-router-dom");

const app = Server();

// get request

// XML

app.use(Server.json());

app.get("/sayHello", function (req, res) {
    res.sendFile("C:/hitesh/WEB_DESIGNING/FULL-STACK/REACT/basics/server/hello.html");
});

// post method in express js
app.post("/getData", function (req, res) {
    let data = req.body;
    let { name, hobby } = data;

    res.json({ name, hobby })
})


app.listen(5500, function () {
    console.log("server is online now");
})

// app.use();