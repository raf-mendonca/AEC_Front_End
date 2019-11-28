/**Structure de contrôle Si/if
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendonça Date: 2019-11-26
 */

var valeurdachat;
var total;
var escompte;

valeurdachat = Number(prompt("Les montants supérieurs ou égaux à $500.00 ont un escompte. Veuillez informer le valeur total de vos achats: "));

if (valeurdachat >= 500){
    escompte = valeurdachat * 0.12;
    total = valeurdachat - escompte;
    alert("Vous avez un rabais de 12% ! $"+escompte+".");
    alert("Total avec rabais: "+total);
}
else{
    alert("Total de vos achats: "+valeurdachat);
}