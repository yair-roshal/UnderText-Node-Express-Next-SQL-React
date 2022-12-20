const express = require('express'),
    router = express.Router(),
    wordsRoutes = require('./words.routes')

router.use('/', wordsRoutes)
// router.use('/words', wordsRoutes)

module.exports = router
