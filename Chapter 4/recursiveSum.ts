const thisArr = [4, 8, 13, 16, 26, 32, 37, 49]

function sum(numArray: number[]): number {
    //base case
    if (numArray.length === 1) return numArray[0]

    //recursive
    let last = numArray[numArray.length - 1]
    numArray.pop()
    return last + sum(numArray)
}

function getArrayLength(arrayForLength: number[] | string[]): number {
    //base case
    if (!arrayForLength[0]) return 0
    if (!arrayForLength[1]) return 1

    arrayForLength.pop()
    return 1 + getArrayLength(arrayForLength)

}

function maxNumber(arrayForMax: number[]): number {
    //base case
    if (arrayForMax.length === 1) return arrayForMax[0]
    if (arrayForMax.length === 2) return arrayForMax[1] > arrayForMax[0] ? arrayForMax[1] : arrayForMax[0]

    let last = arrayForMax[arrayForMax.length - 1]
    arrayForMax.pop()
    let greatest = maxNumber(arrayForMax)
    return last > greatest ? last : greatest

}

function binarySearchRecursive(biArray: number[], low: number, high: number, biGuess: number): number {
    //base case, search exhausted
    if (low > high) return -1

    //base case, guess found
    let midIndex = Math.floor((low + high) / 2)
    if (biGuess === biArray[midIndex]) return midIndex

    //dont modify array, just move low/high pointers, that way can keep state of mid for whole array
    else if (biGuess < biArray[midIndex]) {
        return binarySearchRecursive(biArray, low, midIndex - 1, biGuess)
    }
    else return binarySearchRecursive(biArray, midIndex + 1, high, biGuess)
}

let guess = 38
let biSearchResult = binarySearchRecursive(thisArr, 0, thisArr.length - 1, guess)

console.log(biSearchResult === -1 ? `${guess} not in array` : `${guess} found at index ${biSearchResult}`)