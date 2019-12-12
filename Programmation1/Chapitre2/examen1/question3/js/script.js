/**Examen 1 - Question 3
 * Rafael Izaias De Mendonça
 */

var pizza;
var legumes;
var legumePrix;
var pepperoni;
var pepperoniPrix;
var sauce;
var saucePrix;
var qtsauce;
var tps;
var tvq;
var total;

pizza = 10;
alert("Le prix de la pizza au fromage est de 10$. Veuillez choisir si vous voulez ajouter plus d'ingredients: ");
legumes = prompt("Voulez-vous ajouter des légumes pour 5$ ? Répondez 'Oui' ou 'Non'.");
pepperoni = prompt("Voulez-vous ajouter du pepperoni pour 8$ ? Répondez 'Oui' ou 'Non'.");
sauce = prompt("Voulez-vous ajouter de la sauce pour 1$ par personne ? Répondez 'Oui' ou 'Non'.");

if (legumes.toUpperCase() === 'OUI'){
    pizza+= 5;
    legumePrix = 5;
}
else if (legumes.toUpperCase() === 'NON') {
    legumePrix = "Pizza sans légumes.";
}
else {
    alert("Legumes: Erreur de saisie.");
}

if (pepperoni.toUpperCase() === 'OUI'){
    pizza+= 8;
    pepperoniPrix = 8;
}
else if (pepperoni.toUpperCase() === 'NON'){
    pepperoniPrix = "Pizza sans pepperoni.";
}
else {
    alert("Pepperoni: Erreur de saisie.");
}

if (sauce.toUpperCase() === 'OUI'){
    qtsauce = Number(prompt("Veillez rentrer combien des personnes pour la sauce"));
    pizza+= qtsauce;
    saucePrix = qtsauce;
}
else if (sauce.toUpperCase() === 'NON'){
    saucePrix = "Aucune demande de sauce.";
}
else {
    alert("Sauce: Erreur de saisie.");
}

document.write("Résume: "+legumePrix+" + "+pepperoniPrix+" + "+saucePrix+". ");
document.write("<p>Total de la pizza avant taxes: "+pizza+"$. </p>");
 tps = pizza * 0.05;
 tvq = pizza * 0.0975;
 total = pizza + tps + tvq;

document.write("<b>Total de la pizza avec taxes: </b>"+total.toFixed(2)+"<b>$.</b>");




