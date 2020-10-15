// Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz     obliczającą liczbę punktów, które drużyna piłkarska uzyskała do tej pory.
// • wygrane otrzymują 3 punkty
// • remisy otrzymują 1 punkt
// • porazki dają 0 punktów

//ilośc zwycięstw, remisów i porażek wpisałam jako stałą, 

//nie wiem jak zapisać funkcje obliczania tej ilości?

let zwyciestwo = 3;
let remis = 1;
let porazka = 0;
let iloscZwyciestw =3;
let iloscRemisow=5 ;
let iloscPorazek=6;

function ObliczPunktyDruzyny(){    
   if (iloscZwyciestw >=0 && iloscRemisow>=0 && iloscPorazek>=0){
    let punktyZwyciestwa = iloscZwyciestw * zwyciestwo + iloscRemisow * remis + iloscPorazek * porazka;
    return ("Punkty zwycięstwa drużyny (" + iloscZwyciestw + ","+ iloscRemisow + ","+ iloscPorazek + ") -> "+ punktyZwyciestwa);
   }else {
       return ("podaj poprawną wartość")
   }   
}
console.log(ObliczPunktyDruzyny());

//tak dodawać ilości zwycięstwa, porażnki, remisy?

iloscZwyciestw +=2;
console.log(ObliczPunktyDruzyny());
iloscRemisow += 1;
console.log(ObliczPunktyDruzyny());


