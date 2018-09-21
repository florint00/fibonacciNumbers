const fib = num => {
    if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    }

    return fib(num - 1) + fib(num - 2);
};

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));