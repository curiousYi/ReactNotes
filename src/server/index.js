const express = require('express');
const app = express();
const chalk = require('chalk');
const configMiddle = require('./configure');
const router = require('./routes');


// front end component
// const webpack = require('webpack');
// const config = require('../webpack.config.dev');
// const compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath
// }));

// app.use(require('webpack-hot-middleware')(compiler));


//configuration middleware
configMiddle(app);

//routing middleware
app.use(router);

app.get('/*', (req, res) =>{
    res.sendFile('index.html');
});

app.listen(3000, function(){
    console.log(chalk.green('Server Started Listening on port 3000!'))
});
