function sortWithMin(arr) {   
    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) min = arr[j];        
        } 

        const num = arr[i];
        arr[arr.indexOf(min)] = num;
        arr[i] = min;
    }

    return arr;
}

const arr1 = [5, 1, 4, 2];

console.log(sortWithMin(arr1));

const arr2 = [8, 7, 6, 4];
console.log(sortWithMin(arr2));

const arr3 = [32, 1, 4, 9, 21];
console.log(sortWithMin(arr3));