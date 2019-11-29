/**Structure de contrôle Si/if
 * Question 5
 * Étudiant: Rafael De Mendonça Date: 2019-11-28
 *
 */

var angle;
angle = Number(prompt("Veuillez réntrer l'angle de la main du robot: "));


if (angle >= 0 && angle <= 39){
    document.write("<p>Main fermée</p>");
}
if (angle >= 40 && angle <= 89){
    document.write("<p>Main agrippé</p>");
}
if (angle >= 90 && angle <= 180){
    document.write("<p>Main ouverte</p>");
}
else if (angle < 0 || angle > 180){
    document.write("<p><b>Le robot est hors de contrôle!!</b></p>");
}