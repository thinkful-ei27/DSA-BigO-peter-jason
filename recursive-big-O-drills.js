// Counting Sheep
function countSheep(num){
  //stopping condition of base case
  if(num === 0){
    console.log('All sheep jumped over the fence');
  } 
  //this is the recursive case
  //this will be executed until it reaches base case
  else{
    console.log(`${num}: Another sheep jump over the fence`);
    countSheep(num-1);
  }
}

//This algorithm is O(n) -- a Linear time complexity, because it performs operations a number of times directly proportional to the size of the input.


// Array Double
function double_all(arr) {
  if (!arr.length) {
    return [];
  }
  return [arr[0] * 2, ...double_all(arr.slice(1))];
}

// This algorithm is O(n) -- a Linear time complexity because it runs a number of times directly proportional to the size of the input.

// ======================================================================

// Exercise 3 - Reverse String 
function reverseString(str) {
  if (str.length < 2) {
    return str;
  }
  return reverseString(str.slice(1)) + str[0];
}

// This algorithm is O(n) -- a Linear time-complexity because it will run how ever many times
// there are characters in the string your are inputting to the funciton.

// ======================================================================

// Exercise 4 - Triangular Number

function triangle(n) {
  if (n < 2) 
    return n;
  return n + triangle(n - 1);
}

// The algorithm O(n) -- a linear time complexity becuase it will run the amount of times
// that `n` is. For ex) if n is 5 we will run the function 5 times -> 5 + 4 + 3 + 2 + 1 = 15

// ======================================================================
