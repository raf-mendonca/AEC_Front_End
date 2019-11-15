/**Structure de contrôle SI
 * Exercices if, else, else if et les opérateurs logiques
 * Étudiant: Rafael De Mendoça
 */


var valeurdachat;
var total;
var rabais;

valeurdachat = Number(prompt("Veuillez informer le valeur total de vos achats: "));

if (valeurdachat > 200){
    rabais = valeurdachat * 15 / 100;
    total = valeurdachat - rabais;
    alert("Félicitations! Vous avez un rabais de 15% !");
    alert("Total avec rabais: "+total);
}
else{
    alert("Total de vos achats:"+valeurdachat);
}
