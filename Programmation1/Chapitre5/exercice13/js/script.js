/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-25
 */

var tableau = [];
var trouver = false;

for (var i =0; i<12 ; i++) {
    tableau[i] = Math.floor(Math.random() *10);
}

for (var j =0; j<tableau.length; j++){
    if ((tableau[j] + tableau[11]) === 15){
        document.write("Le nombre à l'indice "+j+" =  "+tableau[j]+" + le nombre "+tableau[11]+" au dernier indice est = 15.<br>");
        trouver = true;
    }
}
if (!trouver){
    document.write("Aucune solution!");
}