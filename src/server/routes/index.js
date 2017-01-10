const express = require('express');
const router = express.Router();
const loginRouter = require('./login');
const tweetsRouter = require('./tweets');

router.use('/login', loginRouter);

router.use('/tweets', tweetsRouter);

// router.get('/users/:name',function(req, res){
//     var name = req.params.name;
//     var list = tweetBank.find( {name:name})
//     res.render('index', {tweets: list});
// })

// router.get('/tweets/:id',function(req, res){
//     var id = req.params.id;
//     var list = tweetBank.find( {id:id})
//     console.log('heres the list', list);
//     res.render('index', {tweets: list});
// })

// router.post('/tweets', function(req, res) {
//   var name = req.body.name;
//   var text = req.body.text;
//   tweetBank.add(name, text);
//   io.sockets.emit('newTweet', {name: name , content: text})
//   res.redirect('/');
// });

module.exports = router;
