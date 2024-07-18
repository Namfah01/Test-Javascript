function customSort(arr) {

const oddNumbers = [];
const evenNumbers = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddNumbers.push(arr[i]);
    } else {
      evenNumbers.push(arr[i]);
    }
  }

  oddNumbers.sort((a, b) => a - b);
  evenNumbers.sort((a, b) => a - b);

  return [...oddNumbers, ...evenNumbers];
}


const arr = [1, 2, 3, 4, 5, 6, 7,8]
console.log(customSort(arr))