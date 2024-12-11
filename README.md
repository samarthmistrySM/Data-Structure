# Array Operations and Traversal

This Repository demonstrates various array operations and traversal methods in JavaScript. The code is organized into two main modules: `ArrayTriversal` and `operations`.

## Modules

### ArrayTriversal

This module contains functions for traversing arrays using different looping constructs.

- `forLoop(arr)`: Traverse array using a `for` loop.
- `forOf(arr)`: Traverse array using a `for...of` loop.
- `forIn(arr)`: Traverse array using a `for...in` loop.
- `forEach(arr)`: Traverse array using the `forEach` method.
- `doubleArr(arr)`: Double each element in the array.
- `even(arr)`: Filter even numbers from the array.
- `sum(arr)`: Calculate the sum of all elements in the array.
- `whileLoop(arr)`: Traverse array using a `while` loop.
- `doWhileLoop(arr)`: Traverse array using a `do...while` loop.

### operations

This module contains functions for performing various operations on arrays such as insertion, deletion, and searching.

#### Insert

- `insertOneLast(arr, element)`: Insert one element at the end of the array.
- `insertOneFirst(arr, element)`: Insert one element at the beginning of the array.
- `insertManyLast(arr, ...elements)`: Insert multiple elements at the end of the array.
- `insertManyFirst(arr, ...elements)`: Insert multiple elements at the beginning of the array.

#### Delete

- `deleteOneFirst(arr)`: Delete one element from the beginning of the array.
- `deleteOneLast(arr)`: Delete one element from the end of the array.
- `deleteFromTo(arr, start, count)`: Delete elements from a specified range in the array.

#### Searching

- `findIndexOfEle(arr, element)`: Find the index of an element in the array.
- `findAndReturnOne(arr, element)`: Find and return one occurrence of an element in the array.
- `findAndReturnMany(arr, element)`: Find and return all occurrences of an element in the array.
- `isFound(arr, element)`: Check if an element is found in the array.
- `checkEveryEle(arr, element)`: Check if every element in the array matches the specified element.

#### Sorting

- `bubbleSort(arr)`: Sort the array using bubble sort
- `arrMethodSort(arr)`: Sort the array using in-built method. 
- `findAndReturnMany(arr, element)`: Find and return all occurrences of an element in the array.
- `isFound(arr, element)`: Check if an element is found in the array.
- `checkEveryEle(arr, element)`: Check if every element in the array matches the specified element.

## Usage

To use these functions, require the modules and call the desired functions in the file `index.js` with the appropriate arguments and Run this command. 

#### Command:
```bash
node index.js
``` 

## Categories

- Traversal
- Insertion
- Deletion
- Searching
- Sorting