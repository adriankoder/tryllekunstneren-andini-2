function sukkerspinnKnappFunction (){

const sukkerspinnKnapp = document.getElementById("Sukkerspinn");
const element = document.getElementById('div4Id');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TrylleshowID = document.getElementById("TrylleshowID")
// const element2 = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")
const pElement = document.getElementById ("pElement")
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const SukkerspinnmaskinIDp = document.getElementById("SukkerspinnmaskinIDp")
const SukkerspinnmaskinH2 =document.getElementById("SukkerspinnmaskinH2")
if(sukkerspinnKnapp){
    sukkerspinnKnapp.addEventListener("click", function(){
        
        Ballonggjøgling.style.display = "none"
        TrylleshowID.style.display = "none"
        Bor_du_i_Bergen.style.display = "none"
        KontaktConteiner.style.display = "none"
        // //KontaktIfo2.style.display = "none"
        footer.style.display = "none"
        hvor_lenge_har_holt_poID.style.display = "none"
        element.style.opacity = 0
        iframe.style.opacity = 0
        telefon.style.display ="none"
        // pElement.style.display ="none"
        SukkerspinnmaskinH2.style.display = "block"
        SukkerspinnmaskinIDp.style.display = "block"
    })
}
    
}

 export {sukkerspinnKnappFunction}