const { Schema } = require("mongoose");

const userSchema = new Schema({
    email: String,
    username: String,
    password: String
})

module.exports = { userSchema };