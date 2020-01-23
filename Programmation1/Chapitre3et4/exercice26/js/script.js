/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-16
 * Corrigé par Prof.: Shany Carl
 */

var carte1,carte2,carte3;
var nbPrediction = 0;
var prediction;
var gagner = true;

while (gagner){
    carte1 = Math.floor(Math.random() * 13 + 1);
    carte2 = Math.floor(Math.random() * 13 + 1);

    prediction = prompt("Carte 1 = " + carte2 + " \nCarte 2 = " + carte1 + "\nE pour Entre\nN pour Non");
    prediction = prediction.toUpperCase();
    carte3 = Math.floor(Math.random() * 13 + 1);
    document.write("La 3e carte est " + carte3 + "<br>");


    if((carte3 > carte1 && carte3 < carte2) || (carte3 < carte1 && carte3 > carte2)){
        if(prediction === "E"){
            document.write("Gagné<br>");
            nbPrediction++;
        }
        else{
            document.write("Perdu<br>");
            gagner = false;
        }

    }
    else{
        if(prediction === "N"){
            document.write("Gagné<br>");
            nbPrediction++;
        }
        else{
            document.write("Perdu<br>");
            gagner = false;
        }
    }
    document.write(nbPrediction + " bonnes predictions");

}
