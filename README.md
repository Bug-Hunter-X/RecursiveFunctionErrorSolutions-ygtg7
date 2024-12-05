# JavaScript Stack Overflow Error

This repository demonstrates a common JavaScript error: a stack overflow error caused by excessive recursion.

The `foo` function recursively calls itself until a base case (a === 0) is reached. However, if the initial value of `a` is large, the recursion depth exceeds the call stack's limit, resulting in a stack overflow error.

## Bug

The bug lies in the `foo` function's lack of handling for large input values of `a`, causing unbounded recursion.

## Solution

The solution involves using iteration instead of recursion or adding a check for maximum recursion depth to prevent stack overflow errors.