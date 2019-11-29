/**Structure de contrôle Si/if
 * Question 2
 * Étudiant: Rafael De Mendonça Date: 2019-11-28
 */
var dommagespoints;
var pointsviepk;
pointsviepk = Number(prompt("Veuillez réntrer votre nombre des points de vie: "));


if (pointsviepk < 60){
    dommagespoints = 100;
}
if (pointsviepk >= 60 && pointsviepk <= 79){
    dommagespoints = 150;
}
if (pointsviepk >= 80 && pointsviepk <= 99){
    dommagespoints = 200;
}
if (pointsviepk > 100){
    dommagespoints = 250;
}
alert("Vous avez "+dommagespoints+" points de dommages.");