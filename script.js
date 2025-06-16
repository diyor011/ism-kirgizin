

let ism = prompt("Ismingizni kiriting:");
let uzunlik = ism.length;

alert("Sizning ismingiz " + uzunlik + " ta harfdan iborat.");
let xarif = prompt("Lyboy xarif kirgizing men sizga u xarif ismizda bormi yomi tekshirib beraman😎");

// Kichik harflarga o'tkazib, tenglashtiramiz
let ismKichik = ism.toLowerCase();
let xarifKichik = xarif.toLowerCase();

if (ismKichik.includes(xarifKichik)) {
    alert("Ha, sizning ismingizda '" + xarif + "' harfi bor.✔");
} else {
    alert("Yo'q, sizning ismingizda '" + xarif + "' harfi yo'q.😁");
}
