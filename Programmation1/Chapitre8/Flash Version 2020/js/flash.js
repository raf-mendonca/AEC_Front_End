/*Exercice JQuery The Flash*/
/* Prof.: Shany Carle
* Rafael De Mendonça
* Date: 2020-02-27
*/
$("#flashIDBas").hide();
$("#nuke").hide();
var nbFlash = 1;
var gauche = 20;
var FlashVisible = true;

$("#boutonGauche").click(function() {
    gauche -=10;
    //$('#imgFlash').css("left",gauche+"px");
    $( "#imgFlash" ).animate({ "left": "-=50px" }, "slow" );
});

$("#boutonDroite").click(function() {
    gauche += 10;
    //$('#imgFlash').css("left",gauche+"px");}
    $("#imgFlash").animate({"left": "+=50px"}, "slow");
});

$("#boutonChangerImage").click(function() {
    var imageFlashSRC = $('#flashID').attr("src");
    if(imageFlashSRC === "flash.jpg"){
        $('#flashID').attr("src","flash2.jpg");
    }
    else{
        $('#flashID').attr("src","flash.jpg");
    }
});


$("#boutonEnleverImage").click(function() {
    $("#flashID").hide();
});

$("#boutonAjouterImage").click(function() {
    $("#imgFlash").show();
});

$("#boutonAjouterAttribut").click(function() {
    $("#flashID").attr("alt" , "Photo de Flash");
});

$("#boutonAjouterTitre").click(function() {
    $('#flashID').attr("title","Image de Flash");}
);

$("#boutonDupliquer").click(function() {
    nbFlash++;
    $('#imgFlash').append('<img id="flashID'+nbFlash+'" class="flashClass" src="flash.jpg" width="200px"/>');
});

$("#boutonRalentir").click(function() {
    $('#flashID'+nbFlash).remove();
    nbFlash--;
});

$( "#boutonPerso1" ).click(function() {
    $( "#flashID" ).slideDown();
});

$("#boutonTeleport").click(function() {
    if($("#flashID").is(":visible")){
        $("#flashID").hide();

        $("#flashIDBas").show();
    }
    else{
        $("#flashID").show();

        $("#flashIDBas").hide();
    }
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

$("#boutonNuke").click(function() {
    $('#AllSite').hide();
    $('#nuke').show();
});






