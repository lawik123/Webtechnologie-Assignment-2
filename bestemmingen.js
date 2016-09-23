/**
 * Created by Lawik Ayoub on 22-Sep-16.
 */

/**
 * method which is used for the user to scroll to the top when firstuse on page
 */
function scrolltop() {
    window.scrollTo(0, 0);
}

/**
 * show spanje detail
 */
function spanjeOnClick() {
    document.getElementById("detail").style.display = "block";
    document.getElementById("image").src = "assets/spanje.jpg";
    document.getElementById("image").alt = "Foto van Spanje";
    document.getElementById("imagetext").innerHTML = "Spanje";
    document.getElementById("text").innerHTML = "Een lange kustlijn verdeeld over verschillende Costa's, temperamentvolle steden als" +
        "Barcelona en Madrid en overheerlijke Spaanse tapas, paella en sangria: als je ergens 'la buena vida' kunt" +
        "ervaren dan is het wel tijdens een vakantie in Spanje. Dit land in het zuidwesten van Europa is vanwege de" +
        "ligging aan de Middellandse Zee al jaren dé plek voor een strandvakantie.";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show portugal detail
 */
function portugalOnClick() {
    document.getElementById("detail").style.display = "block";
    document.getElementById("image").src = "assets/portugal.jpeg";
    document.getElementById("image").alt = "Foto van Portugal";
    document.getElementById("imagetext").innerHTML = "Portugal";
    document.getElementById("text").innerHTML = "De populariteit van Portugal als vakantieland groeit met het jaar. En terecht." +
        "In Portugal is genoeg te zien: de sprookjespaleizen in Sintra, de duizelingwekkende ravijnen in de Serra" +
        "da Estrela, Lissabon met haar romantische wijken en de sneeuwwitte dorpjes in de Alentejo. Je kunt er" +
        "heerlijk eten en luisteren naar de weemoedige fado-muziek.";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show griekenland detail
 */
function griekenlandOnClick() {
    document.getElementById("detail").style.display = "block";
    document.getElementById("image").src = "assets/griekenland.jpg";
    document.getElementById("image").alt = "Foto van Griekenland";
    document.getElementById("imagetext").innerHTML = "Griekenland";
    document.getElementById("text").innerHTML = "Griekenland is zo divers dat het onmogelijk is om over één land te spreken en" +
        "daar plukt u de vruchten van. Voor een zonovergoten strandvakantie lenen de talloze eilanden zich" +
        "goed, zoals het diverse Kreta. Of ontdek meerdere eilanden tijdens het eilandhoppen in de Ionische" +
        "Zee. Meer fan van cultuur? Kies dan voor een fly drive op het vasteland en bezoek onder andere het" +
        "Orakel van Dodoni tijdens uw vakantie Griekenland.";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show ibiza detail
 */
function ibizaOnClick() {
    document.getElementById("detail").style.display = "block";
    document.getElementById("image").src = "assets/ibiza.jpeg";
    document.getElementById("image").alt = "Foto van Ibiza";
    document.getElementById("imagetext").innerHTML = "Ibiza";
    document.getElementById("text").innerHTML = "Ibiza had het Spaanse woord voor muziek kunnen zijn. Niet voor niets is de" +
        "muziekstijl 'Ibiza House' naar dit eiland vernoemd. Ook staat Ibiza bekend om het bruisende" +
        "nachtleven, blauwe baaien en is het de thuishaven van vele hippies. Wissel uw dagen op de witte stranden af met" +
        "een klim naar de top van de Puig de Missa tijdens een zonvakantie op Ibiza. Op deze manier maakt u kennis" +
        "met beide gezichten van het Spaanse eiland dat behoort tot de Balearen.";
    window.scrollTo(0, 15000); //scroll down to detail article
}

