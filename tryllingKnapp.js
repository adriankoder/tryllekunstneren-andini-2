function tryllingKnappFunction(){
    
const tryllingKnapp = document.getElementById("Trylling");
const element = document.getElementById('div4Id');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TrylleshowID = document.getElementById("TrylleshowID")
const element2 = document.getElementById("headerContent")
const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")
const pElement = document.getElementById ("pElement")
const Trylleshow = document.getElementById("TrylleshowID")
const TryllingID = document.getElementById("TryllingID")
const Ballonggjøgling = document.getElementById("Ballonggjøglingp")
const SukkerspinnmaskinIDp = document.getElementById("SukkerspinnmaskinIDp")
if (tryllingKnapp) {
    tryllingKnapp.addEventListener("click", function() {
            
          
           
            Bor_du_i_Bergen.style.display="none";
            KontaktConteiner.style.display="none";
            SukkerspinnmaskinIDp.style.display= "none";
            footer.style.opacity = 0;
            hvor_lenge_har_holt_poID.style.display="none";
            telefon.style.display="none";
            TrylleshowID.style.display="block";
            TryllingID.style.display="block";
            //KontaktIfo2.style.display = "none"
            Ballonggjøgling.style.display="none";
            iframe.style.opacity = 0
            // pElement.style.display ="none"
            Trylleshow.style.display="block";
            
            // header.style.display = "none"
            element.style.opacity = 0;
            })
    };
}
export {tryllingKnappFunction}