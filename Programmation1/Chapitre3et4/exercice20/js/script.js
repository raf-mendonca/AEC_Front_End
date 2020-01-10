/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */

var cpt = 0;

while (cpt != 12) {
    for (var i = 10; i >= 0; i-=2) {
        document.write(i + " ");
        if (i === 0) {
            document.write("</br>");
            cpt++;
        }
    }
}