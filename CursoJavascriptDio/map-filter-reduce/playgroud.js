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
const nums = [1,2];
const nums2 = [2,4,6,8,10];
const nums3 = [1,23,55,67,30,2,4];

console.log('this -> maçã ',mapComThis(nums,maca));
console.log('this -> laranja ',mapComThis(nums,laranja));
console.log(mapSemThis(nums2));
console.log(filtraPares(nums3));