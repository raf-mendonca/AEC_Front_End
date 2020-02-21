/**
 * Exercices Tableau, array:
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-29
 */

var tabNoms = ["Shany","Carle","Neo","Fernando","Marie","Daniel","Bruno","Zarah","Yannik","Gabriel"];


//console.log(texte1[0] < texte2[0]);

for(var i=0; i<tabNoms.length; i++){
    for(var j=0; j<i; j++){
        if (tabNoms[j] > tabNoms[i]){
            temp = tabNoms[i];
            tabNoms[i] = tabNoms[j];
            tabNoms[j] = temp;
        }
    }
}
console.log(tabNoms);
console.log(tabNoms[0][1]); //Affiche le caractèr h

