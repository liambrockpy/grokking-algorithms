function findSmallest(numArray: number[]): number {
    let smallest = numArray[0];
    let smallestIndex = 0;

    for (let num = 0; num < numArray.length; num++) {
        if (numArray[num] < smallest) {
            smallest = numArray[num];
            smallestIndex = num;
        }
    }
    return smallestIndex;
}

function selectionSort(arr: number[]): number[] | null {
    let originalArray = arr;
    if (originalArray.length != 0) {
        let sortedArray: number[] = [];

        while (originalArray.length != 0) {
            let index = findSmallest(originalArray);
            sortedArray = sortedArray.concat(originalArray.splice(index, 1));
        }
        return sortedArray;
    }
    return null;
}

let myArray = [6, 14, 3, 15, 26];

console.log(selectionSort(myArray));