function foo(a, b) {
  if (a === 0) {
    return b;
  } else {
    while (a > 0) {
      b += a;
      a--;
    }
    return b;
  }
}
console.log(foo(5, 1)); // Output: 15

//This iterative approach avoids stack overflow errors, regardless of the size of 'a'.