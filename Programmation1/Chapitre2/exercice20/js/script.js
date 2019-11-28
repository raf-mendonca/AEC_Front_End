/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-26
 */

var age;

age = Number(prompt("Veuillez rentrer votre âge: "));

if (age >= 18){
    alert("Adulte");
}
if (age >= 12 && age <= 17){
    alert("Adolescente");
}
if (age >= 0 && age < 12) {
    alert("Enfant");
}
else if (age < 0){
    alert("Âge invalide, veuillez saisir à nouveau")
}


