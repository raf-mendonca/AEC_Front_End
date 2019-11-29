/**Structure de contrôle Si/if
 * Question 3 B
 * Étudiant: Rafael De Mendonça Date: 2019-11-28
 */

var Pokemon;
var attaque1 = "eclair";
var attaque2 = "rogne";


if (attaque1 === "rogne" &&  attaque2 === "eclair"){
    Pokemon = "Pikachu";
}
else if (attaque1 === "rogne" ||  attaque2 === "eclair"){
    Pokemon = "Raichu";
}
else{
    Pokemon = "Salamèche";
}
alert("Pokemon = "+Pokemon);

