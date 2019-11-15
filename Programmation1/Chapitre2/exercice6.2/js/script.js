/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça
 * Exercice 6 ave if au sens inverse
 */
var note;

note = Number(prompt("Écrivez votre ponctuaction de 0 à 100: "));

if (note >=0 && note <=59){
    alert("Vous-avez obtenue la note E");
}else if (note >= 60 && note <=69){
    alert("Vous-avez obtenue la note D");
}else if (note >= 70 && note <=79){
    alert("Vous-avez obtenue la note C");
}else if (note >= 80 && note <=89){
    alert("Vous-avez obtenue la note B");
}else if (note >=90 && note <=100){
    alert("Félicitations! Vous-avez obtenue la note A");
}