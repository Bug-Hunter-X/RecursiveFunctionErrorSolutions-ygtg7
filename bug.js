function foo(a, b) {
  if (a === 0) {
    return b;
  } else {
    return foo(a - 1, a + b);
  }
}
console.log(foo(5, 1)); // Output: 15

// This function will cause a stack overflow error if a is a large number. 
// This is because the recursive call to foo() will continue until the stack is full.  The maximum stack size is implementation dependent.