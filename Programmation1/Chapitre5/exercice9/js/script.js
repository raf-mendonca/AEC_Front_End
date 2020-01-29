/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-16
 */

var tableau = [];
var max =0;
var min = 9999999;

/**Creation d'un tableau avec nombres aléatoires*/
for (var i=0; i<10 ; i++) {
    tableau[i] = Math.floor(Math.random() * 100); //nombres de 0 à 99
}

/**On passe tous les éléments du tableau pour trouver le min et max.*/

for (var j = 0; j <10; j++){
    if (tableau[j] < min){
        min = tableau[j];
    }
    if (tableau[j] > max) {
        max = tableau[j];
    }
}
document.write("Le minimum est " + min + "<br>");
document.write("Le maximum est " + max);