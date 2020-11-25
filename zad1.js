// //Utwórz funkcję, która pobiera tablicę liczb i zwraca sumę jej sześcianów.
// sumOfCubes([1, 5, 9]) ➞ 855
// // 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0

const numberArray = [1,5,9];

function sumOfCubes(arr){
    let result;
    let i ;
    let sum = 0;
    for (i=0; i < arr.length; i++ ){         
       sum += Math.pow(arr[i],3);    
    }
    return result = "SumOfCubes([" + arr + "]) -> " + sum ;
    
}
console.log(sumOfCubes(numberArray));
