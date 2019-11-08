function bubbleSort(arr) {
    for(i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        }
    }

    return arr;
}

const arr1 = [5, 1, 4, 2];
console.log(bubbleSort(arr1));