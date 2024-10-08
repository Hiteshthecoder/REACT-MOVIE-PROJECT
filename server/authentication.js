// middleware is a utility or a feature that helps you to build your backend logic.

function validateUser(req, res, next) {

    // not operator

    if (!req.headers.authorization) {
        res.send("invalid user");
        res.end();
    }

    next();
}

module.exports = { validateUser }