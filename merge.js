function mergeArr(arr1, arr2, arr3, arr4, arr5) {
let first = arr1;
const newArr = [arr2, arr3, arr4, arr5];
for (let i = 0; i < newArr.length; i++) {
    const fakeFirst = first;
    first = [];
    while (fakeFirst.length || newArr[i].length) {
    if (fakeFirst[0] < newArr[i][0] || newArr[i][0] == undefined) {
        first.push(fakeFirst.shift());
        continue;
    }
    first.push(newArr[i].shift());
    }
}
return first;
}

console.log(mergeArr([44,96],[8,16,22,28],[54,68,77],[1,6,19],[15,33,37]));



function alterMergeArr(arr1, arr2, arr3, arr4, arr5) {
    return [...arr1, ...arr2, ...arr3, ...arr4, ...arr5].sort((a,b) => a-b);
}
console.log(alterMergeArr([44,96],[8,16,22,28],[54,68,77],[1,6,19],[15,33,37]));

