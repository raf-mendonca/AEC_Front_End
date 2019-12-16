/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-16
 */
var montant = 5;
var taxe;

while (montant <= 100){
    document.write("Pour le montatant de "+montant);
    taxe = montant * 0.09;
    taxe = parseFloat(taxe.toFixed(2));
    document.write(" taxe de 9% est égal à "+taxe+"$.</br>");
    montant+= 5;
}