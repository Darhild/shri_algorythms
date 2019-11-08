function sortWithMin(arr) {
    const stack = [];
    
    for(let i = 0; i < arr.length; i++) {
        const newArr = [...arr];
        newArr.splice(0, stack.length);
        let min = Math.min.apply(null, newArr);
        const num = arr.splice(arr.indexOf(min), 1);
        arr.splice(stack.length, 0, ...num);
        stack.push(min);
    }

    return arr;
}

const arr1 = [5, 1, 4, 2];
console.log(sortWithMin(arr1));

const arr2 = [8, 7, 6, 4];
console.log(sortWithMin(arr2));

const arr3 = [32, 1, 4, 9, 21];
console.log(sortWithMin(arr3));