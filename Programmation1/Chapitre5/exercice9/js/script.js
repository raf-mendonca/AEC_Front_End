/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-16
 */

var tabNoms = [];
var nom;
var majeur =0;
var mineur = 9999999;

for (var i=0; i<10 ; i++) {
    tabNoms[i] = prompt("Entrez un numéro:");

    for (var j = 0; j < tabNoms.length; j++) {
        nom = tabNoms[j];
        if (nom > tabNoms[j]) {
            majeur = tabNoms[j];

        } else if (nom < tabNoms[j]) {
            mineur = tabNoms[j];
        }
    }
}
document.write("Liste de noms: "+tabNoms+" </br>");
document.write("Le nom majeure dans la liste: "+majeur+". </br>");
document.write("Le nom mineur dans la liste: "+mineur+". </br>");