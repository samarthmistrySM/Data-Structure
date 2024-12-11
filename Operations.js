//INSERT
function insertOneLast(arr,ele){
  arr.push(ele);
  return arr;
}

function insertOneFirst(arr,ele){
  arr.unshift(ele);
  return arr;
}

function insertManyLast(arr,...elems){
  return arr.concat([...elems]);
}

function insertManyFirst(arr,...elems){
  const result = [...elems]
  return result.concat(arr);
}


//DELETE
function deleteOneFirst(arr){
  arr.shift();
  return arr;
}

function deleteOneLast(arr){
  arr.pop();
  return arr;
}

function deleteFromTo(arr,from,to){
  return arr.slice(0,from).concat(arr.slice(to+1))
}


//SEARCH
function findIndexOfEle(arr,ele){
  return arr.indexOf(ele)
}

function findAndReturnOne(arr,search){
  const elem = arr.find(ele=> ele===search)
  return elem;
}

function findAndReturnMany(arr,search){
  const elem = arr.filter(ele=> ele===search)
  return elem;
}

function isFound(arr,search){
  // return arr.includes(search);
  return arr.some(ele=>ele===search)
}

function checkEveryEle(arr,search){
  return arr.every(ele=>ele===search)
}

module.exports = {
  insertOneLast,
  insertOneFirst,
  insertManyLast,
  insertManyFirst,
  deleteOneFirst,
  deleteOneLast,
  deleteFromTo,
  findIndexOfEle,
  findAndReturnOne,
  findAndReturnMany,
  isFound,
  checkEveryEle,
}