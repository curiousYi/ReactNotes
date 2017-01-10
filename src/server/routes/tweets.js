const router = require('express').Router();
const tweetBank = require('../tweetBank');
const chalk = require('chalk');


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
    res.send('you hit the tweet post route')

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
