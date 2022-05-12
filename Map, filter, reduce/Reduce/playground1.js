const lista = [
    {
        name: "sabao em po",
        preco: 30
    },
    {
        name: "cereal",
        preco: 12
    },
    {
        name:"toalha",
        preco: 30,
    },
];

const saladoDisponivel = 100;

function calculaSaldo(saladoDisponivel, lista) {
    return lista.reduce(function(prev, current, index) {
        console.log("rodada", index + 1);
        console.log({prev})
        console.log({current})
        return prev-current.preco;
    }, saladoDisponivel)  
}

console.log(calculaSaldo(saladoDisponivel, lista));