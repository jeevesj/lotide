const assertEqual = function(actual, expected) {
  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(something) {
  let newSentence = something.replace(/ /g,'');
  let letterCount = {};
  for (let i = 0; i < newSentence.length; i++) {
    let letterKey = newSentence[i];
    if (!letterCount[letterKey]) {
      letterCount[letterKey] = 1;
    } else {
      letterCount[letterKey]++;
    }
  }
  return letterCount;

};
 
module.exports = countLetters;
// console.log(countLetters("LHL")) // expected { L: 2, H: 1 }
// console.log(countLetters("lighthouse in the house"))