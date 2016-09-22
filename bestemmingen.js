/**
 * Created by Lars Meulenbroek on 9/22/2016.
 */

function scrolltop() {
    window.scrollTo(0,0);
}

function portugalOnClick() {
    articleReset()
    document.getElementById("bc-portugal").style.display = "block";
    document.getElementById("tb-portugal").style.display = "block";
    window.scrollTo(0, 15000);
}

function spanjeOnClick() {
    articleReset()
    document.getElementById("bc-spanje").style.display = "block";
    document.getElementById("tb-spanje").style.display = "block";
    window.scrollTo(0, 15000);
}

function ibizaOnClick() {
    articleReset()
    document.getElementById("bc-ibiza").style.display = "block";
    document.getElementById("tb-ibiza").style.display = "block";
    window.scrollTo(0, 15000);
}

function griekenlandOnClick() {
    articleReset()
    document.getElementById("bc-griekenland").style.display = "block";
    document.getElementById("tb-griekenland").style.display = "block";
    window.scrollTo(0, 15000);
}

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
