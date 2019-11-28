/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-26
 */

var lettre;
var saisie;

lettre = prompt("Veuillez rentrer une lettre: ");
saisie = lettre.toUpperCase();

if ((saisie === "A") || (saisie === "E") || (saisie === "I") || (saisie === "O") || (saisie === "U") || (saisie === "Y")){
    alert("Vous avez saisie une voyelle, la lettre: "+saisie+".");
}
else {
    alert("Vous avez saisie une consonne, la lettre: "+saisie+".");
}