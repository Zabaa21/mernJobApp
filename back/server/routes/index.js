const express = require('express');
const router = express.Router()
const links = require('./links.js');
// import all routers;

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);

router.use("/links", links);

module.exports = router;