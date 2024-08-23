const arr = [5, 8, 9, 5, 4, 7, 6, 1, 10];
function linearsearch(arr, target) {
    //return index of target if found
    //otherwise return -1 if doesnot exist
    let i = 0;
    while (i < arr.length) {
        const curr = arr[i];
        if (curr === target) return i;
        i++;
    }
    return -i;
}
//binary search
function binarySearch()