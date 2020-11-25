// Utwórz funkcję, która przyjmuje tablicę liczb i zwraca zarówno minimalną, jak i maksymalną
// liczbę w tej kolejności.
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]
// minMax([2334454, 5]) ➞ [5, 2334454]
// minMax([1]) ➞ [1, 1]

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