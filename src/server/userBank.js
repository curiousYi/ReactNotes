//using this to generate unique string
const sha1 = require('sha1');
const fakeData = require('./fakeData');

const userBank = {
    store: {},
    generateID: (firstName, lastName) => {return sha1(firstName +lastName)}

};

//generate random users
for(var i = 0; i < 5; i++){
    let dummyUser = {
        firstName: fakeData.getFirstName(),
        lastName: fakeData.getLastName(),
        imageUrl: fakeData.getImageUrl(),
        age: fakeData.getFakeAge(),
        address: fakeData.getFakeAddress(),
        tweets: []
    }

    for(var j = 0; j < 5; j++){
        dummyUser.tweets.push(fakeData.getFakeTweet());
    }

    let uniqId = userBank.generateID(dummyUser.firstName+dummyUser.lastName);

    userBank.store[uniqId] = dummyUser;
}

module.exports = userBank
