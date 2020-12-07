// zad 7.
// Utwórz funkcję, która przyjmuje liczbę całkowitą i zwraca silnię tej liczby całkowitej.

let liczba = prompt("podaj liczbę całkowitą nieujemną");

function policzSilnie(liczba){
var result;
if ((liczba == 0) || (liczba==1)){
    result = 1;
} 
else if (liczba > 1 ){
    result = 1;
   for (var i=liczba; i>1; i--){    
    result = (result*i);
   }
} 
else {   
    result = "nie występuje, podaj prawidłową wartość";
}
return ("silnia liczby " + liczba + " -> " + result);
}



console.log(policzSilnie(liczba));

//console.log(typeof (liczba));

//silnia z mozilli
// function silnia(n) {
//     if ((n == 0) || (n == 1))
//        return 1
//     else {
//        var result = (n * silnia(n-1) );
//        return result
//     }
//  }
//  console.log(silnia(5));

