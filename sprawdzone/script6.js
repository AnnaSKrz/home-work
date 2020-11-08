// Farmer prosi cię, abyś powiedział mu, ile nóg można policzyć wśród wszystkich jego zwierząt. Rolnik hoduje trzy gatunki:
// • kurczaki = 2 nogi
// • krowa = 4 nogi
// • świnie = 4 nogi
// Rolnik policzył swoje zwierzęta i podaje sumę częściową dla każdego gatunku. Musisz zaimplementować funkcję, która zwraca całkowitą liczbę nóg wszystkich zwierząt.

const kurczak = 2;
const krowa = 4;
const swinia = 4;


function sumaNog(iloscKurczakow =6, iloscKrow = 4, iloscSwin = 5){
    var result;
    if (iloscKurczakow>=0 && iloscKrow>=0 && iloscSwin){
        let iloscNog = iloscKurczakow * kurczak + iloscKrow * krowa+iloscSwin * swinia;
       result = ("Zwierzęta ("+ iloscKurczakow + "," + iloscKrow + "," + iloscSwin+ ") -> "+ iloscNog);
    }   
    else {
        result =("podaj poprawną wartość");      
    }
return result;
}

console.log(sumaNog());

// iloscKurczakow -= 2;
// console.log(sumaNog());
// iloscSwin -=2;
// console.log(sumaNog());
// iloscKurczakow += 5;
// iloscSwin+=3;        
// iloscKrow+= 2;
// console.log(sumaNog());

