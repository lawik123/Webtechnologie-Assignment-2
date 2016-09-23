/**
 * function called onload which calls the showSlides function
 */
function init() {
    showSlides();
}

var myIndex = 0;

/**
 * method which loops through all the images
 */
function showSlides() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}