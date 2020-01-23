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

var option = prompt("Veuillez entrer une option de cours:");
var reponse;

for (var i = 0; i <cours.length ; i++){
    if (option.toUpperCase() === cours[i]){
        reponse= 'OUI';
        document.write(reponse);
    }
}
if (reponse != 'OUI'){
    document.write("NON");
}


