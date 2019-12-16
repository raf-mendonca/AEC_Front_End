/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-15
 */


var conteur = 0;
var motdepasse;


do {
    motdepasse = prompt("Veuillez rentrer votre mot de passe: ");
    conteur++;

}
while (motdepasse != 'patate');
document.write(conteur+" erreur. ");


