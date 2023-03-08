function without(source, itemsToRemove) {
  let newSource = [];
  for(let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        newSource.push(source[i]);
      }
    }
  }
  return newSource;
}

console.log(without(["1", "2", "3"], [1, 2, "3"]));