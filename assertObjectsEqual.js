const { builtinModules } = require('module');

const eqArrays = function(array1, array2) {
  let result = true;
  if (array1.length === array2.length) {
    for(let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
};

const eqObjects = function(object1, object2) {
  const objKey1 = Object.keys(object1);
  const objKey2 = Object.keys(object2);

  if (objKey1.length !== objKey2.length) {
    return false;
  }

  for (let key of objKey1) {
    if (object1[key] !== object2[key]) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 

  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);