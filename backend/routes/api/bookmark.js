const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Bookmark } = require('../../db/models');


const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req, res, next) => {

}))


router.post('/', restoreUser, asyncHandler(async (req, res, next) => {

}));





module.exports = router;