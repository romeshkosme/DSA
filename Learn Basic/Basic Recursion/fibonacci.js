function fibonacci(limit) {
    if (limit <= 1) return limit;
    return fibonacci(limit-1) + fibonacci(limit - 2);
};

const res = fibonacci(2);
console.log(res);