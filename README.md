# React Notes

A Simple CRUD App written in that contains a front-end and back-end powered by
React and Express.

## Major To-Dos
* Set-up Redux
* Set-up CSS plugins for webpack + other features like code-splitting. Put Materialize in separate CSS file.
* Hook up a database using Sequelize+Postgres
* Add authentication
* Use https
* Use sockets to make it more real-time?

### Minor To-Dos
* Correct the references in the index html file to refer to server
* Modify Routes to hook up with our "fake session storage "
* Add validation to the server
* Add error handling to the server
* Modify the server posting of resources so that things like Mary === mary and aren't unique
* Use proptypes to do basic validation on the front end
* Use helmet or something like that to sanitize our input fields?
* Figure out if there's better way of storing session information in the browser than the way I am currently doing it
* enable source maps  so easier to debug
* clearly separate my production and development cycles e.g. adding loaders to strip comments uglify code etc
* figure out how my axios hack resolved this line 56 index.js client
* Be able to PUT/Modify existing posts
* Generalize the handleChange method in src/client/components/index.js generalize it so that it can handle an event from editting existing resources and posting a new note
* Need to be able to delete the users and modify or whatever since we have the routes for those or whatever
* Handle the issue where if there's a collision that they have to use a different name or username

#### Installation
Git clone the repo then run the following

```sh
$ npm install
$ webpack
```

Go to LocalHost:3000
