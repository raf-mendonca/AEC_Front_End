//Lire le nom et l'âge d'un individu, puis convertir son äge en jours. Imprimer un message incluant son nom et informer les nombres de jours vécus.

var nom;
var age;
var annes;
var jours;

nom = prompt("Quel est votre nom? "));
age = Number(prompt("Quel est votre âge? "));

annes = age*365;
jours = annes;

console.log("Vous avez vecu approximativement "+jours+" jours.");



