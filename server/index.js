// nodejs 
// express js is an middleware that is used to handle user requests in backend.

const Server = require("express");

const app = Server();

// get request

app.get("/sayHello", function (req, res) {
    res.send("Hello  from node js backend");
})

app.listen(5500, function () {
    console.log("server is online now");
})



// app.use();