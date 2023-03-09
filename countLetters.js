const assertEqual = function(actual, expected) {
  if (actual === expected) {

    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

function countLetters(something) {
  let count = 0;
  for (const letters of something) {
    count += 1;
  }
  return count;
};

console.log(countLetters("olympics"));