//zadanie 3

function exam() {
    let number = prompt("podaj cyfrę w zakresie 0-3");
    console.log(typeof (number));
    console.log(parseInt(number));
    console.log(typeof (number));

    switch (true) {
        case (number = 0):
            console.log("egzamin do poprawy");
            break;
        case (number = 1):
            console.log("zdałeś egzamin");
            break;
        case (number = 2):
            console.log("zaliczona tlyko teoria");
            break;
        case (number = 3):
            console.log("zaliczona tylko praktyka");
            break;
        default:
            console.log("błąd, podaj inną cyfrę");
            break;
    }
}

console.log(exam());
