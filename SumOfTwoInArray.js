function sumOfTwoInArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwoInArray([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwoInArray([12, 17, 14, 11, 19, 8], 20));

