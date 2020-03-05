/*Exercice JQuery The Flash*/
/* Prof.: Shany Carle
* Rafael De Mendonça
* Date: 2020-02-27
*/


//ne marche pas
$(document).ready(function(){
    $("#boutonGauche").click(function(){
        $("#flashID").animate({right: '200px'});
    });
});
/*
$("#boutonGauche").click(function() {
    $("#flashID").css("right","100px");
});
$("#boutonDroite").click(function() {
    $("#flashID").css("left","600px");
});
*/
$(document).ready(function(){
    $("#boutonDroite").click(function(){
        $("#flashID").animate({left: '500px'});
    });
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






