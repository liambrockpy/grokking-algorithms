function binarySearch(listArray: number[], item: number): number | null {
    let first = 0;
    let last = listArray.length - 1;

    while (first <= last) {
        let mid = Math.floor((first + last) / 2);
        let guess = listArray[mid];
        if (guess === item) return mid;
        if (item > guess) first = mid + 1;
        else last = mid - 1;
    }
    return null;
}

let myList = [1, 3, 5, 7, 9, 11, 13, 17, 19];
let searchItem = 13;

let result = binarySearch(myList, searchItem);
if (result == null) console.log(`${searchItem} is not in this list`);
else console.log(`${searchItem} is at index ${result}`);