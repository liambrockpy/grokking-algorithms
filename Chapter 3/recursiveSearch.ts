//Fibonacci
//sequence leading to n, where n > 2
//fib(n) = fib(n-1) + fib(n-2)
//Input: n = 5 
// Output:
// Fibonacci series of 5 numbers is : 0 1 1 2 3

let n = 5

function fib(n: number): number {
    if (n === 0) return 0
    if (n == 1 || n == 2) return 1
    else return fib(n - 1) + fib(n - 2)
}

// for (let i = 0; i < n; i++) {
//     console.log(fib(i) + " ")
// }

const numArray = [
    1,
    [2, 3],
    4,
    [5, [6, 7, 8]],
    [10, [11, [12, 13]]]
]

let found = false

function hasNumber(arr: any, n: number): boolean {
    for (let num of arr) {
        console.log(num)
        if (Array.isArray(num)) found = hasNumber(num, n)
        if (num === n) {
            return true
        }
    }
    return found
}

console.log(hasNumber(numArray, 15))