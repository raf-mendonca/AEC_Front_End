/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */

var cpt = 0;

while (cpt != 13) {
    for (var i = 1; i <= 11; i+=2) {
        document.write(i + " ");
        if (i === 11) {
            document.write("</br>");
            cpt++;
        }
    }
}