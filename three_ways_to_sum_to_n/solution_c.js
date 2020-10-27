// Problem 1 C
// Task: Provide 3 unique implementations of the following function.
// Input: `n` - any integer from `0` to `Number.MAX_SAFE_INTEGER`.
// Output: `return` - summation to `n`, i.e. sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15.

// Loop
var sum_to_n = function(n) {
    // your code here
    var result = 0;
    for (i=0; i<=n; i++) {
        result += i;
    }
    return result;
};
console.log(sum_to_n(3));