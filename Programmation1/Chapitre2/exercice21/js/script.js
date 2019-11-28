/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-26
 */

var revenu;
var impot;

revenu = Number.parseFloat((prompt("Veuillez rentrer votre revenu brut:")));

if (revenu > 0 && revenu <= 7000){
    impot = revenu * 0.16;
    alert("Votre impôt sera de $"+impot);
}
if (revenu > 7000 && revenu <= 14000){
    impot = (revenu - 1120) * 0.195;
    alert("Votre impôt sera de $"+impot);
}
if (revenu > 14000 && revenu <= 23000){
    impot = (revenu - 2485) * 0.215;
    alert("Votre impôt sera de $"+impot);
}
if (revenu > 23000 && revenu <= 50000){
    impot = (revenu - 4420) * 0.245;
    alert("Votre impôt sera de $"+impot);
}
if (revenu > 50000){
    impot = (revenu - 11035) * 0.260;
    alert("Votre impôt sera de $"+impot);
}