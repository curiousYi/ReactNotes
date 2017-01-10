const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const chalk = require('chalk');


module.exports = function(app){

    //Simple Session based storage on server-side/Don't use this for production
    app.use(session(
        {
            secret: 'sssshhhhhh',
            resave: false,
            saveUnitialized: false
        }
    ));

    app.use(function (req, res, next) {
      console.log('New Session', req.session);
      next();
    });
    const publicFilesPath = path.resolve('./build');
    console.log(publicFilesPath)
    // express_static for statically serving up files
    app.use('/build', express.static(publicFilesPath));

    // Parse our POST and PUT bodies.
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(logger('dev'));
};
