const router = require('express').Router();
const tweetBank = require('../tweetBank');
const chalk = require('chalk');


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
