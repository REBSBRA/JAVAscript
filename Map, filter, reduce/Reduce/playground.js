//somar todos os números da array//
function somaNumeros(arr) {
    return arr.reduce(function(prev, current){
        //esse comando printa os valores da prev e da current//
        console.log({prev});
        console.log({current});
        return prev + current
    });
}

const arr = [1, 2];

console.log(somaNumeros(arr));