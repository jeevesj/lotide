const assertEqual = function(actual, expected) {
  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function findKeyByValue(obj, value) {
  let objKey = Object.keys(obj);
  let objValue = Object.values(obj);
  let answer = undefined;

  for (let i = 0; i < objValue.length; i++) {
    if (objValue[i] === value) {
      answer = objKey[i];
      break;
    }
  }

  return answer;
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

module.exports = findKeyByValue;

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);