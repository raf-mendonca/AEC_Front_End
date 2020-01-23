/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-16
 */

var tabVraiEtFaux = [];
var cpt =0;
var Faux = 0;
var Vrai = 0;
var cptConsVrai = 0;
var cptConsFaux = 0;

for (var i = 0; i<1000; i++) {
    tabVraiEtFaux[i] = Boolean(Math.floor(Math.random()*2)); /** tabVraiEtFaux[tabVraiEtFaux.push()]= tabVraiOuFaux[i] = Boolean(Math.floor(Math.random() * 2)); */
    if (tabVraiEtFaux[i] === false) {
        Faux++;
    }
    else {
        Vrai++;
    }
}


document.write("Nombre de vrai: "+Vrai+". Plus longue sequence de True "+cptConsVrai);
document.write("Nombre de faux: "+Faux+". Plus longue sequence de False "+cptConsFaux);


