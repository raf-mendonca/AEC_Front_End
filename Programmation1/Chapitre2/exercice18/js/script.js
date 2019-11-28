/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-26
 */

var note;

note = Number(prompt("Veuillez rentrer votre note entre 0 à 100:"));
 if (note > 60 && note <= 100){
     alert("Bravo!");
 }
 else if (note < 60 && note >= 0){
     alert("Échec.");
 }
 else {
     alert("Numéro invalide.");
 }