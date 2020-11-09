// Mając podaną wartość pH, zwróć, czy jest to wartość zasadowa (większa niż 7), „kwaśna” (mniejsza niż 7) czy obojętna (7). Zwróć nieprawidłowy, jeśli podana wartość jest mniejsza niż 0 lub większa niż 14. Proszę wykorzystać instrukcję switch.

let ph = 8.9;

function phName(ph){
    var result;
    switch(true){
        case ph > 7 && ph < 14:
            result = "zasadowe";
            break;
        case ph < 7 && ph > 0 :
            result = "kwaśne";
            break;
        case ph == 7:
            result = "obojętne";
            break;
        case ph < 0:
        case ph > 14:
            result = "wartość nieprawidłowa";
        default:
            result = "nieprawidłowa wartość";
            break;
}
return ("twoje ph (" + ph + ") to ph " + result);
}

console.log(phName(ph));