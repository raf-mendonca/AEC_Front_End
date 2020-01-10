/**
 * Exercices Boucles
 * while, do while,
 * Étudiant: Rafael De Mendonça Date: 2020-01-06
 */


var cptPositive = 0;
var cptNegative = 0;

while (nbr != 0){
    var nbr = Number(prompt("Veuillez rentrer un nombre: "));
    if (nbr > 0){
        cptPositive++;

    }
    else if (nbr < 0){
        cptNegative++;
    }
}

document.write(cptPositive+" nombres positives.</br>");
document.write(cptNegative+" nombres negatives.");