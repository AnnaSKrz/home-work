//zadanie 2
//nie wychodzi mi przekonwertowanie typu zmiennej



function checkNumber() {
    let number = prompt("podaj liczbę");
    console.log(typeof (number));
    console.log(parseInt(number));
    console.log(typeof (number));
    if (number >= -35 && number < 2) {
        return ("podana liczba znajduje się w zakresie <-35;2)");
    } else if (number > 11 && number <= 27) {
        return ("podana liczba znajduje sie w zakresie (11;27>");
    } else {
        return ("podana liczba nie znajduje się w zadnym zakresie");
    }
}
console.log(checkNumber());
