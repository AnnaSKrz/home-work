
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