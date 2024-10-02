
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


app.post("/checkUser", async function (req, res) {
    try {

        const userData = req.body;

        const { email, username } = userData;

        // find

        const user = mongoose.model('users', userSchema);

        await user.find({ email: email }).then(function (err, result) {
            if (err) {
                res.send(err)
            }
            else {

                res.json(result);
            }
        });

    } catch (error) {
        console.log(error);
    }



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