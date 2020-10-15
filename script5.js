// Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz     obliczającą liczbę punktów, które drużyna piłkarska uzyskała do tej pory.
// • wygrane otrzymują 3 punkty
// • remisy otrzymują 1 punkt
// • porazki dają 0 punktów

//ilośc zwycięstw, remisów i porażek wpisałam jako stałą, 

//nie wiem jak zapisać funkcje obliczania tej ilości?

let zwyciestwo = 3; //to są stałe, więc const
let remis = 1; //to są stałe, więc const
let porazka = 0; //to są stałe, więc const
let iloscZwyciestw =3; //nie tworzymy niepotrzebnie zmiennych globalnych 
let iloscRemisow=5 ; //nie tworzymy niepotrzebnie zmiennych globalnych 
let iloscPorazek=6; //nie tworzymy niepotrzebnie zmiennych globalnych 

function ObliczPunktyDruzyny(){     //tutaj w () muszą być parametry (czyli to, co zrobiłaś w linijkach 13-15). 
   if (iloscZwyciestw >=0 && iloscRemisow>=0 && iloscPorazek>=0){
    let punktyZwyciestwa = iloscZwyciestw * zwyciestwo + iloscRemisow * remis + iloscPorazek * porazka;
    return ("Punkty zwycięstwa drużyny (" + iloscZwyciestw + ","+ iloscRemisow + ","+ iloscPorazek + ") -> "+ punktyZwyciestwa); //zamiast return daj komuniukat = "Punkty..."
   }else {
       return ("podaj poprawną wartość") //zamiast return daj komuniukat = "Poaj..."
   }   
   //a dopiero tutaj return komunikat
   
}
console.log(ObliczPunktyDruzyny());

//tak dodawać ilości zwycięstwa, porażnki, remisy? - Marcin: nie. Możesz to zrobić na dwa sposoby
//sposób 1: iloscZwyciestw =2; iloscRemisow =2; iloscPorazek =2; function ObliczPunktyDruzyny(iloscZwyciestw,iloscRemisow,iloscPorazek)
//sposób 2 function ObliczPunktyDruzyny(iloscZwyciestw=1,iloscRemisow=2,iloscPorazek=1)

iloscZwyciestw +=2;
console.log(ObliczPunktyDruzyny());
iloscRemisow += 1;
console.log(ObliczPunktyDruzyny());


