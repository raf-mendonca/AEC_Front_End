/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-29
 */


var valeur;
var a = ["Desjardins " , "RBC " , "Scotia Bank ", "TD "];
var b = [ "Hydro_Quebec " , "NB Power " , "Via Rail " , "Canada Poste "];
var c = ["Air Canada " , "Petro Canada " , "Arselor-Mital ", "SNC-Lavalin "];


valeur = Number.parseFloat(prompt("Entrer l'indice de pollution entre 0.04 et 1.00"));

if (valeur >= 0.04 && valeur <= 0.31 ){
    document.write("Indice Normal");
}

else if (valeur > 0.31 && valeur <= 0.40 ){
    document.write("<p><b>Liste des entreprises à suspendre leurs activités: </b></p>"+a);
}

else if (valeur > 0.40 && valeur <= 0.50 ){
    document.write("<p><b>Liste des entreprises à suspendre leurs activités: </b></p>"+ a +" , "+ b +".");
}

else if (valeur > 0.50 && valeur <= 1 ){
    document.write("<p><b>Liste des entreprises à suspendre leurs activités: </b></p>"+ a +" , "+ b +" , "+ c +".");
}

else{
    document.write("<p>Valeur impossible</p>");
}