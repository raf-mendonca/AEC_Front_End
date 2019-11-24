/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-23
 */

var lettre;

lettre = prompt("Veuillez rentrer une lettre: ");

if (lettre === "w"){
    alert("Avancer.");
}
if (lettre === "a"){
    alert("Gauche.");
}
if (lettre === "d"){
    alert("Droite.")
}
if (lettre === "s"){
    alert("Reculer.")
}
else if (lettre != "w" && lettre != "a" && lettre != "d" && lettre != "s" ){
    alert("Vous-avez mal saisie!");
}
