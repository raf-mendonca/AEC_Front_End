/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-16
 */


var nomEleve = [];
var note = [];
var somme = 0;
var media = 0;

for (var i=0; i<5 ; i++) {
    nomEleve[i] = prompt("Entrez le nom de l'étudiant: ");
    note[i] = Number(prompt("Entrez la note: "));
    somme+= note[i];
}
media = somme / note.length;
document.write("Nom des éleve: "+nomEleve+".</br>");
document.write("Notes des éleves "+note+" et moyenne: "+media+"</br>");

for (var j=0; j<note.length; j++){
        if (note[j] > media){
            document.write("Nom: "+nomEleve[j]+", ");
            document.write(note[j]+" note. </br>");
        }
}








/**

for(var i=0; i < notes.length; i++){
    somme = somme + notes[i];
    media = somme / 5;
}

*/


