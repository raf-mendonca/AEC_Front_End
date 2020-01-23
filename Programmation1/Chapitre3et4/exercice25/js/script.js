/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2020-01-16
 * Corrigé par Prof.: Shany Carl
 */

somme = 0;

for(var nb=1;nb<10000;nb++){
    for(var diviseur = 1; diviseur<nb;diviseur++){
        if(nb % diviseur === 0){
            //document.write(diviseur + " est un diviseur de " + nb + "<br>");
            somme+=diviseur;
        }
    }
    if(somme === nb){
        document.write(nb + " est un nombre parfait!<br>");
    }
    somme = 0;
}
