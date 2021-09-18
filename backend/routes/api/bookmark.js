const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { Bookmark, Event, User } = require('../../db/models');


const router = express.Router();

router.get('/', restoreUser, asyncHandler(async (req, res, next) => {

    const userBookmarks = await Bookmark.findAll({
        where: {
            userId: req.user.id,
        }
    })

    // console.log(userBookmarks)
    res.json(
        userBookmarks
    )
}))

router.get('/bookmarkedEvents', restoreUser, asyncHandler(async (req, res, next) => {


    const bookmarkedEvents = await User.findAll({
        include: {
            model: Event,
            where: {
                hostId: req.user.id
            }
        }
    })

    // console.log("bookedmarked Events ----->", bookmarkedEvents.Events)


    res.json({ bookmarkedEvents });
}))


router.post('/', restoreUser, asyncHandler(async (req, res, next) => {
    const { eventId, userId } = req.body;
    const bookmark = await Bookmark.create({ eventId, userId });
    res.json({
        bookmark,
    })
}));

router.delete('/', restoreUser, asyncHandler(async (req, res, next) => {

    const { id, userId } = req.body
    console.log("request body ID and user Id --->", id, userId)
    // const tikId = parseInt(payload)

    console.log("id when it hits backend", id)

    const bookmark = await Bookmark.findAll(
        {

            where: { eventId: id, userId: userId }
        }
    )
    console.log("find bookmark ----->", bookmark)


    const deletedBookmark = await Bookmark.destroy(
        {
            where: { eventId: id, userId: userId },
        }
    )
    console.log("Deleted Ticket ---->", deletedBookmark)

    res.json({ deletedBookmark })
}));




module.exports = router;