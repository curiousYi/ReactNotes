const router = require('express').Router();
const noteBank = require('../noteBank');
const chalk = require('chalk');
const userBank = require('../userBank');


router.use('/', (req, res, next) =>
    {
        if(req.session.loggedIn === true){
            next()
        }
        else{
            res.send('Uh Uh Uh you didnt say the magic word');
        }
    })

router.post('/', (req, res) =>{
    //create a user account

    let userID = userBank.generateID(req.body.firstName, req.body.lastName);

    if(userBank.store[userID]){
        let user = userBank.store[userID]
        let newNoteByTime = {
            firstName: user.firstName,
            lastName: user.lastName,
            note: req.body.newNote,
            imageUrl: user.imageUrl
        }
        userBank.notesByTime.push(newNoteByTime);
        userBank.store[userID].notes.push(req.body.newNote);
        req.session.notesByTime = userBank.notesByTime;
        console.log(chalk.green('examine thingss '), req.session);
        res.send(req.session); //sending back the cookie
    }
    else{
        res.sendStatus(401);
    }
})

router.get('/', (req,res) => {
    //check if they're logged in
    res.send('you hit the tweet get route')
})

router.delete('/', (req, res) =>{
    //delete user
    //delete associated tweets
    res.send('you hit the tweet delete route')

})



router.put('/', (req, res) =>{
    //delete user
    //delete associated tweets
    res.send('you hit the tweet delete route')

})
module.exports = router;
