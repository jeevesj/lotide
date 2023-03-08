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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} == ${array2}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} != ${array2}`);
  } 
};

const middle = function(array) {
  newArray = [];
  if(array.length > 2) {  
    if (array.length % 2 != 0) {
      let number = Math.ceil((array.length / 2));
      newArray.push(array[number]);
    } else if (array.length % 2 == 0) {
      let number = Math.floor((array.length / 2));
      newArray.push(array[number], array[number + 1]);
    }
  }
  return newArray;
};

//console.log(middle([1]));


