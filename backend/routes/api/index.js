const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const eventsRouter = require('./events.js');
const venueRouter = require('./venue.js');
const bookmarksRouter = require('./bookmark.js');

// GET /api/set-token-cookie
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/events', eventsRouter);

router.use('/venue', venueRouter);

router.use('/bookmarks', bookmarksRouter);
//example fetch for this route
//fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
//     },
//     body: JSON.stringify({ hello: 'world' })
// }).then(res => res.json()).then(data => console.log(data));
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

// //test set token cookie function
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// // GET /api/restore-user
// //test restoreUser middleware
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// // GET /api/require-auth
// //testing requireAuth middleware
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );





module.exports = router;