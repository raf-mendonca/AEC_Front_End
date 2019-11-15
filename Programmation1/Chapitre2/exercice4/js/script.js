/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça
 */

var nbr1 = Number(prompt("Veuillez rentrer un nombre: "));
var nbr2 = Number(prompt("Veuillez rentrer un deuxième nombre: "));
var total;

if (nbr2 != 0){
   total = nbr1 / nbr2;
   alert("Le nombre "+nbr1+" divisé par "+nbr2+" est ègal à "+total);
}else{
    alert("Division par zéro interdite.");
}