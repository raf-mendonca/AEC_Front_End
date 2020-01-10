/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */

var cpt = 0;

while (cpt != 4) {
    for (var i = 0; i <= 5; i++) {
        document.write("["+cpt+"."+i+"]");
        if (i === 5) {
            document.write("</br>");
            cpt++;
        }
    }
}