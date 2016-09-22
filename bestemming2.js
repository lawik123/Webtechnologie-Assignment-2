/**
 * Created by Lawik Ayoub on 22-Sep-16.
 */

function spanjeOnClick () {
    document.getElementById("detail").style.display= "block";
    document.getElementById("image").src="assets/spanje.jpg";
    document.getElementById("imagetext").innerHTML ="Spanje";
    document.getElementById("text").innerHTML= "Een lange kustlijn verdeeld over verschillende Costa's, temperamentvolle steden als"+
            "Barcelona en Madrid en overheerlijke Spaanse tapas, paella en sangria: als je ergens 'la buena vida' kunt"+
            "ervaren dan is het wel tijdens een vakantie in Spanje. Dit land in het zuidwesten van Europa is vanwege de"+
            "ligging aan de Middellandse Zee al jaren dé plek voor een strandvakantie.";
    window.scrollTo(0, 15000); //scroll down to detail article
}

