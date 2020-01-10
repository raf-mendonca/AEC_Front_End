/**
 * Exercices Boucles
 * while, do while,
 * Étudiant: Rafael De Mendonça Date: 2020-01-07
 */


var cptMasc = 0;
var cptFemi = 0;

do{
    var sexe = prompt("Veuillez rentrer la lettre correspondant à votre sexe 'M' masculin et 'F' feminin: ");
    var individu = sexe.toUpperCase();
    if (individu === 'M'){
        document.write("Masculin.</br>");
        cptMasc++;
    }
    else if (individu === 'F') {
        document.write("Feminin.</br>");
        cptFemi++;
    }
}while (individu === 'M' || individu === 'F');

document.write("Le nombre de masculin est de "+cptMasc+". ");
document.write("Le nombre de feminin est de "+cptFemi+". ");