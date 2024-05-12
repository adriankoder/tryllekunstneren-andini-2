function BalonggjøglingFunction (){
    
    
const balonggjøglingKnapp = document.getElementById("Balonggjøgling");
// const Ballonggjøgling = document.getElementById("Balonggjøgling")
const andini_med_kanin = document.getElementById('div4Id');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TrylleshowID = document.getElementById("TrylleshowID")
const iframe = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const Sukkerspinnmaskin = document.getElementById ("SukkerspinnmaskinIDp")
const pElement = document.getElementById ("pElement")
const TryllingID = document.getElementById ("TryllingID")
const Ballonggjøglingph2 = document.getElementById("Ballonggjøglingh2")
const Ballonggjøglingp = document.getElementById("Ballonggjøglingp")
const hvor_lenge_har_holt_poID = document.getElementById("hvor_lenge_har_holt_poID")
if (Balonggjøgling)
    Balonggjøgling.addEventListener("click", function() {
        // Ballonggjøgling.style.display =="block"
        TrylleshowID.style.display = "none" 
        TrylleshowID.style.display = "none";
        Bor_du_i_Bergen.style.display = "none"
        KontaktConteiner.style.display = "none"
        TrylleshowID.style.display = "none";
       
        //KontaktIfo2.style.display = "none"
        footer.style.display = "none"
       
        hvor_lenge_har_holt_poID.style.display = "none"
        Sukkerspinnmaskin.style.display = "none"
        telefon.style.display = "none"
        TryllingID.style.display = "none"
        iframe.style.opacity = 0
        andini_med_kanin.style.opacity = 0
        // pElement.style.display ="none"
 Ballonggjøglingph2.style.display = "block"
        Ballonggjøglingp.style.display = "block"
        // Ballonggjøgling.style.display = "block"
    })
}
export {BalonggjøglingFunction}
