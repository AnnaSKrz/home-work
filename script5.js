// Stwórz funkcję obliczającą liczbę wygranych, remisów i przegranych oraz     obliczającą liczbę punktów, które drużyna piłkarska uzyskała do tej pory.
// • wygrane otrzymują 3 punkty
// • remisy otrzymują 1 punkt
// • porazki dają 0 punktów

//ilośc zwycięstw, remisów i porażek wpisałam jako stałą, 

const zwyciestwo = 3; //to są stałe, więc const
const remis = 1; //to są stałe, więc const
const porazka = 0; //to są stałe, więc const

function ObliczPunktyDruzyny(let iloscZwyciestw =3, let iloscRemisow=5,let iloscPorazek=6) {    
   if (iloscZwyciestw >=0 && iloscRemisow>=0 && iloscPorazek>=0){
    let punktyZwyciestwa = iloscZwyciestw * zwyciestwo + iloscRemisow * remis + iloscPorazek * porazka;
    return ("Punkty zwycięstwa drużyny (" + iloscZwyciestw + ","+ iloscRemisow + ","+ iloscPorazek + ") -> "+ punktyZwyciestwa); //zamiast return daj komuniukat = "Punkty..." <-- jak dać komunikat? przez prompt? Dlaczego nie może tutaj być return?
   }else {
       return ("podaj poprawną wartość") //zamiast return daj komuniukat = "Poaj..." <-- jak dać komunikat? przez prompt? Dlaczego nie może tutaj być return?
   }   
   //a dopiero tutaj return komunikat - nie bardzo rozumiem dlaczego nie moze być return w linijkach wyżej, a co ma być w return na końcu?
   
}
console.log(ObliczPunktyDruzyny(5,6,7));

//tak dodawać ilości zwycięstwa, porażnki, remisy? - Marcin: nie. Możesz to zrobić na dwa sposoby
//sposób 1: iloscZwyciestw =2; iloscRemisow =2; iloscPorazek =2; function ObliczPunktyDruzyny(iloscZwyciestw,iloscRemisow,iloscPorazek)
//sposób 2 function ObliczPunktyDruzyny(iloscZwyciestw=1,iloscRemisow=2,iloscPorazek=1)

iloscZwyciestw +=2;
console.log(ObliczPunktyDruzyny());
iloscRemisow += 1;
console.log(ObliczPunktyDruzyny());


