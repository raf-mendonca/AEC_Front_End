/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-25
 */

var nbrA;
var nbrB;
var nbrC;

nbrA = Number(prompt("Veuillez rentrer le premier nombre A: "));
nbrB = Number(prompt("Veuillez rentrer le deuxième nombre B (différent du 1er et 3ème nombre): "));
nbrC = Number(prompt("Veuillez rentrer le troixième nombre C (différent du 2ème et 1er nombre): "));

if (nbrA < nbrB && nbrA < nbrC ) {
    if(nbrB > nbrC){
        document.write("<p>A plus petit :</p>" + nbrA + "<p> B plus grand </p>" + nbrB);
    }
    else if(nbrC > nbrB){
        document.write("<p>A plus petit :</p>" + nbrA + "<p> C plus grand </p>" + nbrC);
    }
    else{
        document.write("<p>Vous avez entré des nombres égaux ou pas des nombres</p>");
    }
}
else if (nbrB < nbrA && nbrB < nbrC){
    if(nbrA > nbrC){
        document.write("<p>B plus petit :</p>" + nbrB + "<p> A plus grand </p>" + nbrA);
    }
    else if(nbrC > nbrA){
        document.write("<p>B plus petit :</p>" + nbrB + "<p> C plus grand </p>" + nbrC);
    }
    else{
        document.write("<p>Vous avez entré des nombres égaux ou pas des nombres</p>");
    }
}
else if (nbrC < nbrA && nbrC < nbrB){
    if(nbrA > nbrB){
        document.write("<p>C plus petit :</p>" + nbrC + " <p>A plus grand </p>" + nbrA);
    }
    else if(nbrB > nbrA){
        document.write("<p>C plus petit :</p>" + nbrC + " <p>B plus grand </p>" + nbrB);
    }
    else{
        document.write("<p>Vous avez entré des nombres égaux ou pas des nombres</p>");
    }
}
else{
    document.write("<p>Vous avez entré des nombres égaux ou pas des nombres</p>");
}
