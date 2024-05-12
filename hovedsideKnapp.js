function hovedsideKnappfunction(){

const hovedsideKnapp = document.getElementById("Hovedside");
const KontaktIfo2 = document.getElementById("KontaktIfo")
const TrylleshowID = document.getElementById("TrylleshowID")
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const føler_meg_privilegertP = document.getElementById("føler_meg_privilegertP")
const iframe = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const element = document.getElementById('div4Id');
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const Sukkerspinnmaskin = document.getElementById("SukkerspinnmaskinIDp")
const TryllingID = document.getElementById("TryllingID")
if (hovedsideKnapp) {
    hovedsideKnapp.addEventListener("click", function() {
       
                // .style.display = "block" // Gjør elementet usynlig
        iframe.style.opacity = 1;
         Bor_du_i_Bergen.style.display = "block"
        hvor_lenge_har_holt_poID.style.display = "block"
        føler_meg_privilegertP.style.display = "block"
        TrylleshowID.style.display = "none";
        KontaktConteiner.style.display = "none"
      
        Sukkerspinnmaskin.style.display = "none"
        Ballonggjøgling.style.display = "none"
     

        telefon.style.display= "none";
        // Sett andre elementer til synlige etter behov
        element.style.opacity = 1})
                // alert("Knappen ble klikket!");

    }
};
export {hovedsideKnappfunction}