/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-25
 */

var nbr1;
var nbr2;
var somme;
var prod;
var subt;


nbr1 = Number(prompt("Veuillez rentrer le premier chiffre:"));
nbr2 = Number(prompt("Veuillez rentrer le deuxième chiffre:"));

if (nbr1 >= 10 && nbr2 >= 10){
    somme = nbr1 + nbr2;
    alert("La somme des deux chiffres sont égal à "+somme);
}
if (nbr1 < 10 && nbr2 < 10){
    prod = nbr1 * nbr2;
    alert("Le produit des deux chiffres sont égal à "+prod);
}
if (nbr1 >= 10 && nbr2 < 10){
    subt = nbr1 - nbr2;
    alert("La différence entre les deux chiffres est de: "+subt);
}
if (nbr2 >= 10 && nbr1 < 10){
    subt = nbr1 - nbr2;
    alert("La différence entre les deux chiffres est de: "+subt);
}