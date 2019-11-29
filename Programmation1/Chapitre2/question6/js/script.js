/**Structure de contrôle Si/if
 * Question 6
 * Étudiant: Rafael De Mendonça Date: 2019-11-28
 */

var facture;
var controleur;
var raspiberry;
var moteurs;
var totalmoteurs;
var camera;
var matriceLEDS;
var filament3D = 20;
var batterie = 15;

alert("Choisissez parmi les options suivantes les items de votre RASPIBOT");

raspiberry= (prompt("Choisissez parmi les deux options de contrôleurs, RaspBerry: Pi de 55$ ou PiZero de 15$: Écrivez 'Pi' ou 'PiZero'"));
if (raspiberry.toUpperCase() === 'PI'){
    controleur = 55;
}
if (raspiberry.toUpperCase() === 'PIZERO'){
    controleur = 15;
}

moteurs= Number(prompt("Veuillez la quantité des moteurs entre 2 et 24"));
if (moteurs >=2 && moteurs <=24){
    totalmoteurs = moteurs * 5;
}

camera = prompt("Voullez-vous additionner une caméra USB pour seullement 35$? Écrivez 'Oui ou 'Non' ");
if (camera.toUpperCase() === "OUI"){
    camera = 35;
}
else {
    camera = 0;
}

matriceLEDS = prompt("Voullez-vous additionner une matrice de LEDS pour les yeux du Robot, pour seullement 10$? Écrivez 'Oui ou 'Non' ");
if (matriceLEDS.toUpperCase() === "OUI"){
    matriceLEDS = 10;
}
else {
    matriceLEDS = 0;
}

document.write("<p>Valeur du contrôleur "+controleur+"$.</p>");
document.write("<p>Valeur des moteurs "+totalmoteurs+"$.</p>");
document.write("<p>Valeur de la caméra "+camera+"$.</p>");
document.write("<p>Valeur de la matrice LED "+matriceLEDS+"$.</p>");
document.write("<p>Valeur du filament 3D "+filament3D+"$, valeur de la batterie USB "+batterie+"$.</p>");

facture = controleur + totalmoteurs + camera + matriceLEDS + filament3D + batterie;
document.write("<p><b>Valeur total du RasPiBot est de "+facture+"$. Merci!</b></p>");







