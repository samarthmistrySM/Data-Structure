const { log } = require("console");
const { isEmpty, peek, pop, printStack, push, size } = require("./Stack");
const Stack = require("./StackUsingClass")
const Stack2 = require("./StackLinkedList")
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

function operators(op) {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  return 0;
}

function infixToPostfix(){
  const stack = new Stack();
  let result = "";
  let infix = '(A+B)';

  for(let i=0;i<infix.length;i++){
    let char = infix[i];

    if((char <= 'z' && char >='a') || (char <= 'Z' && char >= 'A') ){
      result += char;
    }
    else if(char === '(' ){
      stack.push('(')
    }
    else if (char === ')') {
      while (!stack.isEmpty() && stack.peek() !== '(') {
        result += stack.pop();
      }
      stack.pop(); 
    } 
    else{
      while (!stack.isEmpty() && operators(stack.peek()) >= operators(char)) {
        result += stack.pop();
      }
      stack.push(char);
    }
  } 
  
  log(result)  
  log(stack)
}


function stackUsingLinkedList(){
  const stack = new Stack2();
  stack.push(1)
  stack.push(2)
  stack.push(3)
  stack.push(4)
  stack.push(5)

  stack.print()
}
stackUsingLinkedList()

// infixToPostfix()
// console.log(stack.peek()); 
// console.log(stack.pop()); 
// console.log(stack.getSize());
// stack.print(); 


//infix to postfix
// Input: A + B * C + D
// Output: ABC*+D+