function largestNumber(num) {
  return num.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
}

const num = [39, 21, 9, 70, 5]
console.log(largestNumber(num));

