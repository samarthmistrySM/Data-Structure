const { log } = require("console");

function forLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function forOf(arr){
  for(let ele of arr){
    console.log(ele)
  }
}

function forIn(arr){
  for(let idx in arr){
    console.log(arr[idx])
  }
}

function forEach(arr) {
  arr.forEach((ele, index) => {
    console.log(`index ${index} : value ${ele}`);
  });
}

function spreadOp(arr){
  return [...arr];
}

function doubleArr(arr) {
  log(arr.map((ele) => ele * 2));
}

function even(arr) {
  log(arr.filter((ele) => ele % 2 == 0));
}

function sum(arr) {
  log(arr.reduce((sum, curr) => (sum += curr), 5));
}

function whileLoop(arr) {
  let i = 0;
  let count
  while (i < arr.length) {
    console.log(arr[i]);
    i++;
  }
}

function doWhileLoop() {
  let count = 0;
  do {
    log(count);
    count++;
  } while (count < 5);
}

module.exports = {
  forLoop,
  forOf,
  forIn,
  forEach,
  doubleArr,
  even,
  spreadOp,
  sum,
  whileLoop,
  doWhileLoop,
};