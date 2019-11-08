function walkTree(elem) {
    if(elem.children) {
        elem.children.forEach(child => walkTree(child));        
    }
    else console.log(elem.value);
}

const obj = {
    value: 1,
    children: [{value: 2, children: [{value: 5}, {value: 6}]}, {value: 3}, {value: 4, children: [{value: 7}, {value: 8}]}]
}

walkTree(obj);

