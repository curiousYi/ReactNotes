const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const notesRouter = require('./notes');

router.use('/login', loginRouter);

router.use('/notes', notesRouter);


module.exports = router;
