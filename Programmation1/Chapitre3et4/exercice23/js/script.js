/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-16
 * Corrigé par Prof.: Shany Carl
 */

var nb = prompt("Entrez un nombre");

for(var i = 0;i<nb.length;i++){
    document.write(nb[i] + "<br>");
}
document.write("----------------------");

for(var i = nb.length-1;i>=0;i--){
    document.write(nb[i] + "<br>");
}

