// Farmer prosi cię, abyś powiedział mu, ile nóg można policzyć wśród wszystkich jego zwierząt. Rolnik hoduje trzy gatunki:
// • kurczaki = 2 nogi
// • krowa = 4 nogi
// • świnie = 4 nogi
// Rolnik policzył swoje zwierzęta i podaje sumę częściową dla każdego gatunku. Musisz zaimplementować funkcję, która zwraca całkowitą liczbę nóg wszystkich zwierząt.

let kurczak = 2;
let krowa = 4;
let swinia = 4;
let iloscKurczakow = 6;
let iloscKrow = 4;
let iloscSwin = 5;

function sumaNog(){
    if (iloscKurczakow>=0 && iloscKrow>=0 && iloscSwin){
        let iloscNog = iloscKurczakow * kurczak + iloscKrow * krowa+iloscSwin * swinia;
        return ("Zwierzęta ("+ iloscKurczakow + "," + iloscKrow + "," + iloscSwin+ ") -> "+ iloscNog);
    }
}
console.log(sumaNog());

iloscKurczakow -= 2;
console.log(sumaNog());
iloscSwin -=2;
console.log(sumaNog());
iloscKurczakow += 5;
iloscSwin+=3;
iloscKrow+= 2;
console.log(sumaNog());
