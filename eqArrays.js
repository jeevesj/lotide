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

/** 
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
*/