/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-08
 */



for (var ligne = 0; ligne<= 30; ligne++) {
    for (var i = 0; i <= 10; i+=2) {
        document.write(i + " ");
        if (i === 10) {
            document.write("</br>");

        }
    }
}