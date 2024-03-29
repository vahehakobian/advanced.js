function bitMap(num) {
    return new Uint32Array(Math.floor(num/32));
}

function set(map, val) {
    const index = Math.floor(val / 32);
    map[index] |= 1 << val % 32;
}
function get(map, val) {
    const index = Math.floor(val / 32);
    return (map[index] &= 1 << val % 32) != 0;
}

const map = bitMap(2000000000)
set(map,97)
console.log(get(map, 97));
console.log(map);
