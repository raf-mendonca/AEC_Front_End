/**
 * Created by Shany on 2020-02-20.
*/
$('.selectDC').hide();
$('.selectMarvel').hide();
$('.selectSW').hide();



var $univers = $('input[name="radioUnivers"]');

$univers.change(function() {
    let radioValue = $("input[name='radioUnivers']:checked").val();
    if(radioValue === "sw"){
        $('.selectDC').hide();
        $('.selectMarvel').hide();
        $('.selectSW').show();
    }
    else if(radioValue === "dc"){
        $('.selectDC').show();
        $('.selectMarvel').hide();
        $('.selectSW').hide();
    }
    else if(radioValue === "marvel"){
        $('.selectDC').hide();
        $('.selectMarvel').show();
        $('.selectSW').hide();
    }
});

$( "#swSelect" ).change(function() {
    let perso = $( "#swSelect option:selected" ).text();
    if(perso === "Obiwan"){
        $("#personnage").attr("src","img/Obiwan.png");
    }
    else if(perso === "Darth Vader"){
        $("#personnage").attr("src","img/Darth-Vader.png");
    }
    else if(perso === "Yoda"){
        $("#personnage").attr("src","img/yoda-png.png");
    }
});

$( "#dcSelect" ).change(function() {
    let perso = $( "#dcSelect option:selected" ).text();
    if(perso === "Superman"){
        $("#personnage").attr("src","img/superman.png");
    }
    else if(perso === "Batman"){
        $("#personnage").attr("src","img/Batman.png");
    }
    else if(perso === "Flash"){
        $("#personnage").attr("src","img/flash.png");
    }
});

$( "#marvelSelect" ).change(function() {
    let perso = $( "#marvelSelect option:selected" ).text();
    if(perso === "Arrow"){
        $("#personnage").attr("src","img/arrow.png");
    }
    else if(perso === "Spiderman"){
        $("#personnage").attr("src","img/spiderman.png");
    }
    else if(perso === "Hulk"){
        $("#personnage").attr("src","img/Hulk.png");
    }
    else if(perso === "Thor"){
        $("#personnage").attr("src","img/Thor.png");
    }
});

$( "#boutonEnvoyer" ).click(function() {
    $('#idContainer').hide();
});

