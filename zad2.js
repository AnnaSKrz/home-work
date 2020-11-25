// Grupa przyjaciół postanowiła założyć tajne stowarzyszenie. Nazwa będzie pierwszą literą
// każdego z ich imion, posortowaną w porządku alfabetycznym.
// Utwórz funkcję, która pobiera tablicę nazw i zwraca nazwę tajnego stowarzyszenia.
// societyName(["Adam", "Marcin", "Tomasz"]) ➞ "AMT"
// societyName(["Miłosz", "Kasia", "Wiola", "Lena"]) ➞ "MKWL"


const names = ["Adam", "Tomasz","Marcin"];
const names2 = ["Miłosz","Kasia","Wiola","Lena"];

 function societyName(arr){
    let result;
    const nameArray = [];
    const firstLetters = [];
    arr.sort();
  for (let i = 0; i < arr.length; i++){  
    nameArray.push((arr[i].split("")));
      firstLetters.push(nameArray[i][0]);
  }  
    return result = '"' + (firstLetters.join("")) + '"';
}

console.log(societyName(names2));