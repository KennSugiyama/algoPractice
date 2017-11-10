/*
Write a function that outputs the nth Fibonnaci number. A number in this sequence is found by adding up the two numbers before it.
Fibonnaci's sequence:
input    0 1 2 3 4 5 6  7  8  9 ...
output   0 1 1 2 3 5 8 13 21 34 ...
What is the time complexity? Can you think of optimizing your solution? (Hint: look up dynamic programming)
*/



//Vanilla
let fib = function(num) {
  // create and array [0, 1]
  let fibArray = [1,1]
  // IF num is less than three, return array[i]
  if (num <= 2) return fibArray[num - 1]
  // create counter var = 2
  let counter = 2
  //until Loop count = num
  while (counter < num) {
    // push into array sum of previous two array[i]
    fibArray.push(fibArray[counter - 1] + fibArray[counter - 2])
    counter++
  }
  // Return last value in index
  return fibArray[fibArray.length - 1]
}



// 1 1 2 3 5 8 13

// console.log(fib(1)) //0
// console.log(fib(2)) //1
// console.log(fib(3)) //1
// console.log(fib(4)) //2
// console.log(fib(5)) //5
// console.log(fib(13))//233
// console.log(fib(17)) //1597

//Recursive
let fibRecursive = function (num, fibArray = [1,1]) {
  if (num <= 2) {
    return fibArray[num - 1]
  } else {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
    fibRecursive(num - 1, fibArray)
  }
  return fibArray[fibArray.length - 1]
}


// 0 1 1 2

//console.log(fibRecursive(1)) //0
// console.log(fibRecursive(2)) //1
// console.log(fibRecursive(3)) //1
// console.log(fibRecursive(4)) //2
//console.log(fibRecursive(5)) //3
// console.log(fibRecursive(13))//233
//console.log(fibRecursive(17)) //1597