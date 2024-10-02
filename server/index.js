
// nodejs 
// express js is an middleware that is used to handle user requests in backend.

const Server = require("express");

const app = Server();

const mongoose = require("mongoose");
const { userSchema } = require("./UserSchema.js");

// get request

// XML

app.use(Server.json());

app.get("/sayHello", function (req, res) {
    res.sendFile("C:/hitesh/WEB_DESIGNING/FULL-STACK/REACT/basics/server/hello.html");
});

// post method in express js
app.post("/getData", async function (req, res) {
    const data = req.body;
    const { email, password, username } = data;

    const user = mongoose.model('users', userSchema);

    await user.create({
        email: email,
        password: password,
        username: username
    }).then(() => {
        res.send("data inserted");
    })
})

async function connectDatabase(params) {

    return await mongoose.connect("mongodb+srv://hikuprajapati2540:eOmI8c4kL7F72zAg@maincluster.jrf03.mongodb.net/?retryWrites=true&w=majority&appName=MainCluster");
}

connectDatabase().then(() => {
    console.log("connected to database");
})

app.listen(5500, function () {
    console.log("server is online now");
})

// app.use();