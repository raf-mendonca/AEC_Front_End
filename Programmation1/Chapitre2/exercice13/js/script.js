/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-23
 */

var nbrA;
var nbrB;

nbrA = Number(prompt("Veuillez rentrer un nombre: "));
nbrB = Number(prompt("Veuille rentrer le deuxième nombre: "));

if (nbrA < nbrB) {
    alert("Le premier nombre est plus petit " + nbrA + " que le deuxième " + nbrB + ".");
}
else if (nbrB > nbrA){
    alert("Le premier nombre est plus petit "+nbrB+"que ne deuxième"+nbrA);
}
else{
    alert("Erreur! Les numéros sont identiques");
}