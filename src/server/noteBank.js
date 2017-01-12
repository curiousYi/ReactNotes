const _ = require('lodash');
const Faker = require('faker');

const notesData ={};

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



module.exports = { add: add, list: list, find: find };

// for (var i = 0; i < 10; i++) {
//   module.exports.add( getFakeName(), getFakeTweet() );
// }
