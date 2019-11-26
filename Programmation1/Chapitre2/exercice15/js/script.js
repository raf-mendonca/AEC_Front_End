/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-25
 * Formule du périmétre = 2(h+b)
 * Formule de l'aire = b*h
 */

var aire;
var peri;
var b;
var h;

b = Number(prompt("Veuillez rentrer la mésure de la base:"));
h = Number(prompt("Veuillez rentrer la mésure de l'hateur:"));

peri = 2*(b+h);
alert("Le périmétre du rectangle est de "+peri+".");

if (peri >= 100){
    aire = b*h;
    alert("L'aire du rectangle est de "+aire+".");
}