const maca = {
    value: 2,
}
const laranja = {
    value: 3,
}
function mapComThis(arr,thisArg){
    return arr.map(function(item){
        return item * this.value
    }, thisArg);
}
function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2;
    });
}

function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 === 0;
}
function somaNumero(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev + current;
    },0);
}

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current})
        return prev - current.preco;
    }, saldoDisponivel)
}

const nums = [1,2];
const nums2 = [2,4,6,8,10];
const nums3 = [1,23,55,67,30,2,4];
const arr = [1,2];
const lista = [
    {
        name: 'Sabao em po',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },
    {
        name: 'toalha',
        preco: 30,
    },
];
const saldoDisponivel = 100;

console.log('this -> maçã ',mapComThis(nums,maca));
console.log('this -> laranja ',mapComThis(nums,laranja));
console.log(mapSemThis(nums2));
console.log(filtraPares(nums3));
console.log(somaNumero(arr));
console.log(calculaSaldo(saldoDisponivel,lista));