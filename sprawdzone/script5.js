// Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz     obliczającą liczbę punktów, które drużyna piłkarska uzyskała do tej pory.
// • wygrane otrzymują 3 punkty
// • remisy otrzymują 1 punkt
// • porazki dają 0 punktów

//ilośc zwycięstw, remisów i porażek wpisałam jako stałą, 

const zwyciestwo = 3; //to są stałe, więc const
const remis = 1; //to są stałe, więc const
const porazka = 0; //to są stałe, więc const


let iloscZwyciestw = prompt("podaj ilość zwycięstw",);
let iloscRemisow = prompt("podaj ilość remisów",);
let iloscPorazek = prompt("podaj ilość porażek",);

function ObliczPunktyDruzyny(iloscZwyciestw ,  iloscRemisow, iloscPorazek) { 
  var komunikat;   
   if (iloscZwyciestw >=0 && iloscRemisow>=0 && iloscPorazek>=0){
    let punktyZwyciestwa = iloscZwyciestw * zwyciestwo + iloscRemisow * remis + iloscPorazek * porazka;
    komunikat = ("Punkty zwycięstwa drużyny (" + iloscZwyciestw + ","+ iloscRemisow + ","+ iloscPorazek + ") -> "+ punktyZwyciestwa); 
   }else {
       komunikat = ("podaj prawidłowe wartosci")   ;  
   }   
  return komunikat;
   
}
console.log(ObliczPunktyDruzyny(iloscZwyciestw,iloscRemisow,iloscPorazek));




