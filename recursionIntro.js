
//Credit: https://github.com/kuychaco/algoClass/blob/master/recursion/recursionIntro.js

//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

let countDown = function(n) {
  while(n >= 0) {
    console.log (n--);
  }
}
countDown(10)

//2. Next, try looping just like above except using recursion

let countDownRecursion = function(n) {
  if (n === 0) {
    console.log(n)
    return n;
  }
  console.log(n);
  countDownRecursion(n-1);
}


//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

let exponent = function(base, expo){
  while(expo > 0) {
    var result = (result || 1) * base;
    expo = expo - 1;
  }
  return result;
}

console.log(exponent(2,10))

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

let exponent = function(base, expo){ //2, 10
  if (expo === 1) return base;
  return base * exponent(base, expo - 1);
}

console.log(exponent(2,10)) //1024

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//5.1
let multiplier = function(arr, num) {
  let result = [];
  while(arr.length > 0){
    result.push(arr.shift() * num)
  }
  return result
}

console.log(multiplier([1,2,3,4], 10))

//5.2
let recursiveMultiplier = function(arr, num, result = []){
  if (arr.length === 0) {
    return result
  } else {
    result.push(arr.shift() * num)
    return recursiveMultiplier(arr, num, result)
  }
}

console.log(recursiveMultiplier([1,2,3,4], 10))



//5.3
let recursiveMultiplier2 = function(arr, num){
  if (arr.length === 0) {
    return arr;
  } else {
    let last = arr.pop();
    recursiveMultiplier2(arr, num)
    arr.push(last * num)
  }
  return arr
}


console.log(recursiveMultiplier2([1,2,3,4], 10))

//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

//6.1
let reverse = function(arr){
  var result = [];
  while(arr.length > 0) {
    result.push(arr.pop())
  }
  return result
}

console.log(reverse([1,2,3,4,5]))


//6.2
let recursiveReverse = function(arr, result = []) {
  if(arr.length === 0) {
    return result
  } else {
    result.push(arr.pop())
    return recursiveReverse(arr,result)
  }
}

//console.log(recursiveReverse([1,2,3,4,5]))

