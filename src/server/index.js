const express = require('express');
const app = express();
const chalk = require('chalk');
const configMiddle = require('./configure');
const router = require('./routes');

//configuration middleware
configMiddle(app);

//routing middleware
app.use(router);

app.get('/', (req, res) =>{
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log(chalk.green('Server Started Listening on port 3000!'))
});
