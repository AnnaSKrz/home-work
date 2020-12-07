// Napisz funkcję, która przyjmuje obiekt jako parametr, ile stron może wydrukować każdy kolor atramentu. Podaj maksymalną liczbę stron, które drukarka może wydrukować, zanim skończy się którykolwiek z kolorów.

//nie wiem jak zrobić


let printColor = {
    cyan : 3,
    magenta : 12,
    yellow: 100}
        
    function inkLevels(printColor){
        return ("(" + printColor.cyan + "," + printColor.magenta + "," + printColor.yellow + ") -> " + Math.min(printColor["cyan"],printColor["magenta"],printColor["yellow"]));
    }

console.log(inkLevels(printColor));
