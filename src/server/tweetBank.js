const _ = require('lodash');
const Faker = require('faker');

var data =[];
var id = 1; //need to make id a string

const add = (name, content) =>  {
  data.push({ name: name, content: content, id: id.toString()});
  id++;
}

const list = () => {
  return _.cloneDeep(data);
}

const find = (properties) => {
  return _.cloneDeep(_.filter(data, properties));
}

const getFakeAddress = () => {
  return Faker.address.streetAddress();
}

const getFakeName = () =>{
  return Faker.name.firstName() + " " + Faker.name.lastName();
};

const getFakeTweet = () => {
  return Faker.lorem.sentence();
};
//address
const getFakeAge = () =>{

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return getRandomInt(1,120);
}

const randArrayEl = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};


module.exports = { add: add, list: list, find: find };

// for (var i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }
