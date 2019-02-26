// Even Or Odd
function isEven(value){
  if (value % 2 == 0){
    return true;
  }
  else
    return false;
}

// The above function is O(1) because, You only have 1 operation for every
// 1 input.

// =====================================================

// Are you here?
function areYouHere(arr1, arr2) {
  for (let i=0; i<arr1.length; i++) {
    const el1 = arr1[i];
    // this for loop is nested in the first for loop
    for (let j=0; j<arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//  O(n^2) -- This is a Polynomial Time complexity, or to be more specific its a 
// Quadratic time complecity, because it contains a nested loop. The amout of 
// nested loops is going to be the power that you raise n to to figure out the 
// amount of operations that will be done in the algo. 

// =====================================================


// Doubler
function doubleArrayValues(array) {
  for (let i=0; i<array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// O(n) -- This is a Linear Time complexity, because the run time is directly proportional to the size of the input.

//====================================================

// Naive Search
function naiveSearch(array, item) {
  for (let i=0; i<array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}


// O(n) -- This is also a Linear Time complexity, again, because the rune time is proportional to the length of the input.

// =====================================================

// Creating pairs:
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++) { // <=== We have a nested for loop here
      console.log(arr[i] + ', ' +  arr[j] );
    }
  }
}

// O(n^2) -- This function is a Quadratic Time Complexity because it contains a nested loop,
// So for the total number of inputs it will take the (input^2) operations to run this func

// =====================================================


// Computing fibonaccis
function generateFib(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    // we're adding the first item
    // to the result list, append the
    // number 0 to results
    if (i === 1) {
      result.push(0);
    }
    // ...and if it's the second item
    // append 1
    else if (i == 2) {
      result.push(1);
    }

    // otherwise, sum the two previous result items, and append that value to results.
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  // once the for loop finishes
  // we return `result`.
  return result;
}

// The computing fibonaccis function is a linear time complexity because the number of operations
// to complete this function is directly propational to the number of fibbinaccis we want which,
// is our input to the function so basically input === operations here.


// =====================================================

// An Efficient Search
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

// This is O(log(n)) -- It's a Logarithm time complexity because it splits the data set in half with each iteration.

// =====================================================


// Random Element
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// This is a O(1) --  Constant time complexity because regardless of the size of the array, it will only perform one operation return one number.


// =====================================================

// Is it prime?
function isPrime(n) {
  // if n is less than 2 or a decimal, it's not prime
  if (n < 2 || n % 1 != 0) {
    return false;
  }
  // otherwise, check if `n` is divisible by any integer
  // between 2 and n.
  for (let i = 2; i < n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}

// This is O(n) -- This function is linear time complexity bacuase It will have the amount of 
// operations that n is. For ex. if n is 10 it will have 10 operations ..etc.