function isAdminMiddleware(req, res, next) {
    if (res.locals.user == undefined || !res.locals.user.admin) {
        res.redirect("/users/login");
    } else {
        next();
    }
}

module.exports = isAdminMiddleware;
