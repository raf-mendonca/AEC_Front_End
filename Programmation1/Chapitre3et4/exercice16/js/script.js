/**
 * Exercices Boucles
 * while, do while,
 * Étudiant: Rafael De Mendonça Date: 2020-01-07
 */

var nbrAleatoires = 0;
var joueur = 0;
var ordi = 0;


for (var i = 0; i < 10; i++) {
    nbrAleatoires = Math.floor(Math.random() * 2);
    var nbr = Number(prompt("Choisissez un numéro entre 0 et 1 !"));
    if (nbr === 0 || nbr === 1){
        if (nbr === nbrAleatoires) {
            joueur++;
        }
        else if (nbr != nbrAleatoires) {
            ordi++;
        }
    }
    else if (nbr != 0 || nbr != 1){
        document.write("Mauvaise saisie...")
    }
}
document.write("Tu as fait "+joueur+" points, l'ordinateure a fait "+ordi+" points.");
