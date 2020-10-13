//zadania pierwsze. 
//nie wiem gdzie i jak wpisać parseInt, mimo braku - działa...




function checkNumber() {
    let number = prompt("Podaj liczbę");
    console.log(typeof (number));
    console.log(parseInt(number));
    console.log(typeof (number));
    if (number % 2 == 0) {
        return "liczba jest parzysta";
    } else {
        return "liczba jest nieparzysta";
    }
}
console.log(checkNumber());
console.log(typeof number);