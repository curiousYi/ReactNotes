//using this to generate unique string
const sha1 = require('sha1');
const fakeData = require('./fakeData');

const userBank = {
    store: {},
    generateID: (firstName, lastName) => {return sha1(firstName +lastName)},
    notesByTime: []
};

//generate random users
for(var i = 0; i < 5; i++){
    let dummyUser = {
        firstName: fakeData.getFirstName(),
        lastName: fakeData.getLastName(),
        imageUrl: fakeData.getImageUrl(),
        age: fakeData.getFakeAge(),
        address: fakeData.getFakeAddress(),
        notes: []
    }

    for(var j = 0; j < 5; j++){
        let fakeNote = fakeData.getFakeNote()
        dummyUser.notes.push(fakeNote);
        let newObj = {firstName: dummyUser.firstName, lastName: dummyUser.lastName, note: fakeNote}
        userBank.notesByTime.push(newObj);
    }

    let uniqId = userBank.generateID(dummyUser.firstName+dummyUser.lastName);

    userBank.store[uniqId] = dummyUser;
}

module.exports = userBank
