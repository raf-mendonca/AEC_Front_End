/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-21
 */

var cours = [
    "INFORMATIQUE",
    "ADMINISTRATION",
    "HISTOIRE",
    "GÉNIE",
    "GEOGRAPHIE",
    "BUREAUTIQUE"
];

var option = prompt("Veuillez entrer une option de cours:").toUpperCase();
var reponse = false;

for (var i = 0; i <cours.length ; i++){
    if (option === cours[i]){
        reponse = true;
    }
}
if (reponse){
    console.log("Le cours est offert");
}
else{
    console.log("Le cours n'est pas offert");
}


