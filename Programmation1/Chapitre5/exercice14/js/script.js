/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Corrigé par: Shany Carle
 * Date: 2020-01-25
 */

var tableau = [];
var trouver = false;
//Création de nombres aléatoires et insertion dans l'array au lieu de le faire rentrer
for (var i =0; i<12 ; i++) {
    tableau[i] = Math.floor(Math.random() *10);
    console.log(tableau[i]);
}
// navigation dans l'array
for (var j =0; j<tableau.length; j++){
    for (var k =0; k<tableau.length; k++)
        if ((tableau[j] + tableau[k]) === 15){
            document.write("Le nombre à l'indice "+j+" est égal à "+tableau[j]+" plus le nombre de l'indice "+k+" qui est égal à "+tableau[k]+" est égal à 15.<br>");
            trouver = true;
        }
}
if (!trouver){
    document.write("Aucune solution!");
}