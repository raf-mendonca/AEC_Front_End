/*Exercice JQuery The Flash*/
/* Prof.: Shany Carle
* Rafael De Mendonça
* Date: 2020-02-27
*/


//ne marche pas

$("#boutonGauche").click(function() {
    $("#flashID").css("left","200px");
});

$("#boutonDroite").click(function() {
    $("#flashID").css("left","400px");
});

//manque revenir à l'image originale
$("#boutonChangerImage").click(function() {
    $("#flashID").attr("src", "img/Flash2.png");
});

$("#boutonEnleverImage").click(function() {
    $("#flashID").hide();
});
//ne marche pas
$("#boutonAjouterImage").click(function() {
    $("#flashID").show("src","img/Flash1.png");
});

$("#boutonAjouterAttribut").click(function() {
    $("#flashID").attr("alt" , "Photo de Flash");
});

$("#boutonAjouterTitre").click(function() {
    $("img").before("<h1>Justice League</h1>");
});

$("#boutonDupliquer").click(function() {
    $("#flashID").clone().insertAfter("#flashID");
});

$("#boutonRalentir").click(function() {
    $("#flashID").remove().prependTo("#flashID");
});

$( "#boutonPerso1" ).click(function() {
    $( "#flashID" ).slideDown();
});

$("#boutonRalentir").click(function() {
    $("#flashID").remove().prependTo("#flashID");
});

let monTimer;
let vitesseSupreme = false;

$("#boutonVitesseSupreme").click(function() {
    if(!vitesseSupreme){
        monTimer  = setInterval(function(){
            $("#flashID").toggle()}, 500);
        vitesseSupreme = true;
    }
});

$("#boutonFinVitesseSupreme").click(function() {
    clearInterval(monTimer);
    vitesseSupreme = false;
    $("#flashID").show();
});

$( "#boutonNuke").click(function() {
    $(".centralCity").addClass("bomba");
});







