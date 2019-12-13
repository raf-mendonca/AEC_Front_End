/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-12
 */

var nbrAleatoires = 0;
var nbrDe0 = 0;
var nbrDe1 = 0;

for (var i = 0; i < 100; i++) {
        nbrAleatoires = Math.floor(Math.random() * 2);
        document.write(nbrAleatoires + ", </br>");
        if (nbrAleatoires === 0) {
            nbrDe0++;
        } else if (nbrAleatoires === 1) {
            nbrDe1++;
        }
}
document.write("Il y a "+nbrDe0+" zeros.");
document.write("Il y a "+nbrDe1+" numéros un.");





