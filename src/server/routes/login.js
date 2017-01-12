const router = require('express').Router();
const userBank = require('../userBank');
const chalk = require('chalk');


router.post('/', (req, res) => {
    //create a user account

    //need to validate that the user name is unique
    //need to validate that the user name works
    //need to validate that the password is specific
    console.log(chalk.green('you hit this'));

    let userID = userBank.generateID(req.body.firstName, req.body.lastName);
    //TODO do not set this twice right? otherwise kind of pointless
    req.session.loggedIn = true;
    req.session.userID = userID;
    res.send(req.session); //sending back the cookie
})

router.get('/', (req, res)=> {
    let userID = userBank.generateID(req.body.firstName, req.body.lastName);

    req.session.loggedIn = true;
    req.session.userID = userID;
    res.send(req.session); //sending back the cookie
})

router.delete('/', (req, res) =>{

    //delete user
    //delete associated tweets
    res.send('you hit the user delete route')

})

router.put('/', (req, res) =>{
    //delete user
    //delete associated tweets
    res.send('you hit the user delete route')

})
module.exports = router;
