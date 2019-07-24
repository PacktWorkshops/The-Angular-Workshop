// middleware for restricted routes
module.exports = function (req, res, next) {
    if (req.session.authenticated ) {
        return next();
    } else {
        res.status(401).send('Unauthorized');
    }
};