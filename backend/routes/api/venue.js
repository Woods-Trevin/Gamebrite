const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Venue } = require('../../db/models');

// let eventId;
// let venueId;
// console.log("(outside routes)event ID: ", eventId)
// console.log("(outside routes)venue ID: ", venueId)

const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req, res, next) => {
    const { id } = req.body
    const venue = await Venue.findAll({
        where: { id }
    })
    res.json(venue)
}))

router.put('/', restoreUser, asyncHandler(async (req, res, next) => {

}))


router.post('/', restoreUser, asyncHandler(async (req, res, next) => {
    const {
        name,
        address,
        city,
        state,
        zipcode
    } = req.body

    try {
        const venue = await Venue.create({
            name,
            address,
            city,
            state,
            zipcode
        })

        return res.json({
            venue
        });
    } catch (err) {
        // console.log(err);
    }

}));

module.exports = router;