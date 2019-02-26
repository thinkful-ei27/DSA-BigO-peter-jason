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

// Exercise 5 - String Splitter
function split(str, sep) {
  var idx = str.indexOf(sep);
  if (idx == -1) 
    return [str];
  //you don't have to return an array, you can return a string as an array of 
  //character 
  //return str;
  return [str.slice(0, idx)].concat(split(str.slice(idx + sep.length), sep));
//all these are valid syntax
//return (str.slice(0,idx) + (split(str.slice(idx + sep.length), sep)))
//return str.slice(0,idx).concat(split(str.slice(idx + sep.length), sep))
}

// This algorithm is O(n) -- Linear time complexity because the function goes through the string one character at a time only once, in direct proportion to the length of the input.


// Exercise 6 - Binary Representation
function convertToBinary(num){
  if(num>0){
    let binary = Math.floor(num%2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return (convertToBinary(Math.floor(num/2))+ binary);
  }else{
    return ''; //base case - at some point the divisions will lead to 0
  }
}

// This algorithm is most likely O(log(n)) -- Logarithm time complexity because the number of operations increases minimally compared to the input, and the problem size is cut in half with each round.

// ======================================================================

// Exercise 7 - Factorial
function factorial(n) {  
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

// This algorithm is O(n) -- Linear time complexity because this function is going to run however 
// many times `n` is 

// ======================================================================

// Exercise 8 - Fibonacci

function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }	
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);	
}

// We think this algorithm is O(n ^ 2) -- This is polynomial time complexity. As `n` grows larger the number of operations
// grows larger by it's square. We believe this is becuase `fibonacci` calls itself twice everytime it gets called.
// ======================================================================

// Exercise 9 -- Anagram
function anagrams(prefix, str){
  if(str.length <= 1){
      console.log(`The anagram is ${prefix}${str}`);
  } else {
      for(let i=0; i<str.length; i++){
          let currentLetter = str.substring(i, i+1); 
          let previousLetters = str.substring(0,i);
          let afterLetters = str.substring(i+1);
          anagrams(prefix+currentLetter, previousLetters+afterLetters);
      }
  }
}

//This algorithm is O(n!) -- Factorial time complexity because for 'n' input, the function calls itself n * (n-1) * (n-2) ... times.

// ========================================================


// Exercise 10 -- Animal Heirarchy
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}
// This algorithm is O(n^k) -- Polynomial time complexity, because the function is called through four nested loops.

// ==========================================================


