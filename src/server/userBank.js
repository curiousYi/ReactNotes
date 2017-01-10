//using this to generate unique string
const sha1 = require('sha1');
const fakeData = require('./fakeData');

const userBank = {};

//generate random users
for(var i = 0; i < 2; i++){
    let dummyUser = {
        firstName: fakeData.getFirstName(),
        lastName: fakeData.getLastName(),
        age: fakeData.getFakeAge(),
        address: fakeData.getFakeAddress(),
        tweets: []
    }

    for(var j = 0; j < 5; j++){
        dummyUser.tweets.push(fakeData.getFakeTweet());
    }

    let uniqId = sha1(dummyUser.firstName+dummyUser.lastName)

    userBank[uniqId] = dummyUser;
}

module.exports = userBank

//assign associated tweets


// const _ = require('lodash');
// const Faker = require('faker');

// const tweetsData ={};

// const add = (name, content) =>  {
//   data.push({ name: name, content: content, id: id.toString()});
//   id++;
// }

// const list = () => {
//   return _.cloneDeep(data);
// }

// const find = (properties) => {
//   return _.cloneDeep(_.filter(data, properties));
// }



// module.exports = { add: add, list: list, find: find };

// for (var i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }
