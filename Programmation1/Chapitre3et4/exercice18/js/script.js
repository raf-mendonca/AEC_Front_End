/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */

var cpt = 0;

while (cpt != 10) {
    for (var i = 1; i <= 10; i++) {
        document.write(i + " ");
        if (i === 10) {
            document.write("</br>");
            cpt++;
        }
    }
}