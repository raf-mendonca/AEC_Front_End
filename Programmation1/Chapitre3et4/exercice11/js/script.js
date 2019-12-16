/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-16
 */
var nbr = 1;
var carre;
var cube;

while (nbr <= 10){
    document.write("Le carré et le cube du numéro "+nbr+" est ègal à ");
    carre = nbr * nbr;
    cube = nbr * nbr * nbr;
    document.write(+carre+" carré, "+cube+" cube.</br>");
    nbr++;
}