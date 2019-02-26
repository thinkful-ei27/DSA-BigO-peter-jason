// Counting Sheep
function countSheep(num){
  //stopping condition of base case
  if(num === 0){
      console.log(`All sheep jumped over the fence`);
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