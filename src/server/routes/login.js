const router = require('express').Router();
const userBank = require('../userBank');
const chalk = require('chalk');
const fakeData = require('../fakeData');


router.post('/', (req, res) => {
    //create a user account

    //need to validate that the user name is unique
    //need to validate that the user name works
    //need to validate that the password is specific
    console.log(chalk.green('you hit this'));

    let userID = userBank.generateID(req.body.firstName, req.body.lastName);
    let userObj = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        imageUrl: fakeData.getImageUrl(), //make this a real image or whatever
        age: req.body.age,
        address: req.body.address
    }
    userBank.store[userID] = userObj;
    console.log(chalk.red('make sure this is right'), userObj);
    //TODO do not set this twice right? otherwise kind of pointless
    req.session.loggedIn = true;
    req.session.userID = userID;
    res.send(req.session); //sending back the cookie
})

router.get('/', (req, res)=> {
    console.log(chalk.green('hey theeeerrre \n'), req.session);

    let requestUserID = req.session.userID
    console.log('heres what were entering ', requestUserID)

    console.log(userBank.store)
    console.log('heres what were getting ', userBank.store[requestUserID]);

    if(userBank.store[requestUserID]){
        req.session.loggedIn = true;
        req.session.notes = userBank.notesByTime;
        res.send(req.session); //sending back the cookie
    }

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
