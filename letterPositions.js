
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} == ${array2}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} != ${array2}`);
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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== " ") {
      if (!results[char]) {
        results[char] = [];
      }
      results[char].push(i);
    }

  } 
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("lighthouse in the house"));