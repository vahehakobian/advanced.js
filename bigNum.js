function bigNum (...str) {
    const arr = []
    for(let i = 0; i <= str.length-1; i++) {
        if (typeof str[i] === 'number' || str[i].indexOf('big') == -1) {
            throw new Error('Cannot mix bigNum and other types')
        }
        str[i] = str[i].replace(/big/i,'');
        const arr2 = [];
        while (str[i].length) {
            let num = str[i].substring(0,1);
            if (Number.isNaN(+num)) {
                throw new Error('BigNum Syntax error');
            }
            arr2.push(num);
            str[i] = str[i].substring(1);
        }
        arr.push(arr2)
    }
    return arr;
}
// console.log(bigNum('99999999999999999999999999999big','99999999999999999999999999999big'));

function bigNumPlus (...args) {
    const numsArr = bigNum(...args);
    const cur = numsArr[0].reverse().join('');
    const prev = numsArr[1].reverse().join('');
    let len = prev.length > cur.length ? cur.length : prev.length;
    const res = [];
    let mn = '' ;
    for (let i = 0; i < len; i++) {
        if (!cur[i]) {
            mn = +mn + (+prev[i]) + '';
        }else if (!prev[i]) {
            mn = +mn + (+cur[i]) + '';
        }else {
            mn = +mn + (+cur[i] + +prev[i]) + '';
        }
        if (mn.length == 2) {
            res.push(mn[1]);
            mn = mn.substring(0,1)
        }
        else {
            res.push(mn)
            mn = '';
        }
        if (i + 1 === len && mn) {
            len += 1;
        }
    }
    if (numsArr[0].length > numsArr[1].length) {
        return  numsArr[0].join('').substring(res.length) + res.reverse().join('') + 'big';
    }else {
        return  numsArr[1].join('').substring(res.length) + res.reverse().join('') + 'big';
    }
}
// console.log(bigNumPlus("123big", '2279big'));
function bigNumminus (...args) {
    const numsArr = bigNum(...args);
    const cur = numsArr[0].reverse().join('');
    const prev = numsArr[1].reverse().join('');
    let len = prev.length > cur.length ? cur.length : prev.length;
    const res = [];
    let mn = '' ;
    console.log(prev);
    console.log(cur);
    for (let i = 0; i < len; i++) {
        if (!cur[i]) {
            mn =  (+prev[i]) - mn + '';
        }else if (!prev[i]) {
            mn =  (+cur[i]) - mn + '';
        }else {
            mn = (+cur[i] - +prev[i]) - mn +'';
        }
        if (mn < 0) {
            mn = 10 + +mn + '';
            console.log(mn);
            res.push(mn);
            mn = 1;
        }
        else {
            res.push(mn)
            mn = '';
        }
        if (i + 1 === len && mn) {
            len += 1;
        }
    }
    let result;
    if (numsArr[0].length > numsArr[1].length) {
        result = numsArr[0].join('').substring(res.length) + res.reverse().join('') + 'big';
    }else {
        result = numsArr[1].join('').substring(res.length) + res.reverse().join('') + 'big';
    }
    while (!(+result[0])) {
        result = result.substring(1)
    }
    return result
}
console.log(bigNumminus('1998big','1997big'));