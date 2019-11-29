/**Structure de contrôle Si/if
 * Question 3 A
 * Étudiant: Rafael De Mendonça Date: 2019-11-28
 */

var nom = "Pikachu";
var attaque = "Queue de fer"; /*Il faut déclarer une string entre guillemets.*/

if (nom === "Dracaufeu"){
    alert("Dracaufeu est l’évolution de Reptincelle");
}
else if(nom === "Pikachu"){  /*il faut utiliser else if(). il manquait le ===*/

    alert("Pikachu évolue en Raichu"); /*sera visible uniquement sur la console F12.*/
}
else{
    alert(""+attaque);
}

