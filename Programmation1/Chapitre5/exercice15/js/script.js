/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Corrigé par: Shany Carle
 * Date: 2020-01-25
 */

var tabNombres = [];
var nb1,nb2,temp;

//Création de nombres aléatoires et insertion dans l'array au lieu de le faire rentrer
for(var i=0;i<12;i++){
    tabNombres[i] = Math.floor(Math.random() * 10);
    console.log(tabNombres[i]);
}


document.write(tabNombres + "<br>");
nb1 = Number(prompt("Quelle indice voulez-vous échanger?")); // exemple: indice 1 avec l'indice 3
nb2 = Number(prompt("Quelle indice voulez-vous échanger?"));

temp = tabNombres[nb1];
tabNombres[nb1] = tabNombres[nb2];
tabNombres[nb2]= temp;
document.write(tabNombres);