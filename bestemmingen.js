/**
 * Created by Lars Meulenbroek on 9/22/2016.
 */

/**
 * method which is used for the user to scroll to the top when first on page
 */
function scrolltop() {
    window.scrollTo(0,0);
}

/**
 * show portugal detail
 */
function portugalOnClick() {
    articleReset(); //reset article view
    document.getElementById("bc-portugal").style.display = "block";
    document.getElementById("tb-portugal").style.display = "block";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show spanje detail
 */
function spanjeOnClick() {
    articleReset(); //reset article view
    document.getElementById("bc-spanje").style.display = "block";
    document.getElementById("tb-spanje").style.display = "block";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show ibiza detail
 */
function ibizaOnClick() {
    articleReset(); //reset article view
    document.getElementById("bc-ibiza").style.display = "block";
    document.getElementById("tb-ibiza").style.display = "block";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * show griekenland detail
 */
function griekenlandOnClick() {
    articleReset(); //reset article view
    document.getElementById("bc-griekenland").style.display = "block";
    document.getElementById("tb-griekenland").style.display = "block";
    window.scrollTo(0, 15000); //scroll down to detail article
}

/**
 * function resets the article view so that a new detail screen can fit in.
 */
function articleReset() {
    document.getElementById("bc-griekenland").style.display = "none";
    document.getElementById("tb-griekenland").style.display = "none";
    document.getElementById("bc-ibiza").style.display = "none";
    document.getElementById("tb-ibiza").style.display = "none";
    document.getElementById("bc-portugal").style.display = "none";
    document.getElementById("tb-portugal").style.display = "none";
    document.getElementById("bc-spanje").style.display = "none";
    document.getElementById("tb-spanje").style.display = "none";
}
