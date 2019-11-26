/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-25
 */

var nbrA;
var nbrB;
var nbrC;

nbrA = Number(prompt("Veuillez rentrer le premier nombre: "));
nbrB = Number(prompt("Veuillez rentrer le deuxième nombre: "));
nbrC = Number(prompt("Veuillez rentrer le troixième nombre: "));

if (nbrA < nbrB && nbrA <nbrC ) {
    alert("Le premier nombre " + nbrA + ", est plus petit que le deuxième "+ nbrB +" et le troisième nombre "+nbrC+".");
}
if (nbrB < nbrA && nbrB < nbrC){
    alert("Le deuxième nombre "+nbrB+", est plus petit que le premier "+nbrA+" et le troisième "+nbrC+".");
}
if (nbrC < nbrA && nbrC < nbrB){
    alert("Le troisième nombre "+nbrC+", est plus petit que le premier "+nbrA+" et le deuxième "+nbrB+".");
}
else if ((nbrA === nbrB && nbrA === nbrC)||(nbrB === nbrA && nbrB === nbrC)||(nbrC === nbrA && nbrC === nbrB)){
    alert("Les numéros sont identiques!");
}