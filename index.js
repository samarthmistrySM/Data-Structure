const { log } = require("console");
const { isEmpty, peek, pop, printStack, push, size } = require("./Stack");
const Stack = require("./StackUsingClass")
const arr = [1, 2, 3, 4, 5, 6, 7];

// STACK

// log(isEmpty(arr))
// log(peek(arr))
// log(pop(arr))
// log(printStack(arr))
// push(arr,9); log(arr)
// log(printStack(arr))
// log(size(arr))


// STACK USING CLASS

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
// console.log(stack.peek()); 
// console.log(stack.pop()); 
// console.log(stack.getSize());
// stack.print(); 