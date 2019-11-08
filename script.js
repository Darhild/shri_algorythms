

function bubbleSort(arr) {
    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr.length; j++) {
            if (arr[j + 1] < arr[j]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }        
        }
    }

    return arr;
}

const arr1 = [5, 1, 4, 2];
console.log(bubbleSort(arr1));

const arr2 = [8, 7, 6, 4];
console.log(bubbleSort(arr2));

const arr3 = [32, 1, 4, 9, 21];
console.log(bubbleSort(arr3));