// Exercise 1 -- Counting Sheep
function countSheepLoop(num){
  for(let i=num; i>0; i--){
    console.log(`counting sheeps ${i}`);
  }
}
countSheepLoop(10);

//This algorithm is O(n) -- Linear time complexity because it has run times directly proportional to the size of the input

// ===========================================

// Exercise 2 -- Double Array
function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10,4,5,2,1];
console.log(double_all(arr));

// This algorithm is O(n) -- Linear Time complexity because it runs through each index in the array once, so the run times in direct proportion to the input

// =================================================

//Exercise 3: Take a string as input, reverse the string, and return the new
function reverse_tail(str) {
  var accumulator = '';
  while (str !== '') {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

// This algorithm is O(n) -- Linear time-complexity because there will be as many operations as there are elements in the string input

// =================================================

//Exercise 4: Calculates the nth triangular number.
function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

// This algorithm is O(n) -- Linear time-complexity because the for loop is going to run for as long as n is big and just sum up
// the numbers and return that. Input directly proportional to time

// =================================================
