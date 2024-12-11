const { log } = require("console");
const {
  forLoop,
  forOf,
  forIn,
  forEach,
  doubleArr,
  even,
  sum,
  whileLoop,
  doWhileLoop,
  spreadOp,
} = require("./ArrayTriversal");

const {
  insertOneLast,
  insertOneFirst,
  insertManyLast,
  insertManyFirst,
  deleteOneLast,
  deleteOneFirst,
  findIndexOfEle,
  deleteFromTo,
  findAndReturnOne,
  findAndReturnMany,
  isFound,
  checkEveryEle,
  bubbleSort,
  arrMethodSort,
} = require("./Operations");

const arr = [1, 2, 3, 4, 5, 6, 7, 7];
const arr2 = [7, 7];
const unSortedArray = [3,2,4,1,7];

// ------TRIVERSAL

// forLoop(arr);
// forOf(arr);
// forIn(arr);
// forEach(arr)
// doubleArr(arr)
// even(arr)
// sum(arr)
// whileLoop(arr)
// doWhileLoop()

// ------OPERATION

// **Insert

// log(insertOneLast(arr,8))
// log(insertOneFirst(arr,0))
// log(insertManyLast(arr,8,9,10))
// log(insertManyFirst(arr,-2,-1,0));

// **Delete

// log(deleteOneFirst(arr))
// log(deleteOneLast(arr))
// log(deleteFromTo(arr,4,4))

// **Searching

// log(findIndexOfEle(arr,7))
// log(findAndReturnOne(arr,3))
// log(findAndReturnMany(arr,7))
// log(isFound(arr,3))
// log(checkEveryEle(arr2,7))

//**Sorting
// log(bubbleSort(unSortedArray))
// log(arrMethodSort(unSortedArray))