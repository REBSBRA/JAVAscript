function filtraPares(arr) {
    return arr.filter(callback);
}
//Para filtrar números pares// 
function callback(item) {
    return item % 2 === 0; 
}
// a ! nesse caso vai filtrar os valores ímpares// 
function callback(item) {
    return item % 2 !== 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filtraPares(meuArray));
