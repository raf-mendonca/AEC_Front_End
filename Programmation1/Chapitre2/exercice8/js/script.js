/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-19
 */

var supplementaires;
var paiesup;
var paiesemaine;
var paietotal;
var tauxsup;
var tauxh;
var heures;
var semaine = 40;

tauxh = Number(prompt("Entrez votre taux horaire: "));
heures = Number(prompt("Entrez la quantité d'heures travaillées au cours de la semaine: "));
if (heures > semaine){
    supplementaires = heures - semaine;
    tauxsup = tauxh * 2;
    paiesup = supplementaires * tauxsup;
    paiesemaine = tauxh * 40;
    paietotal =  paiesemaine + paiesup;

    alert("Vous-avez travaillé "+supplementaires+" heures supplémentaires. Total des heures supplémentaires $"+paiesup+".");
    alert("Votre paie sera de "+paietotal+" cette semaine.");
}
else {
    paietotal = tauxh * heures;
    alert("Votre paie sera de "+paietotal+" cette semaine.");
}
