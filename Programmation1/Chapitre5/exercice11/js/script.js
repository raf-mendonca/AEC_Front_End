/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-25
 */

var tabRecensement = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var nbrEnfants = 0;


while (nbrEnfants !== "STOP"){
    nbrEnfants = prompt("Combien avez-vous d'enfants? Pour quitter répondez STOP.");

    if (nbrEnfants >= 0 && nbrEnfants < 30){
        if (nbrEnfants<10){
            tabRecensement[nbrEnfants]++;
        }
        else {
            tabRecensement[10]++;
        }
    }
}

/**Pour afficher l'array avec l'indice */
for (var i = 0; i<=10; i++){
    if (i !== 10){
        document.write("Nombre de familles avec " + i + " enfants = " + tabRecensement[i] + "<br>");
    }
    else {
        document.write("Nombre de familles avec 10 enfants = " + tabRecensement[10] + "<br>");
    }
}







