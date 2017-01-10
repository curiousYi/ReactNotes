const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const tweetsRouter = require('./tweets');

router.use('/login', loginRouter);

router.use('/tweets', tweetsRouter);


module.exports = router;
