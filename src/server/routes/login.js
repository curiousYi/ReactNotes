const router = require('express').Router();
const userBank = require('../userBank');
const chalk = require('chalk');


router.post('/', (req, res) =>{
    //create a user account
    res.send('you hit the user post route')

})

router.get('/', (req,res) => {
    //check if they're logged in
    res.send('you hit the user get route')
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
