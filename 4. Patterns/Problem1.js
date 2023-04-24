/* Frequency Counter Pattern */

/*
Write a function called same, 
which accepts two arrays. The function 
should return true if every value in the 
array has it's corresponding value squared 
in the second array. 
The frequency of values must be the same. */

// My Solution

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let resultArray = arr1.map((item) => {
    let index = 0;
    let isSquareMatched = arr2.find((item2, idx) => {
      let isFound = item * item == item2 ? true : false;
      if (isFound) index = idx;
      return isFound;
    });
    arr2.splice(index, 1);
    return !!isSquareMatched;
  });
  return resultArray.includes(false) ? false : true;
}

// console.log("VALUE IS ", same([1, 2, 3, 2], [4, 4, 9, 1]));

// 🤫My Solution is working  o(n^2)

// Refactored Solution by some them

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log('frequencyCounter1',frequencyCounter1)
  console.log('frequencyCounter2',frequencyCounter2)

  // for (let key in frequencyCounter1) {

  //   if (!(key ** 2 in frequencyCounter2)) {
  //     return false;
  //   }
  //   if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
  //     return false;
  //   }
   
  //   console.log(frequencyCounter1, frequencyCounter2);
  // }

  return true
}

console.log("Result is IS ", same2([1, 5, 5], [1,25, 4]));
