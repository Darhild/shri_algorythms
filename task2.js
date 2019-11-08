function sortWithMin(arr) {
    
    
    for(let i = 0; i < arr.length; i++) {
        let min = Math.min.apply(null, arr);
        [arr[i], arr[arr.indexOf(min)]] = [arr[arr.indexOf(min)], arr[i]]
    }

    return arr;
}

const arr1 = [5, 1, 4, 2];
console.log(sortWithMin(arr1));

const arr2 = [8, 7, 6, 4];
console.log(sortWithMin(arr2));

const arr3 = [32, 1, 4, 9, 21];
console.log(sortWithMin(arr3));