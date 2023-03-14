// const assertEqual = function(actual, expected) {
//   if (actual === expected) {

//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

function findKey(data, callback) {
  newKeys = Object.keys(data);
  newValues = Object.values(data);
  for (let i = 0; i < newKeys.length; i++) {
    if(callback(newValues[i])) {
      return newKeys[i];
    }
  }
};

module.exports = findKey;
// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"