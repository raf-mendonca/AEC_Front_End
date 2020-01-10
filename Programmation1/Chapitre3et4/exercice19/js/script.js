/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */

var cpt = 0;

while (cpt != 30) {
    for (var i = 0; i <= 10; i+=2) {
        document.write(i + " ");
        if (i === 10) {
            document.write("</br>");
            cpt++;
        }
    }
}