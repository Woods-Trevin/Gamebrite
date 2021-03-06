// This file will hold the resources for the route paths beginning
// with /api/session
const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

// checks to see if req.body.credential and req.body.password is not
// empty. If one of them is empty, then an error will be returned as
// the response.
const validateLogin = [
    check('credential')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a valid email or username.'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password.'),
    handleValidationErrors,
];

// Restore session user
// get session user route will return the session user as JSON under
// the key of user . If there is not a session, it will return a JSON
// with an empty object. To get the session user, connect the
// restoreUser middleware.
router.get(
    '/',
    restoreUser,
    (req, res) => {
        const { user } = req;
        if (user) {
            return res.json({
                user: user.toSafeObject()
            });
        } else return res.json({});
    }
);

// Log in
router.post(
    '/',
    validateLogin,
    asyncHandler(async (req, res, next) => {
        // Call the login static method from the User model.
        // If there is a user returned from the login static method,
        // then call setTokenCookie and return a JSON response with
        // the user information. If there is no user returned from the
        // login static method, then create a "Login failed" error and
        // invoke the next error-handling middleware with it.

        const { credential, password } = req.body;

        const user = await User.login({ credential, password });

        if (!user) {
            const err = new Error('Login failed');
            err.status = 401;
            err.title = 'Login failed';
            err.errors = ['The provided credentials were invalid.'];
            return next(err);
        }

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

// remove the token cookie from the response and return a JSON
// success message.
router.delete(
    '/',
    (_req, res) => {
        res.clearCookie('token');
        return res.json({ message: 'success' });
    }
);



module.exports = router;