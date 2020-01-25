/**
 * Exercices Boucles
 * Tableau, array
 * Étudiant: Rafael De Mendonça
 * Date: 2020-01-23
 */

var gabariTest = ["VRAI", "FAUX", "FAUX", "FAUX", "VRAI", "VRAI", "FAUX", "VRAI", "FAUX", "VRAI"]
var resultatTest = [];
var points = 0;

for (var i=0; i<10; i++) {
    if (i === 0) {
        resultatTest[0] = prompt("Répondre vrai ou faux: La capitale du Canada est Ottawa?");
        if (resultatTest[0].toUpperCase() === gabariTest[0]) {
            points++;
        }
    }
    if (i === 1) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La capitale de la province du Québec est Montréal?");
        if (resultatTest[1].toUpperCase() === gabariTest[1]) {
            points++;
        }
    }
    if (i === 2) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La capitale de la Colombie Britanique est Vancouver?");
        if (resultatTest[2].toUpperCase() === gabariTest[2]) {
            points++;
        }
    }
    if (i === 3) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La capitale du Nouveaux Brunswick est Moncton?");
        if (resultatTest[3].toUpperCase() === gabariTest[3]) {
            points++;
        }
    }
    if (i === 4) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La sigle du climat de la region de Québec c'est-il DFB - climat continental humide?");
        if (resultatTest[4].toUpperCase() === gabariTest[4]) {
            points++;
        }
    }
    if (i === 5) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La plus grand ville au Québec c'est Montréal?");
        if (resultatTest[5].toUpperCase() === gabariTest[5]) {
        points++;
        }
    }
    if (i === 6) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La deuxième plus grand ville au Québec c'est Laval?");
        if (resultatTest[6].toUpperCase() === gabariTest[6]) {
            points++;
        }
    }
    if (i === 7) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La langue la plus parlé en Ontario est-il l'anglais?");
        if (resultatTest[7].toUpperCase() === gabariTest[7]) {
            points++;
        }
    }
    if (i === 8) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La ville la plus grand du continent Américain est-il Toronto?");
        if (resultatTest[8].toUpperCase() === gabariTest[8]) {
            points++;
        }
    }
    if (i === 9) {
        resultatTest[resultatTest.length] = prompt("Répondre vrai ou faux: La langue majoritaire au Québec est le français?");
        if (resultatTest[9].toUpperCase() === gabariTest[9]) {
            points++;
        }
    }
}
document.write("Tu as fait "+points+" sur 10!");