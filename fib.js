function fibc(n) {
    fibc.cache = fibc.cache ?? [];
    if (n < 2) {
        return n;
    }
    if (!fibc.cache[n]) {
        fibc.cache[n] = fibc(n - 1) + fibc(n - 2);
    }
    return fibc.cache[n];
}
console.log(fibc(8));