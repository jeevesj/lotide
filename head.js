const assertEqual = require('./assertEqual');

const head = function(array) {
  let firstItem = array[0];
  return firstItem;
}

module.exports = head;

//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");