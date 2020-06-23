module.exports = {
        // function to only give access to certain routes
        isLoggedIn(req, res, next) {
                if (req.isAuthenticated()) {
                        return next();
                }
                return res.redirect('/signin');
        },
        // function to validate before the user accessing a route
        isNotLoggedIn(req, res, next) {
                if (!req.isAuthenticated()) {
                        return next();
                }
                return res.redirect('/profile');
        }
}