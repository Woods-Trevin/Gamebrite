const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Event, User, Bookmark, Ticket } = require('../../db/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const router = express.Router();

// router.get('/', restoreUser, asyncHandler(async (req, res, next) => {


// }))



router.get('/', restoreUser, asyncHandler(async (req, res, next) => {

    const ticketedEvents = await Ticket.findAll({
        where: {
            userId: req.user.id
        },

    })


    const eventsIds = []
    ticketedEvents.forEach(ticket => eventsIds.push(ticket.dataValues.eventId))
    // console.log(eventsIds)

    const events = await Event.findAll({
        where: {
            id: {
                [Op.in]: eventsIds
            },
        },
        raw: true
    })
    // console.log(events)

    // console.log(bookmarkedEvents)
    // console.log("bookedmarked Events ----->", bookmarkedEvents[0])



    res.json({ events });
}))



router.post('/', restoreUser, asyncHandler(async (req, res, next) => {
    const {
        eventId,
        userId,
    } = req.body
    // console.log(eventId, userId)


    const ticket = await Ticket.create({
        eventId,
        userId
    })

    return res.json({
        ticket
    })


}));

router.put('/', restoreUser, asyncHandler(async (req, res, next) => {

}));

router.delete('/', restoreUser, asyncHandler(async (req, res, next) => {
    // const { id } = req.params.id


    const { id, userId } = req.body
    console.log("request body ID and user Id --->", id, userId)
    // const tikId = parseInt(payload)

    console.log("id when it hits backend", id)

    const ticket = await Ticket.findAll(
        {

            where: { eventId: id, userId: userId }
        }
    )
    // console.log("find ticket ----->", ticket)


    const deletedTicket = await Ticket.destroy(
        {
            where: { eventId: id, userId: userId },
        }
    )
    console.log("Deleted Ticket ---->", deletedTicket)

    res.json({ deletedTicket })
}));





module.exports = router;