const numbers = [1,5,4,3,2];
const numbers2 = [2334454,5];
const numbers3 = [1];
const numbers4 = [22,43,2,6,14];

function minMax(arr){
    arr.sort(function(a, b){return a - b});
    console.log(arr.sort(function(a, b){return a - b}));
    return '[' + Math.min.apply(null, arr) +',' + Math.max.apply(null, arr) +']';
}

console.log(minMax(numbers));
console.log(minMax(numbers2));
console.log(minMax(numbers3));
console.log(minMax(numbers4));