// Calculer le salaire brut d'un employé

var taux;
var heures;
var salaireheb;

taux = Number(prompt("Veullez entrer votre taux horaire: "));
heures = Number(prompt("Veullez entrer la quantité d'heures travailles cette semaine: "));

salaireheb = taux*heures;

console.log("Votre revenue brut cette semaine est: "+salaireheb);
