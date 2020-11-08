// Mając podaną wartość pH, zwróć, czy jest to wartość zasadowa (większa niż 7), „kwaśna” (mniejsza niż 7) czy obojętna (7). Zwróć nieprawidłowy, jeśli podana wartość jest mniejsza niż 0 lub większa niż 14. Proszę wykorzystać instrukcję switch.

let ph = 6;

function phName(ph){
    var result;
    switch(ph){
        case 8:
            result = "zasadowa";
            break;
        case 6:
            result = "kwaśna";
            break;
        default:
            result = "nieprawidłowa wartość";
            break;
}
return result;
}

console.log(phName(ph));