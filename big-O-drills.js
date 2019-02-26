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

