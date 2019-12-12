/**Examen 1 - Question 1
 * Rafael Izaias De Mendonça
 *
 */

var billets;
var rabais;
var prix;
var prixdegroup;


prix = 50;
billets = Number(prompt("Le prix d'un billet est de 50$. Pour les achats en groupe à partir de 10 personnes vous avez un rabais de 5% pouvant arriver jusqu'à 20%. Combien de billets voulez-vous acheter?"));

if (billets >= 10 && billets <= 19){
    rabais = 50 * 0.05;
    prixdegroup = (prix - rabais) * billets;
    document.write("Le total pour le group sera de "+prixdegroup+".");
}
else if (billets >= 20 && billets <= 29){
    rabais = 50 * 0.10;
    prixdegroup = (prix - rabais) * billets;
    document.write("Le total pour le group sera de "+prixdegroup+".");
}
else if (billets >= 30 && billets <= 39){
    rabais = 50 * 0.15;
    prixdegroup = (prix - rabais) * billets;
    document.write("Le total pour le group sera de "+prixdegroup+".");
}
else if (billets >= 40){
    rabais = 50 * 0.20;
    prixdegroup = (prix - rabais) * billets;
    document.write("Le total pour le group sera de "+prixdegroup+".");
}
else {
    prixdegroup = prix * billets;
    document.write("Le total pour le group sera de "+prixdegroup+".");
}



