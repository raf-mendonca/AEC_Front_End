/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-19
 */

nbr = Number(prompt("Rentrer un numéro: "));
if (nbr > 0){
    alert("Le numéro que vous avez choisi est POSITIF!");
}
else if(nbr < 0){
    alert("Le numéro que vous avez choisi est NEGATIF!");
}
else{
    alert("Vous avez rentrez 0");
}