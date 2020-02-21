/**Formatif 2 - Question 3
 * Rafael Izaias De Mendonça
 * Date: 2020-02-09
 */

var tabChance = [];
var nbr;
var trouver = false;


//Nombres aléatoires
for (var i = 0; i < 100; i++) {
    tabChance[i] = Math.floor(Math.random() * (200 - 1) + 1); /*Math.floor(Math.random() * (max - min + 1) + min); genere un nombre entre le max et le min*/

}

//Question à l'usager
nbr = Number(prompt("Entrez un nombre de 1 à 200. "));

//Parcour dans le tableau
for (var j = 0; j < tabChance.length; j++) {
    if (nbr === tabChance[j]) {
        trouver = true;
    }
}


if(trouver){
    document.write("Le nombre saisie EST dans la liste.</br>");

}
else{
    document.write("Le nombre saisie n'est pas dans la liste.</br>");
}



