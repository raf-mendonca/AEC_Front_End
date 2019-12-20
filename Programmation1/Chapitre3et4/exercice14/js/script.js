/**
 * Exercices Boucles
 * while, do while,
 * Étudiant: Rafael De Mendonça Date: 2019-12-19
 */



var sommePositive = 0;
var sommeNegative = 0;

do {
    var nbr = Number(prompt("Veuillez rentrer un nombre: "));
    if (nbr > 0){
        sommePositive+= nbr;
    }
    else if (nbr < 0){
        sommeNegative+= nbr;
    }
}while (nbr != 0);

document.write(sommePositive+" resulta nombres positives.</br>");
document.write(sommeNegative+" resulta nombres negatives.");

