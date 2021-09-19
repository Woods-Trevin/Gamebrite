const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Event, Ticket, Bookmark } = require('../../db/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req, res, next) => {

    const event = await Event.findAll({
        where: {
            hostId: req.user.id
        },
    })

    res.json({ event });
}))



router.get('/allEvents', restoreUser, asyncHandler(async (req, res, next) => {
    const events = await Event.findAll();

    // console.log(req.user.id)
    // console.log("(inside GET route)event ID: ", eventId)
    // console.log("(inside GET route)venue ID: ", venueId)
    res.json(events);
}))

router.get('/bookmarkedEvents', restoreUser, asyncHandler(async (req, res, next) => {

    const bookmarkedEvents = await Bookmark.findAll({
        where: {
            userId: req.user.id
        },

    })


    const eventsIds = []
    bookmarkedEvents.forEach(event => eventsIds.push(event.dataValues.eventId))
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
        imageURL,
        title,
        game,
        organizer,
        description,
        gameType,
        startDate,
        endDate,
        ticketsCapacity,
        price,
        startTime,
        endTime,
        onlineEventUrl,
        categoryId,
        hostId,
        venueId,
    } = req.body

    try {
        const event = await Event.create({
            imageURL,
            title,
            game,
            organizer,
            description,
            gameType,
            startDate,
            endDate,
            ticketsCapacity,
            price,
            startTime,
            endTime,
            onlineEventUrl,
            categoryId,
            hostId,
            venueId,
        })

        return res.json({
            event
        })

    } catch (e) {
        // console.log(e);
    }
}));

router.put('/', restoreUser, asyncHandler(async (req, res, next) => {
    const event = await Event.findAll({
        hostId: req.user.id
    });

    const { ID } = req.body;
    const eventId = ID;
    delete req.body.ID;

    try {
        const updatedEvent = await Event.update(req.body,
            {
                where: { id: ID }
            }
        )
        return res.json({ updatedEvent });
    } catch (err) {
        // console.log(err);
    }
}));

router.delete('/:id', restoreUser, asyncHandler(async (req, res, next) => {

    // const { id } = req.body

    await Ticket.destroy(
        {
            where: { eventId: req.params.id }
        }
    )

    await Bookmark.destroy(
        {
            where: { eventId: req.params.id }
        }
    )
    const removedEvent = await Event.destroy(
        {
            where: { id: req.params.id }
        }
    )
    res.json(removedEvent)
}));





module.exports = router;