/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-22
 */



nbr = Number(prompt("Veuillez rentrer le nombre de réference pour le mois: "));
if (nbr <= 12 && nbr > 0){
    if (nbr === 1){
        alert("Janvier.");
    }
    if (nbr === 2){
        alert("Février.");
    }
    if (nbr === 3){
        alert("Mars.");
    }
    if (nbr === 4){
        alert("Avril.");
    }
    if (nbr === 5){
        alert("Mai.");
    }
    if (nbr === 6){
        alert("Juin.");
    }
    if (nbr === 7){
        alert("Juillet.");
    }
    if (nbr === 8){
        alert("Août.");
    }
    if (nbr === 9){
        alert("Septembre.");
    }
    if (nbr === 10){
        alert("Octobre.");
    }
    if (nbr === 11){
        alert("Novembre.");
    }
    if (nbr === 12) {
        alert("Décembre.");
    }
}
else {
    alert("Mois invalide.")
}