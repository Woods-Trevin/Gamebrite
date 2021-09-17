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





module.exports = router;