const assertEqual = function(actual, expected) {
  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

//Instruction
//Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.

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

const shirt1 = { color: "red", size: "medium" };
const shirt2 = { size: "medium", color: "red" };
const shirt3 = { size: "medium", color: "red", sleeveLength: "long" };
const shirt4 = { colors: ["red", "blue"], size: "medium" };
const shirt5 = { size: "medium", colors: ["red", "blue"] };
const shirt6 = { size: "medium", colors: ["green", "blue"], sleeveLength: "long" }; // 
const shirt7 = { size: "medium", colors: ["red", "blue"] }; // same as shirt 4 

assertEqual(eqObjects(shirt1 , shirt2), true); // => true
assertEqual(eqObjects(shirt1, shirt3), false); // => false
assertEqual(eqObjects(shirt4  , shirt5), true); // => true
assertEqual(eqObjects(shirt3  , shirt6), true); // => true **shirt3 and shirt6 have different values for colors?? 
assertEqual(eqObjects(shirt1  , shirt7), true); // => true