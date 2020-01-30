/**
 * Exercices Tableau, array: Mélanger un array
 * Étudiant: Rafael De Mendonça
 * Corrigé par: Shany Carle
 * Date: 2020-01-29
 */

var tabNombres = [500,200,400,1000,600];
var temp;

/** solution avec la function .sort()
tabNombres.sort(function (a,b) {
    return a -b;
});
console.log(tabNombres);
*/

//solution SANS la function sort
// Para ordenar um array em ordem decrescente
for (var i = 0; i <tabNombres.length; i++){
    for (var j = 0; j < i; j++){
        if (tabNombres[i] > tabNombres[j]){
            temp = tabNombres[i];
            tabNombres[i] = tabNombres[j];
            tabNombres[j] = temp;
        }
    }
}
console.log(tabNombres);




