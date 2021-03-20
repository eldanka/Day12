function sumFibonacci(num) {
    if (num <= 0) {
        return 0;
    } else if (num == 1) {
        return num;
    }
    const arrFib = [1, 1];
    let nextFib = 0;

    while ((nextFib = arrFib[0] + arrFib[1]) <= num - 1) {
    arrFib.unshift(nextFib);
    }
    return arrFib.filter(x => x % 2 != 0).reduce((a, b) => a + b);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;