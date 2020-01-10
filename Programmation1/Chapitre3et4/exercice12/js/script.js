/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-16
 */
var valeur = 0.01;
var jour = 1;
var total= 0.01;

for (var i= 0; i <= 10; i++){
    valeur = parseFloat(valeur.toFixed(2));
    total = parseFloat(total.toFixed(2));
    document.write("Le jour "+jour+" la valeur du dêpot est de "+valeur+"$. Le total dans votre compte est de "+total+"$.</br>");
    valeur = valeur * 2;
    total = total + valeur;
    jour++;

}
