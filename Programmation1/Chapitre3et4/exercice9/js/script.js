/**
 * Exercices Boucles
 * while, do while, for
 * Étudiant: Rafael De Mendonça Date: 2019-12-15
 */

var tempfahr = 10;
var celsius;

while (tempfahr <= 20){
    document.write(tempfahr+" <b>Fahrenheit</b> est égal à ");
    celsius = 5/9 * (tempfahr-32);
    celsius = parseFloat(celsius.toFixed(1));
    document.write(celsius+"<b> Celsius</b>. </br>");
    tempfahr++;
}