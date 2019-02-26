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