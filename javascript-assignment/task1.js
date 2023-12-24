function removeDuplicates(arr) {
  const map = {};
  const result = [];
  for (let i=0; i<arr.length; i++) {
    const num = arr[i];
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }

    if (map[num] == 1) {
      result.push(num);
    }
  }
  return result;
}

console.log(removeDuplicates([1,2,3,4,5,6])); // [ 1, 2, 3, 4, 5, 6 ]
console.log(removeDuplicates([1,2,3,4,2,4])); // [ 1, 2, 3, 4 ]
