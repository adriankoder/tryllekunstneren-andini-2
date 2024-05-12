
// Få tak i knappelementene
const TrylleshowID = document.getElementById("TrylleshowID")
const telefon = document.getElementById("littImfo")
const KontaktIfo2 = document.getElementById("KontaktIfo")
const balonggjøglingKnapp = document.getElementById("Balonggjøgling");
const hovedsideKnapp = document.getElementById("Hovedside");
const kontaktKnapp = document.getElementById("Kontakt");
const sukkerspinnKnapp = document.getElementById("Sukkerspinn");
const tryllingKnapp = document.getElementById("Trylling");
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const Sukkerspinnmaskin = document.getElementById ("Sukkerspinnmaskin")
const containeridElement = document.getElementById("containerid");
const andini_med_kanin = document.getElementById("div4Id");
const info = document.getElementById("littImfo");
const iframe = document.getElementById("iframe");
const TryllingID = document.getElementById("TryllingID")
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const Ballonggjøglingh2 = document.getElementById("Ballonggjøglingh2")
const Sukkerspinnmaskinp = document.getElementById("SukkerspinnmaskinIDp")
const footer = document.getElementById("føler_meg_privilegertP")
// iframe.style.opacity = 1
// TrylleshowID.style.display = "none";

KontaktIfo2.style.display = "none"
KontaktConteiner.style.display = "none"
telefon.style.display = "none"
TrylleshowID.style.display ="none"
TryllingID.style.display ="none"
// pElement.style.display ="none"
Sukkerspinnmaskinp.style.display = "none"
Ballonggjøgling.style.display = "none"
Ballonggjøglingh2.style.display = "none"
footer.style.display = "block"
Bor_du_i_Bergen.style.display = "block"
hvor_lenge_har_holt_poID.style.display = "block"




//  element.style.opacity = 0;  // Gjør elementet usynlig
// element2.style.opacity = 1;

const hamburgerimg = document.querySelector("#hamburgermeny")
console.log(hamburgerimg)

hamburgerimg.addEventListener("click", function(){
    hamburgertoggle("active","hidden")
})


// const num1 = "neren"
// const num2 = "anders"
// const num3 = "@"
// const num4 = "try"
// const num5 = "kunst"
// const num6 = "lle"
// const num7 = ".no"
// const num2 + num3 =
// Initialiser TrylleshowID til å være skjult


// Lytte etter klikk på Trylling-knappen for å vise/skjule TrylleshowID


// Eksempel: Skjul TrylleshowID og vis andre elementer når Hovedside-knappen trykkes

import {tryllingKnappFunction} from "../tryllingKnapp.js"
import {BalonggjøglingFunction} from "../Balonggjøgling.js"
import {hovedsideKnappfunction} from "../hovedsideKnapp.js"
import {kontaktKnappfunction} from "../kontaktKnapp.js"
import {sukkerspinnKnappFunction} from "../sukkerspinnKnapp.js"
import {hamburgertoggle} from "../hamburgermeny.js"
BalonggjøglingFunction();
hovedsideKnappfunction();
kontaktKnappfunction();
sukkerspinnKnappFunction();
tryllingKnappFunction();
