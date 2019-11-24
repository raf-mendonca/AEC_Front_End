/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-23
 */

var age;
var sexe;
var prixassur;
var pvehic;


pvehic = Number(prompt("Veuillez rentrer le prix de votre véhicule: "));
age = Number(prompt("Veuillez rentrer votre agê:"));
sexe = prompt("Veuillez rentrer votre sexe, exemple: 'M' ou 'F'.");

if (sexe.toUpperCase() === "M") {
    if (age >= 16 && age <= 25) {
        prixassur = pvehic * 0.05;
    }
    else {
        prixassur = pvehic * 0.03;
    }
    document.write("<p class='textevert'>Votre prime est de $</p>"+prixassur);


}
else if (sexe.toUpperCase() === "F"){
    if (age >= 16 && age <= 25) {
        prixassur = pvehic * 0.02;
    }
    else {
        prixassur = pvehic * 0.03;
    }
    document.write("<p class='textemagenta'>Votre prime est de $</p>"+prixassur);

}

if (sexe.toUpperCase() != "M" && sexe.toUpperCase() != "F"){
    alert("Veuillez rentrer votre sexe qui est légalement accepté par l'état-civil ou que vous définissez vous-même, veuillez rentrer 'F' pour femme ou 'M' pour homme.");
}

