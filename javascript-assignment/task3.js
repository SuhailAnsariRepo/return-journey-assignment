function findCommonElements(arr1, arr2) {
  const map = {};
  const commonElements = [];
  for(let i=0; i<arr1.length; i++) {
    const num = arr1[i];
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  for(let i=0; i<arr2.length; i++) {
    const num = arr2[i];
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  for (num in map) {
    if (map[num] == 2) {
      commonElements.push(num);
    }
  }
  return commonElements;
}

console.log(findCommonElements([1,2,3], [2,3,4])); // [ '2', '3' ]
