// This file will hold the resources for the route paths
// beginning with /api/users
const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const router = express.Router();

const validateSignup = [
    check('firstname')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid firstname.'),
    check('lastname')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a valid firstname.'),
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// In the route handler, call the signup static method on the User
// model. If the user is successfully created, then call setTokenCookie
// and return a JSON response with the user information. If the creation
// of the user is unsuccessful, then a Sequelize Validation error will
// be passed onto the next error-handling middleware.
router.post(
    '/',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { firstname, lastname, email, password, username } = req.body;
        const user = await User.signup({ firstname, lastname, email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

module.exports = router;