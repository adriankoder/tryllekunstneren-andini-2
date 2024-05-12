function kontaktKnappfunction (){
    const kontaktKnapp = document.getElementById("Kontakt");
const element = document.getElementById('div4Id');
const Bor_du_i_Bergen = document.getElementById("Bor_du_i_Bergen?")
const footer = document.getElementById("føler_meg_privilegertP")
const TryllingID = document.getElementById("TryllingID")
const element2 = document.getElementById("iframe")
const telefon = document.getElementById("littImfo")
const iframe = document.getElementById ("iframe")

const Ballonggjøgling = document.getElementById ("Ballonggjøglingp")
const Sukkerspinnmaskin = document.getElementById("SukkerspinnmaskinIDp")
if (kontaktKnapp){
    kontaktKnapp.addEventListener("click", function() {
    telefon .style.display = "block"
    TryllingID.style.display = "none";
    Bor_du_i_Bergen.style.display = "none"
    hvor_lenge_har_holt_poID.style.display = "none"
    footer.style.display = "none"
    Sukkerspinnmaskin.style.display = "none"
    Ballonggjøgling.style.display = "none"
    // KontaktIfo2.style.display = "block"
    KontaktConteiner.style.display = "block"
    iframe.style.display = "block"
    element.style.opacity = 0
   
    const num1 = "neren";
    const num2 = "anders";
    const num3 = "@";
    const num4 = "try";
    const num5 = "kunst";
    const num6 = "lle";
    const num7 = ".no";
    const kontakt = "kontakt"
    const tegn = ":"
    const mellomroim = " "
    // Kombinerer strenger
    const combined = kontakt+tegn+mellomroim+num2 + num3 + num4 + num6 + num5 + num1 + num7;
    
    // Oppretter et nytt <p> element
    const pElement = document.createElement("p");
    
    // Setter innholdet til den kombinerte strengen
    pElement.textContent = combined;
    
    // Legger <p> elementet til i body av dokumentet
    document.body.appendChild(pElement);

    pElement.style.display = "block"

    pElement.style.position = 'fixed'; // Fixed positioning keeps it in the same place even when scrolling
pElement.style.zIndex = '1000'; // High z-index to ensure it appears on top
// pElement.style.left = '50%'; // Centering horizontally
pElement.style.top = '10px';
    // Ensure this script runs after the HTML elements are parsed
// document.addEventListener('DOMContentLoaded', function() {
//     // Assuming pElement should reference an existing <p> element in the document
//     const pElement = document.querySelector('p'); // Adjust the selector as needed
    
//     function applyResponsiveFeatures() {
//         if (window.innerWidth <= 768) {
//             pElement.style.marginTop= "-347%"
//         } else {
//             pElement.style.marginTop= "-40%"
//         }
//     }

//     // Add event listener for window resize
//     window.addEventListener('resize', applyResponsiveFeatures);

//     // Apply initially to set the correct styles based on current window size
//     applyResponsiveFeatures();
// });

    // pElement.style.marginTop= "-347%"

// Initialiser TryllingID til å være skjult

    })
}
    
}

export {kontaktKnappfunction}