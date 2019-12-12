/**Examen 1 - Question 4
 * Rafael Izaias De Mendonça
 */

var forme;
var aire;
var pi;
var rayon;
var longueur;
var largeur;
var cote;


pi = 3.14;

forme = prompt("Choisissez la forme que vous voulez calculer l'aire. 'O' pour cicle. 'R' pour rectangle. 'T' pour triangle. 'C' pour carré.");
forme = forme.toUpperCase();

if (forme === 'O'){
    rayon = Number(prompt("Veuillez rentrer le rayon du cercle: "));
    aire = (rayon*rayon)*3.14;
    document.write("L'aire du cercle est de: "+aire.toFixed(2));
}
else if (forme === 'R'){
    longueur = Number(prompt("Veuillez rentrer la longueur du rectangle: "));
    largeur = Number(prompt("Veuillez rentrer la largeur du rectangle: "));
    aire = longueur * largeur;
    document.write("L'aire du rectagle est de: "+aire.toFixed(2));
}
else if (forme === 'T'){
    longueur = Number(prompt("Veuillez rentrer la longueur du triangle: "));
    largeur = Number(prompt("Veuillez rentrer la largeur du triangle: "));
    aire = (longueur * largeur)/2;
    document.write("L'aire du triangle est de: "+aire.toFixed(2));
}
else if (forme === 'C'){
    cote = Number(prompt("Veuillez rentrer la mesure de la cöté du carré:"));
    aire = cote * cote;
    document.write("L'aire du carré est de: "+aire.toFixed(2));
}

else {
    document.write("Erreur de saisie.");
}
